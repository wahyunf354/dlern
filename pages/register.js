function PrograssBar(props) {
  return (
    <div className="h-3 relative overflow-hidden">
      <div className="w-full h-full bg-gray-200 absolute"></div>
      <div
        className="h-full bg-yellow-500 absolute"
        style={{ width: props.width }}
      ></div>
    </div>
  );
}

export default function Register() {
  return (
    <>
      <PrograssBar width="50%" />
      <h1>Registrasi</h1>
      <div>
        <input type="email" placeholder="Masukan Email" className="input" />
      </div>
    </>
  );
}
