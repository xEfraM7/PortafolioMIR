import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import js from '../assets/icons/js-icon.svg';
import html from '../assets/icons/html-5.svg';
import css from '../assets/icons/css3.svg';
import Github from '../assets/icons/github.svg';
import colorSharp from "../assets/img/color-sharp.png";
import Laravel from '../assets/img/laravel.jpg';
import yarn from '../assets/img/yarn.png';
import npm from '../assets/icons/npm.svg';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Here is a summary of my skills</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={html} alt="image" />
                  <h5>Html</h5>
                </div>
                <div className="item">
                  <img src={js} alt="image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={css} alt="image" />
                  <h5>Css</h5>
                </div>
                <div className="item">
                  <img src={Github} alt="image" />
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img src={Laravel} alt="image" />
                  <h5>Laravel/PHP</h5>
                </div>
                <div className="item">
                  <img src={npm} alt="image" />
                  <h5>NPM</h5>
                </div>              
                <div className="item">
                  <img src={yarn} alt="image" />
                  <h5>Yarn</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
