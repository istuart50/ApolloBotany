import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faInstagramSquare,
  faSquareFacebook,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className="app-footer">
      <Container>
        <Row className="footer-row">
          <Col className="footer-links-header">
            <h5>Our Site</h5>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Plant Search
                </Link>
              </li>
              <li>
                <Link to="/products" className="footer-link">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="footer-link">
                  Checkout
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <FontAwesomeIcon size="2xl" icon={faInstagramSquare} />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <FontAwesomeIcon size="2xl" icon={faSquareFacebook} />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <FontAwesomeIcon size="2xl" icon={faTwitterSquare} />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <FontAwesomeIcon size="2xl" icon={faYoutubeSquare} />
            </a>
          </Col>
          <Col className="text-center">
            <a role="button" className="btn btn-link" href="tel:+18004273367">
              <FontAwesomeIcon icon={faPhone} /> 1-800-gardens
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:ilikeplants@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} /> ilikeplants@gmail.com
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
