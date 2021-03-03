import Email from "../components/molekul/Register/Email";
import Password from "../components/molekul/Register/Password";
import Days from "../components/molekul/Register/Days";
import Hour from "../components/molekul/Register/Hour";
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
    <div className="h-screen">
      <PrograssBar width="50%" />
      {/* <Email /> */}
      {/* <Password /> */}
      {/* <Hour /> */}
      <Days />
    </div>
  );
}
