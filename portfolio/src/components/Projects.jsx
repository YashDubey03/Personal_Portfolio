import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import NoteSaver from "../assets/img/NoteSaver.png";
import CryptoTracker from "../assets/img/CryptoTracker.png";
import ChatApp from "../assets/img/ChatApp.png";
import FashionWebsite from "../assets/img/FashionWebsite.png";

export const Projects = () => {
  const projects = [
    {
      title: "Note Saver",
      imgUrl: NoteSaver,
      link: "https://note-saver-chi.vercel.app/",
      description:
        "A React based Note saver web application which will save and manage notes on the local storage ",
    },
    {
      title: "Crypto Tracker",
      imgUrl: CryptoTracker,
      link: "https://crypto-tracker-omega-lake.vercel.app/",
      description:
        "A React based crypto tracker which will track and anlyze crypto coins data  ",
    },
    {
      title: "Chat App",
      imgUrl: ChatApp,
      link: "https://chat-app-frontend-seven-ashy.vercel.app/",
      description:
        "A real-time chat application using MERN stack and Socket.io",
    },
    // {
    //   title: "Portfolio Website",
    //   imgUrl: projImg1,
    //   link: "https://your-live-link.com",
    // },
    {
      title: "Fashion Ecommerce",
      imgUrl: FashionWebsite,
      link: "https://fashion-ecommerce-snowy.vercel.app/",
      description:
        "A modern fashion e-commerce website built with MERN stack and Stripe integration for payments.",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are some of the projects I have worked on, focusing on
                    real-world use cases and practical implementation.
                  </p>

                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="decor" />
    </section>
  );
};
