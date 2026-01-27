import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center footer-main">
          {/* Left */}
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h4 className="footer-title">Yash Dubey</h4>
            <p className="footer-text">
              MERN Stack Developer | React Enthusiast
            </p>
          </Col>

          {/* Right */}
          <Col md={6} className="text-center text-md-end">
            <div className="footer-contact">
              <p>
                <FaEnvelope /> yashvardhandubey83@gmail.com
              </p>
              <p>
                <FaPhoneAlt /> +91 7415404969
              </p>
            </div>

            <div className="footer-social">
              <a
                href="https://www.linkedin.com/in/yashvardhan-dubey-473190266/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/YashDubey03"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-4">
            <p className="copyright">© 2026 Yash Dubey. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
