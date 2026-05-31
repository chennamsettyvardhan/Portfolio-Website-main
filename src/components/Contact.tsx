import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:chennamsettyvardhan@gmail.com" data-cursor="disable">
                chennamsettyvardhan@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p className="contact-location" style={{ color: "#b5aeb8", fontSize: "16px", marginTop: "5px" }}>
              Kalasalingam Academy of Research and Education, Tamil Nadu, India
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/chennamsettyvardhan"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/chennamsetty-dharma-vardhan-317b68317"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Chennamsetty Dharma Vardhan</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
