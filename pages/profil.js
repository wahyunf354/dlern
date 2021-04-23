import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import HeaderContext from "../contexts/HeaderContext";
import firebase from "../config/firebase";
import { useRouter } from "next/router";
import Header from "../components/molekul/Header";
import TabBar from "../components/molekul/TabBar";
import Button from "../components/atom/Button";
import Spinner from "../components/atom/Spinner";

const Profil = () => {
  const router = useRouter();
  const { user, setUser } = useContext(HeaderContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        router.push("/welcome");
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };

  const handleSelectPhoto = () => {
    const imageInput = document.getElementById("img_profil");
    imageInput.click();
  };

  useEffect(() => {
    if (!user.name) {
      setIsLoading(true);
      firebase.auth().onAuthStateChanged((user) => {
        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const {
                name,
                email,
                uid,
                hour,
                days,
                eps,
                koin,
                sesion,
                profile,
                nameImg,
              } = doc.data();
              setUser({
                name,
                email,
                uid,
                hour,
                days,
                eps,
                koin,
                sesion,
                profile,
                nameImg,
              });
              setIsLoading(false);
            } else {
              alert("Maaf terjadi masalah ");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
            alert("Maaf terjadi masalah ");
            setIsLoading(false);
            router.push("/login");
          });
        if (!user) router.push("/login");
        setIsLoading(false);
      });
    }
  }, []);

  const hendleUploadProfile = (event) => {
    const image = event.target.files[0];
    console.log(image);
    setIsLoading(true);
    const storageRef = firebase.storage().ref();
    // delete profile lama
    if (user.nameImg != "nophoto.png") {
      const deleteRef = storageRef.child("users/" + user.nameImg);
      deleteRef
        .delete()
        .then(() => {
          console.log("success delete");

          // send to server
          const imageRef = storageRef.child("users/" + image.name);
          return imageRef.put(image);
        })
        .then(function (snapshot) {
          console.log("Uploaded file");
          return snapshot.ref.getDownloadURL();
        })
        .then((downloadUrl) => {
          console.log(downloadUrl);
          setUser({
            ...user,
            profile: downloadUrl,
            nameImg: image.name,
          });
          return firebase.firestore().collection("users").doc(user.uid).update({
            profile: downloadUrl,
            nameImg: image.name,
          });
        })
        .then(() => {
          setIsLoading(false);
          console.log("success");
        })
        .catch((err) => console.log(err));
    } else {
      const imageRef = storageRef.child("users/" + image.name);
      imageRef
        .put(image)
        .then(function (snapshot) {
          console.log("Uploaded file");
          return snapshot.ref.getDownloadURL();
        })
        .then((downloadUrl) => {
          console.log(downloadUrl);
          setUser({
            ...user,
            profile: downloadUrl,
            nameImg: image.name,
          });
          return firebase.firestore().collection("users").doc(user.uid).update({
            profile: downloadUrl,
            nameImg: image.name,
          });
        })
        .then(() => {
          setIsLoading(false);
          console.log("success");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Layout title={`Profile | ${user.name}`}>
      <Header isFull />
      {isLoading ? (
        <div className="container p-4 mx-auto">
          <Spinner isCenter isGreen isMedium />
        </div>
      ) : (
        <div className="container pt-8 mx-auto flex flex-col items-center">
          <div className="mb-5 bg-gray-300 w-40 h-40 rounded-full relative">
            <div className="flex justify-center w-40 h-40 bg-gray-300 rounded-full overflow-hidden">
              {user.nameImg != "nophoto.png" ? (
                <img className="profile" src={user.profile} alt={user.name} />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="text-gray-100 w-40 h-40"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </div>
            <div className="w-10 h-10 bg-green-900  rounded-full absolute bottom-0 right-0 flex justify-center items-center">
              <Button onClick={handleSelectPhoto}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-7 h-7 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Button>
              <input
                type="file"
                id="img_profil"
                onChange={hendleUploadProfile}
                hidden
              />
            </div>
          </div>
          <h3 className=" px-5 text-5xl mb-5 text-green-900 font-font">
            {user.name}
          </h3>
          <ul className="flex w-full border-b-2 py-5 justify-around">
            <li className="text-3xl font-bold text-yellow">
              {user.koin}
              <span className="text-sm text-gray-400 font-light"> Koin</span>
            </li>
            <li className="text-3xl font-bold text-yellow">
              {user.eps}
              <span className="text-sm text-gray-400 font-light"> Eps</span>
            </li>
          </ul>
          <div className="mb-20 divide-y grid grid-cols-1 w-full mt-16 divide-gray-400 divide-solid">
            <Button onClick={handleLogout} className="text-gray-400 text-xl">
              Keluar
            </Button>
          </div>
        </div>
      )}

      <TabBar />
    </Layout>
  );
};

export default Profil;
