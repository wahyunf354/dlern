import { useState } from "react";
import HeaderContext from "../contexts/HeaderContext";

function ContextWrapper({ children }) {
  const [user, setUser] = useState({});
  const baseUrlAPI = "https://dlern-rest.000webhostapp.com/";

  return (
    <HeaderContext.Provider value={{ user, setUser, baseUrlAPI }}>
      {children}
    </HeaderContext.Provider>
  );
}

export default ContextWrapper;
