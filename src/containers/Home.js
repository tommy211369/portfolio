import Cookies from "js-cookie";

const Home = ({ username, setUsername }) => {
  const handleLogOut = () => {
    setUsername("");
    Cookies.remove("username");
  };

  return (
    <div>
      <h1>HOME</h1>
      <p>
        Bienvenue <span>{username}</span> !
      </p>
      <button onClick={handleLogOut}>Se déconnecter</button>
    </div>
  );
};

export default Home;
