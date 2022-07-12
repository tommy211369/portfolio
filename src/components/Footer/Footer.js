import "./Footer.css";

function Footer() {
  let date = new Date(Date());
  let dateYear = date.getUTCFullYear();
  return (
    <div className="footer">
      <p>Fait par Tommy Thongrasamy avec React - {dateYear}</p>
    </div>
  );
}

export default Footer;
