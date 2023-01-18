import "./App.css";
import AppRouter from "./components/AppRouter";
import { UserContext } from "./context/user-context";
import React, { useEffect, useState, useMemo, useContext } from "react";

function App() {
  const [userId, setUserId] = useState();
  const value = useMemo(() => ({ userId, setUserId }), [userId]);

  useEffect(() => {
    if (document.cookie.length === 0) {
      setUserId(0);
    }
  }, []);

  return (
    <React.StrictMode>
      <UserContext.Provider value={value}>
        <AppRouter></AppRouter>
      </UserContext.Provider>
    </React.StrictMode>
  );
}

export default App;
