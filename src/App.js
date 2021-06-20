import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import MainNav from "./components/MainNav";
import PasswordItem from "./components/PasswordItem";
import NewPassword from "./components/NewPassword";

function App() {
  const DUMMY_LOGINS = [
    {
      title: "Facebook",
      username: "hello123",
      password: "asdf1141",
    },
    {
      title: "Twitter",
      username: "world123",
      password: "hellouu12",
    },
    {
      title: "Instagram",
      username: "doodle15",
      password: "helloworld11",
    },
  ];

  return (
    <div>
      <MainNav />
      <Switch>
        <Route path="/" exact>
          <p>Log in</p>
        </Route>
        <Route path="/profile"></Route>
        <Route path="/password">
          <PasswordItem title={DUMMY_LOGINS[0].title} />
          <PasswordItem title={DUMMY_LOGINS[1].title} />
          <PasswordItem title={DUMMY_LOGINS[2].title} />
          <NewPassword />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
