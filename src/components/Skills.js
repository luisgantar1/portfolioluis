import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn" id="skills-bx">
                        <h2>Programming Language</h2>
                        <p>These are the programming languages that I frequently utilize in my work. These assignments include both personal projects that I work on to improve my knowledge of the programming languages and midterm or final projects for my classes.</p>
                        <div className="row">
                          <div className="col-md-6">
                            <ul className="skill-list">
                              <li>PHP</li>
                              <li>JavaScript</li>
                              <li>Python</li>
                            </ul>
                          </div>
                          <div className="col-md-6">
                            <ul className="skill-list">
                              <li>SQL</li>
                              <li>Java</li>
                              <li>Kotlin</li>
                            </ul>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
