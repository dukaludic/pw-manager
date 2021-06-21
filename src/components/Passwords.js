import "./Passwords.css";

const Passwords = () => {
  return (
    <div className="pwComponentWhole">
      <h1 className="pwTitle">Passwords</h1>
      <div className="pwContainer">
        <div className="pwHeadingsContainer">
          <p>Title</p>
          <p>Username</p>
          <p>Password</p>
          <p>Actions</p>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default Passwords;
