import React from "react";
import { Context } from "../context/login";

const UseAuth = (setterOnly) => {

  const contexts = React.useContext(Context)

  return setterOnly ? [contexts.setState] : [contexts.state , contexts.setState]

}

export default UseAuth;