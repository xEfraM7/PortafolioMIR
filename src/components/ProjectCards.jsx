import { Col } from "react-bootstrap";

export const ProjectCards = ({ title, description, imgUrl,href }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="proj-img" />
        <a
          href={href} target="_blank"
          className="text-decoration-none"
        >
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};
