import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import MainNav from "./components/MainNav";
import PasswordItem from "./components/PasswordItem";
import NewPassword from "./components/NewPassword";
import { useState } from "react/cjs/react.development";
import AuthenticationButton from "./components/authentication-button";
import SignupButton from "./components/signup-button";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./components/Loading";
import LoginForm from "./components/LoginForm";

function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  const DUMMY_DATA = [
    {
      key: "01",
      title: "Facebook",
      username: "hello123",
      password: "asdf1141",
    },
    {
      key: "02",
      title: "Twitter",
      username: "world123",
      password: "hellouu12",
    },
    {
      key: "03",
      title: "Instagram",
      username: "doodle15",
      password: "helloworld11",
    },
  ];

  const [allLoginData, setAllLoginData] = useState(DUMMY_DATA);

  const newLoginDataHandler = (enteredLoginData) => {
    setAllLoginData([enteredLoginData, ...allLoginData]);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {/* <MainNav /> */}
      {/* <SignupButton /> */}
      <LoginForm />
      <Route>
        {allLoginData.map(
          (data) =>
            isAuthenticated && (
              <PasswordItem
                key={data.id}
                title={data.title}
                username={data.username}
                password={data.password}
              />
            )
        )}
        <NewPassword onAddLoginData={newLoginDataHandler} />
      </Route>
    </div>
  );
}

export default App;
