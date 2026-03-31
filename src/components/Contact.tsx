import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://linkedin.com/in/vivekanandkoli"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — vivekanandkoli
              </a>
            </p>
            <p>
              <a
                href="mailto:vivekanand.koli.central@gmail.com"
                data-cursor="disable"
              >
                vivekanand.koli.central@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+66917766617"
                data-cursor="disable"
              >
                +66-917766617
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Bachelor of Engineering in Electrical and Electronics, Konkan Gyanpeeth College of Engineering — 2011–2016
            </p>
            <p>
              PMP Certification (Project Management Professional, PMI) — Currently pursuing, 2026
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://linkedin.com/in/vivekanandkoli"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:vivekanand.koli.central@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="tel:+66917766617"
              data-cursor="disable"
              className="contact-social"
            >
              Phone <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Portfolio adapted <br /> by <span>Vivekanand Koli</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
            <div style={{ marginTop: '10px', opacity: 0.6, fontSize: '12px' }}>
              <img src="https://visitor-badge.laobi.icu/badge?page_id=vivekanandkoli.portfolio" alt="visitors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
