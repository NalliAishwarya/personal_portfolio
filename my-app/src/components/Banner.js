import React, { useState, useEffect, useRef, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Example context usage
const ExampleContext = React.createContext();

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Software Developer"];
  const period = 2000;

  const exampleRef = useRef(null);
  const contextValue = useContext(ExampleContext);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Aishwarya`}{' '}
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Software Developer"]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>Aspiring Software Engineer with a strong foundation in Computer Science and Engineering.
Passionate about solving complex problems and delivering innovative solutions.
Let’s create something amazing together!</p>
                  <button onClick={() => window.open('https://dochub.com/m/shared-document/aishwaryanalli2003/oGZeMNnwXO4aWzJVQvbrYd/aishwarya-resume-pdf?dt=aCN2yfGECe_-peniV1bY', '_blank')}>
                    My Resume <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {/* {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )} */}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
