import Form from "../../components/form/form";
import "./main.css"

const AuthLogin = () => {
  return (
    <div className="login">
      <h1 className="login__title">Welcome to , <span className="spn">YouTube</span></h1>
      <Form className="login__form" />
    </div>
  );
};

export default AuthLogin;
