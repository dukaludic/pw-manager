import "./Home.css";

const Home = () => {
  const name = "Luka";

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
