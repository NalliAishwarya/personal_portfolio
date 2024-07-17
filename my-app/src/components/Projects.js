import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/library.png";
import projImg2 from "../assets/img/travel.jpg";
import projImg3 from "../assets/img/contact.jpeg";
import projImg4 from "../assets/img/ML.png";
import projImg5 from "../assets/img/chatbot.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Library Management System",
      description: "Created and managed a Library Management System, user management, and lending procedures.",
      imgUrl: projImg1,
    },
    {
      title: "Travelling Website",
      description: "Developed a dynamic travel website, providing real-time travel details, itineraries, and secure booking features for a seamless user experience.",
      imgUrl: projImg2,
    },
    {
      title: "Contact Book",
      description: "Developed a responsive Contact Book web application using Django, enabling users to manage contacts securely.",
      imgUrl: projImg3,
    },
    {
      title: "Cardiovascular Disease Prediction - ML",
      description: "Developed a machine learning model that identifies risk factors and predicts the likelihood of cardiovascular disease.",
      imgUrl: projImg4,
    },
    {
      title: "AI Chatbot for healthcare system - NLP",
      description: "Designed and deployed an NLP-based AI chatbot for healthcare, enabling personalized patient interactions.",
      imgUrl: projImg5,
    },
  ];

  const links = [
    { title: "Library Management System", url: "https://github.com/NalliAishwarya/Library_Management_System" },
    { title: "Travelling Website", url: "https://github.com/NalliAishwarya/travel_website" },
    { title: "Contact Book", url: "https://github.com/NalliAishwarya/contact_book" },
    { title: "Cardiovascular Disease Prediction - ML", url: "https://github.com/NalliAishwarya/ML_proj" },
    { title: "AI Chatbot for healthcare system - NLP", url: "https://example.com/ai-chatbot" },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>These are my projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">TITLES</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">LINKS</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <ul>
                        {links.map((link, index) => (
                          <li key={index}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                          </li>
                        ))}
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
