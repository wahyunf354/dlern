import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import Header from "../../../components/molekul/Header";
import TabBar from "../../../components/molekul/TabBar";
import { useRouter } from "next/router";
import HeaderContext from "../../../contexts/HeaderContext";
import ItemKata from "../../../components/molekul/ItemKata";
import Spinner from "../../../components/atom/Spinner";
import InputText from "../../../components/atom/InputText";

const Negara = () => {
  const { baseUrlAPI } = useContext(HeaderContext);
  const router = useRouter();
  const kategori = router.query.kategori;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [resultSearch, setResultSearch] = useState(null);

  useEffect(async () => {
    try {
      const res = await fetch(`${baseUrlAPI}api/vocab/kata_benda/${kategori}`);
      const result = await res.json();
      const result1 = Object.entries(result);
      const data = Object.entries(result1[0][1])[0][1];
      console.log(data);
      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const onChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
    const resultSearch = data.filter(
      (e) =>
        e.jerman.toLowerCase().includes(search.toLowerCase()) ||
        e.indo.toLowerCase().includes(search.toLowerCase())
    );
    setResultSearch(resultSearch);
    setIsShowSearch(true);
    if (search === "") {
      setIsShowSearch(false);
    }
  };

  return (
    <Layout title="Negara | De'lern">
      <Header isBack href="/kosa-kata/kata-benda" />
      <main className="container mt-5 mx-auto flex flex-col">
        <h2 className="text-4xl mx-5 font-bold text-green-900 mb-5">
          {kategori.split("_").join(" ").toUpperCase()}
        </h2>
        <div className="mb-5 mx-5">
          <InputText
            placeholder="Masukan kata kunci..."
            type="text"
            value={search}
            outerClassName="w-full"
            inputClassName="w-full"
            onChange={onChange}
          />
        </div>

        <div>
          {isLoading ? (
            <div className="container flex justify-center p-4 mx-auto">
              <Spinner isCenter isGreen isMedium />
            </div>
          ) : (
            <div className="grid mb-20 md:grid-cols-5 grid-cols-2 gap-4 mx-2">
              {!isShowSearch
                ? data.map((item, i) => (
                    <ItemKata
                      jerman={item.jerman}
                      indo={item.indo}
                      img={`https://dlern-rest.000webhostapp.com/assets/vocab/gambar/${
                        kategori === "obat"
                          ? `${kategori}/medikament-obat`
                          : kategori
                      }/${item.url_gambar}`}
                      sound={`https://dlern-rest.000webhostapp.com/assets/vocab/suara/${kategori}/${item.url_voice}`}
                      type="WITH_IMG"
                    />
                  ))
                : resultSearch.map((item, i) => (
                    <ItemKata
                      jerman={item.jerman}
                      indo={item.indo}
                      img={`https://dlern-rest.000webhostapp.com/assets/vocab/gambar/${
                        kategori === "obat"
                          ? `${kategori}/medikament-obat`
                          : kategori
                      }/${item.url_gambar}`}
                      sound={`https://dlern-rest.000webhostapp.com/assets/vocab/suara/${kategori}/${item.url_voice}`}
                      type="WITH_IMG"
                    />
                  ))}
            </div>
          )}
        </div>
      </main>
      <TabBar />
    </Layout>
  );
};

export default Negara;
