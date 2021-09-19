import { useState } from "react";

const Login = ({ setUserCookie }) => {
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserCookie(user);
  };

  return (
    <div className="login">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-name">
          Entrez votre nom pour vous connecter :
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
        <button>Valider le nom</button>
      </form>
    </div>
  );
};

export default Login;
