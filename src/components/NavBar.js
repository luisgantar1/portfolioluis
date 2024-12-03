import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon6.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <Router>
      <div class="content-overlay">
        <Navbar expand="md" className={`${scrolled ? "scrolled" : ""} ${sidebarActive ? "active" : ""}`}>
        <Container>
          <Navbar.Brand href="/">
            <h1>LUIS</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleSidebar}>
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Link to="home" smooth={true} duration={500}>
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() =>  onUpdateActiveLink('home')}>Home</Nav.Link>
            </Link>
            <Link to="skills-bx" smooth={true} duration={500} >
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            </Link>
            <Link to="projects" smooth={true} duration={500} >
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/luis-gantar-9049872b9/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/luisgantar1"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/bukan.louis/"><img src={navIcon3} alt="" /></a>
              </div>
              <Link to="connect" smooth={true} duration={500}>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
              </Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    </Router>
  )
}
