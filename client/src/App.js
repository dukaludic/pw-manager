import React, { useState } from "react";
import "./App.css";
import MainNav from "./components/MainNav";
import Passwords from "./components/Passwords";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Loading from "./components/Loading";
import { useAuth0 } from "@auth0/auth0-react";

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

  const [logins, setLogins] = useState(DUMMY_LOGINS);
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="appContainer">
        <MainNav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/passwords">
            <Passwords items={logins} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
