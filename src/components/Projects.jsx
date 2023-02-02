import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projectGifs from "../assets/img/project-gifs.png";
import { ProjectCards } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import comingSoon from "../assets/img/coming-soon.jpg";
import journalImg from "../assets/img/journal-app.png";
import encriptador from "../assets/img/encriptado.png";
import quizApp from "../assets/img/quiz-app.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Proyecto de Gifs",
      description: "con GIPHY",
      imgUrl: projectGifs,
      href: "https://gif-expert-app-2.netlify.app",
    },
    {
      title: "Journal App",
      description: "Firebase authentication and React-Redux",
      imgUrl: journalImg,
      href: " https://journal-k9ogsanjj-xefram7.vercel.app",
    },
    {
      title: "Quiz App",
      description: "Javascript Vanilla",
      imgUrl: quizApp,
      href: "https://fabulous-manatee-84bf50.netlify.app",
    },
    {
      title: "Encriptador Oracle",
      description: "Code Challenge #1 Oracle-AluraLatam",
      imgUrl: encriptador,
      href: "https://xefram7.github.io/EncriptadorOracle.github.io/",
    },
    {
      title: "Coming Soon",
      description: "uwu",
      imgUrl: comingSoon,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate_animated animate_Bounce" : ""}
                >
                  <h2>Projects</h2>
                  <p>Here is a summary of my projects</p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills"
              >
                <Nav.Item>
                  <Nav.Link
                  //Aqui activamos esta opcion para cuando haya varios tabs
                  // eventKey="first"
                  >
                    Own Projects
                  </Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item> */}
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
