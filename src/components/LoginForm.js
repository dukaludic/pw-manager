import LoginButton from "./login-button";
import SignupButton from "./signup-button";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
// import Loading from "./components/Loading";
import AuthenticationButton from "./authentication-button";

const LoginForm = () => {
  return (
    <div>
      <AuthenticationButton />
      <SignupButton />
    </div>
  );
};

export default LoginForm;
