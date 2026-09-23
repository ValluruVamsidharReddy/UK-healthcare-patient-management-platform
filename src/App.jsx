import { useState } from "react";
import Login from "./components/Login";
import PatientList from "./components/PatientList";

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <>
      {!loggedIn ? (
        <Login setLoggedIn={setLoggedIn} />
      ) : (
        <PatientList setLoggedIn={setLoggedIn} />
      )}
    </>
  );
}

export default App;
