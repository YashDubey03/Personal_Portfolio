import { Container, Row, Col } from "react-bootstrap";
import self from "../assets/img/self.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>

                  <h1 className="banner-title">
                    Hi, I’m <span className="highlight">Yashvardhan Dubey</span>
                  </h1>

                  <h2 className="banner-subtitle">
                    Software Engineering Student & Full-Stack Web Developer
                  </h2>

                  <p className="banner-description">
                    An enthusiastic Software Engineering student with a strong
                    foundation in modern web technologies. Passionate about
                    building scalable, real-world applications and continuously
                    improving my development skills through hands-on projects.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col
            xs={12}
            md={6}
            xl={5}
            className="d-none d-md-flex justify-content-center"
          >
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <img
                    src={self}
                    alt="Profile Illustration"
                    className="ms-md-5 rounded-circle"
                    style={{
                      width: "350px",
                      height: "350px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <a href="/YashResume.pdf" download style={{ textDecoration: "none" }}>
          <button style={{ border: "1px solid", padding: "1rem 1rem" }}>
            Download Resume
          </button>
        </a>
      </Container>
    </section>
  );
};
