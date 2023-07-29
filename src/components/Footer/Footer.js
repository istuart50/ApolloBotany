import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
            <Row className="footer-links">
              <Col sm={12} md={4}>
                <Link to="/products" className="footer-link">
                  Products
                </Link>
              </Col>
              <Col sm={12} md={5}>
                <Link to="/" className="footer-link">
                  Plant Search
                </Link>
              </Col>
              <Col sm={12} md={3}>
                <Link to="/checkout" className="footer-link">
                  Checkout
                </Link>
              </Col>
            </Row>
          </Col>
          <Col className="text-center">
            <h5>Social</h5>
            <a
              className="footer-link"
              href="http://instagram.com/"
            >
              <FontAwesomeIcon className="fa-3x" icon={faInstagramSquare} />
            </a>{" "}
            <a
              className="footer-link"
              href="http://www.facebook.com/"
            >
              <FontAwesomeIcon className="fa-3x" icon={faSquareFacebook} />
            </a>{" "}
            <a
              className="footer-link"
              href="http://twitter.com/"
            >
              <FontAwesomeIcon className="fa-3x" icon={faTwitterSquare} />
            </a>{" "}
            <a
              className="footer-link"
              href="http://youtube.com/"
            >
              <FontAwesomeIcon className="fa-3x" icon={faYoutubeSquare} />
            </a>
          </Col>
          <Col className="text-center">
            <h5>Contact Us</h5>
            <a className="footer-link" href="tel:+18004273367">
              <FontAwesomeIcon icon={faPhone} /> 1-800-gardens
            </a>
            <br />
            <a className="footer-link"
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
