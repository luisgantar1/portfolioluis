import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Jaoa1.jpeg";
import projImg2 from "../assets/img/Forknknife.jpeg";
import projImg3 from "../assets/img/todolist1.jpeg";
import projImg4 from "../assets/img/Figma1.png";
import projImg5 from "../assets/img/Figma2.png";
import projImg6 from "../assets/img/android1.png";
import projImg7 from "../assets/img/android2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const websiteProjects = [
    {
      title: "Jaoa",
      description: "My First Group React Project",
      imgUrl: projImg1,
    },
    {
      title: "ForknKnife",
      description: "My First Group PHP Project",
      imgUrl: projImg2,
    },
    {
      title: "To-Do-List",
      description: "My Second Group PHP Project",
      imgUrl: projImg3,
    }
  ];

  const uiuxProjects = [
    {
      title: "KANE",
      description: "My Figma Design for Android Project App",
      imgUrl: projImg4,
    },
    {
      title: "IsyaratKu",
      description: "My Figma Design for Android Project App",
      imgUrl: projImg5,
    }
  ];

  const androidProjects = [
    {
      title: "UNION ABSEN",
      description: "My First Personal Android Project App",
      imgUrl: projImg6,
    },
    {
      title: "KANE APP",
      description: "My Second Android Project App",
      imgUrl: projImg7,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some projects I have worked on. These projects were group assignments for my college courses. My personal project so far is just this portfolio website.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">UI/UX Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Android</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first" className = 'tab-first'>
                      <Row>
                        {
                          websiteProjects.map((project, index) => {
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
                    <Tab.Pane eventKey="second" className="tab-second">
                    <Row>
                        {
                          uiuxProjects.map((project, index) => {
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
                    <Tab.Pane eventKey="third" className="tab-third">
                    <Row>
                        {
                          androidProjects.map((project, index) => {
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
