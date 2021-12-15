import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.css";

function Login({ setUserCookie }) {
  const [user, setUser] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    } else {
      setUserCookie(user.toUpperCase());
    }
  };

  return (
    <div className="login">
      <div>
        <span>Tommy Thongrasamy</span> &nbsp;
        <span>Développeur Fullstack Web & Mobile</span>
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="input-name">
          Entrez un nom pour accéder à mon portfolio :
        </label>
        <br></br>
        <input
          type="text"
          id="input-name"
          maxLength="15"
          autoFocus
          onChange={(e) => {
            setUser(e.target.value);
            console.log(e.target.value);
          }}
        />
        <br></br>
        <button>Accéder au portfolio</button>
      </form>

      {showAlert && (
        <div className="alert-message">
          <FontAwesomeIcon
            icon="exclamation-triangle"
            className="warning-icon"
          />
          <p>Vous n'avez pas entré de nom !</p>
        </div>
      )}
    </div>
  );
}

export default Login;
