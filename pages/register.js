import Email from "../components/molekul/Register/Email";
import Password from "../components/molekul/Register/Password";
import Days from "../components/molekul/Register/Days";
import Hour from "../components/molekul/Register/Hour";
import Name from "../components/molekul/Register/Name";
import Fade from "react-reveal/Fade";
import { useState, useEffect } from "react";
import Header from "../components/molekul/Header";
import Stepper from "../components/atom/Stepper";
import Meta from "../components/atom/Stepper/Meta";
import MainContent from "../components/atom/Stepper/MainContent";
import Controller from "../components/atom/Stepper/Controller";
import Button from "../components/atom/Button";
import firebase from "../config/firebase";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Register() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confpassword: "",
    hour: "",
    senin: null,
    selasa: null,
    rabu: null,
    kamis: null,
    jumat: null,
    sabtu: null,
    minggu: null,
  });

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) router.push("/home");
    });
  }, []);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = async () => {
    setIsLoading(true);
    const days = [];
    if (data.senin) days.push("senin");
    if (data.selasa) days.push("selasa");
    if (data.rabu) days.push("rabu");
    if (data.kamis) days.push("kamis");
    if (data.jumat) days.push("jumat");
    if (data.sabtu) days.push("sabtu");
    if (data.minggu) days.push("minggu");
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        firebase.firestore().collection("users").doc(result.user.uid).set({
          name: data.name,
          email: data.email,
          uid: result.user.uid,
          hour: data.hour,
          days,
        });
      })
      .then(() => {
        setIsLoading(false);
        router.push("/home");
      })
      .catch((err) => {
        console.log(err);
        alert("Mohon maaf terjadi masalah");
        setIsLoading(false);
      });
  };

  const steps = {
    name: {
      title: "Nama",
      description: "Masukkan nama kamu agar kami mengenalimu",
      content: <Name onChange={onChange} value={data} />,
    },
    email: {
      title: "Email",
      description: "Masukan email kamu yang valid ya",
      content: <Email onChange={onChange} value={data} />,
    },
    password: {
      title: "Password",
      description: "Masukan password anda agar akun anda aman",
      content: <Password onChange={onChange} value={data} />,
    },
    hour: {
      title: "Mau Kapan Kamu Diingatkan?",
      description: "Kami akan mengingatkanmu selalu",
      content: <Hour onChange={onChange} value={data} />,
    },
    days: {
      title: "Pilih Hari",
      description: "Hari apa saja kamu ingin belajar beri tahu kami",
      content: <Days onChange={onChange} value={data} />,
    },
  };

  return (
    <Layout className="h-screen">
      <Header />
      <Stepper steps={steps}>
        {(nextStep, prevStep, CurrentStep, steps) => (
          <>
            <Meta data={steps} current={CurrentStep} />
            <MainContent data={steps} current={CurrentStep} />
            {CurrentStep === "name" && (
              <Controller>
                {data.name !== "" && (
                  <Fade>
                    <div className="md:w-1/3 w-10/12">
                      <Button
                        className="w-full"
                        isPrimary
                        hasShadow
                        hasRounded
                        onClick={nextStep}
                      >
                        Lanjut
                      </Button>
                    </div>
                  </Fade>
                )}
                <Button
                  className="md:w-1/3 w-10/12 mt-5"
                  isSecondary
                  hasShadow
                  hasRounded
                  type="link"
                  href="landing-page"
                >
                  Cancel
                </Button>
              </Controller>
            )}
            {CurrentStep === "email" && (
              <Controller>
                {data.email !== "" && (
                  <Fade>
                    <div className="md:w-1/3 w-10/12">
                      <Button
                        className="w-full"
                        isPrimary
                        hasShadow
                        hasRounded
                        onClick={nextStep}
                      >
                        Lanjut
                      </Button>
                    </div>
                  </Fade>
                )}
                <Button
                  isSecondary
                  hasShadow
                  hasRounded
                  onClick={prevStep}
                  className="mt-5 md:w-1/3 w-10/12"
                >
                  Back
                </Button>
              </Controller>
            )}
            {CurrentStep === "password" && (
              <Controller>
                {data.password !== "" && data.confpassword !== "" && (
                  <Fade>
                    <div className="md:w-1/3 w-10/12">
                      <Button
                        className="w-full"
                        isPrimary
                        hasShadow
                        hasRounded
                        onClick={nextStep}
                      >
                        Lanjut
                      </Button>
                    </div>
                  </Fade>
                )}
                <Button
                  isSecondary
                  hasShadow
                  hasRounded
                  onClick={prevStep}
                  className="mt-5 md:w-1/3 w-10/12"
                >
                  Back
                </Button>
              </Controller>
            )}
            {CurrentStep === "hour" && (
              <Controller>
                {data.hour !== "" && (
                  <Fade>
                    <Button isPrimary hasShadow hasRounded onClick={nextStep}>
                      Lanjut
                    </Button>
                  </Fade>
                )}
                <Button
                  isSecondary
                  hasShadow
                  hasRounded
                  onClick={prevStep}
                  className="mt-5"
                >
                  Back
                </Button>
              </Controller>
            )}
            {CurrentStep === "days" && (
              <Controller>
                {data.senin !== null && (
                  <Fade>
                    {isLoading ? (
                      <Button isLoading isSecondary hasShadow hasRounded>
                        Loading
                      </Button>
                    ) : (
                      <Button
                        isPrimary
                        hasShadow
                        hasRounded
                        onClick={handleSubmit}
                      >
                        Finish
                      </Button>
                    )}
                  </Fade>
                )}
                <Button
                  isSecondary
                  hasShadow
                  hasRounded
                  onClick={prevStep}
                  className="mt-5"
                >
                  Back
                </Button>
              </Controller>
            )}
          </>
        )}
      </Stepper>
    </Layout>
  );
}
