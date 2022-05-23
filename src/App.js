import AuthLogin from "./pages/login/AuthLogin";
import "./assets/main.css";
import React from "react";
import { Context } from "./context/login";
import AuthenticationApp from "./pages/login/Autotication";

function App() {
  const { token } = React.useContext(Context);

  if (token) {
    return <AuthenticationApp />;
  } else {
    return <AuthLogin />;
  }
}

export default App;
