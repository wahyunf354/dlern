import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";
import ColumnSesion from "../../components/molekul/Game/ColumnSesion";

const data = {
  eps: {
    "eps-1": { id: "eps-1", content: "1" },
    "eps-2": { id: "eps-2", content: "2" },
    "eps-3": { id: "eps-3", content: "3" },
    "eps-4": { id: "eps-4", content: "4" },
    "eps-5": { id: "eps-5", content: "5" },
  },
  sesion: {
    "sesion-1": {
      id: "sesion-1",
      title: "Sesion 1",
      content: "1",
      epsId: ["eps-1", "eps-2", "eps-3", "eps-4", "eps-5"],
    },
    "sesion-2": {
      id: "sesion-2",
      title: "Sesion 2",
      content: "2",
      epsId: ["eps-1", "eps-2", "eps-3", "eps-4", "eps-5"],
    },
    "sesion-3": {
      id: "sesion-3",
      title: "Sesion 3",
      content: "3",
      epsId: ["eps-1", "eps-2", "eps-3", "eps-4", "eps-5"],
    },
    "sesion-4": {
      id: "sesion-4",
      title: "Sesion 4",
      content: "4",
      epsId: ["eps-1", "eps-2", "eps-3", "eps-4", "eps-5"],
    },
  },
  sesionOrder: ["sesion-1", "sesion-2", "sesion-3", "sesion-4"],
};

function Games() {
  return (
    <Layout title="Games | De'lern">
      <Header isFull />
      <div className="container flex flex-col items-center mx-auto pt-5 relative">
        {data.sesionOrder.map((sesion) => {
          return (
            <ColumnSesion
              eps={data.eps}
              sesion={data.sesion[sesion]}
              key={data.sesion[sesion].id}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default Games;
