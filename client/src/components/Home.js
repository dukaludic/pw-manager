import "./Home.css";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  // const { user } = useAuth0();
  // console.log(user);
  const name = "user";

  //Treba malo logike za name i user

  return (
    <div>
      <h1 className="welcome">Hello, {name}...</h1>
      <p className="welcomeTxt">
        Please start by adding your first password. You can do that by selecting
        'Passwords' and then 'Add Password' icon will appear.
      </p>
    </div>
  );
};

export default Home;
