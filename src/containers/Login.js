import { useState } from "react";

const Login = ({ setUserCookie }) => {
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserCookie(user);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-name">
          Entrez votre nom pour accéder à mon portfolio :
        </label>
        <br></br>
        <input
          type="text"
          id="input-name"
          onChange={(e) => {
            setUser(e.target.value);
            console.log(e.target.value);
          }}
        />
        <br></br>
        <button>Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
