import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCards } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Texto Generico",
      description: "Mas Texto Generico",
      imgUrl: projImg1,
    },
    {
      title: "Texto Generico",
      description: "Mas Texto Generico",
      imgUrl: projImg2,
    },
    {
      title: "Texto Generico",
      description: "Mas Texto Generico",
      imgUrl: projImg3,
    },
    {
      title: "Texto Generico",
      description: "Mas Texto Generico",
      imgUrl: projImg1,
    },
    {
      title: "Texto Generico",
      description: "Mas Texto Generico",
      imgUrl: projImg2,
    },
    {
      title: "Texto Generico",
      description: "Mas Texto Generico",
      imgUrl: projImg3,
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
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Est similique sint possimus asperiores aut enim perspiciatis
                    quisquam perferendis repellendus sequi, at fuga adipisci
                    excepturi nemo amet obcaecati, vel, velit libero!
                  </p>
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
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                  consequatur sapiente alias ratione, doloremque totam minus
                  amet, eveniet nostrum cum illo quaerat, sit qui necessitatibus
                  incidunt quisquam fuga inventore corrupti!
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  explicabo fugit quisquam nostrum quibusdam quas totam soluta
                  eum a. Ducimus iusto quo odio corrupti similique doloribus
                  explicabo possimus excepturi id.
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