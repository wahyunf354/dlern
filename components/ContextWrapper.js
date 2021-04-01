import { useState } from "react";
import HeaderContext from "../contexts/HeaderContext";

function ContextWrapper({ children }) {
  const [user, setUser] = useState({});

  return (
    <HeaderContext.Provider value={{ user, setUser }}>
      {children}
    </HeaderContext.Provider>
  );
}

export default ContextWrapper;
