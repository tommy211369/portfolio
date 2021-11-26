import linkedin from "../assets/img/linkedin.png";
import github from "../assets/img/github.png";
import gmail from "../assets/img/gmail.png";
import Fade from "react-awesome-reveal";

function Contact() {
  return (
    <div className="contact">
      <Fade cascade>
        <h3>Me contacter</h3>

        <a href="https://www.linkedin.com/in/tommy-thongrasamy/" target="blank">
          <img src={linkedin} alt="linkedin" />
          <p>linkedin.com/in/tommy-thongrasamy</p>
        </a>

        <a href="https://github.com/tommy211369" target="blank">
          <img src={github} alt="github" />
          <p>github.com/tommy211369</p>
        </a>

        <a href="mailto:tommy.thongrasamy@gmail.com">
          <img src={gmail} alt="gmail" />
          <p>tommy.thongrasamy@gmail.com</p>
        </a>
      </Fade>
    </div>
  );
}

export default Contact;
