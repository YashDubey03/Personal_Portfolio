import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { FaGithub, FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export const Skills = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const skills = [
    { name: "HTML", icon: <TiHtml5 color="#E44D26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
    { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
    { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "C / C++", icon: <TbBrandCpp color="#00599C" /> },
    { name: "Git", icon: <FaGitAlt color="#F1502F" /> },
    { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="skill-bx">
          <h2>Skills</h2>
          <p>
            I build modern, scalable, and user-friendly web applications with a
            focus on clean code and responsive design. I work on both frontend
            and backend development to create smooth and reliable experiences.
          </p>

          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={2500}
            className="skill-slider"
          >
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <h5>{skill.name}</h5>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <img className="background-image-left" src={colorSharp} alt="decor" />
    </section>
  );
};
