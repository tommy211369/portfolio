const Logo = ({ techno, stack }) => {
  return (
    <div>
      <img src={techno} alt={techno} />
      <p>{stack}</p>
    </div>
  );
};

export default Logo;
