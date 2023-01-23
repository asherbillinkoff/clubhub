import "./App.css";
import API from "./api/api";
import AppRouter from "./components/AppRouter";
import { UserContext } from "./context/user-context";
import React, { useEffect, useState, useMemo, useContext } from "react";

function App() {
  const [userId, setUserId] = useState();
  const value = useMemo(() => ({ userId, setUserId }), [userId]);
  // const [value, setValue] = useState({ userId, setUserId });

  useEffect(() => {
    const api = new API();
    api.checkLogin().then((result) => {
      console.log(result);
      setUserId(result.data.loggedIn);
    });
  }, [userId]);

  return (
    <React.StrictMode>
      <UserContext.Provider value={value}>
        <AppRouter></AppRouter>
      </UserContext.Provider>
    </React.StrictMode>
  );
}

export default App;
