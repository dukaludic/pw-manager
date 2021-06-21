import "./App.css";
import MainNav from "./components/MainNav";
import Passwords from "./components/Passwords";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";

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
      <div className="appContainer">
        <MainNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/passwords" component={Passwords} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
