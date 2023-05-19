import { React, useState } from 'react';
import ResumePDF from '../static/Resume.pdf';
import githubLogo from '../static/github.png';
import { Link }  from 'react-router-dom';
import "./css/TopNavigation.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { project_descriptions } from "./pages/ProjectsPage";

function OffCanvasExample({ name, scroll, backdrop, show, handleClose }) {
  return (
    <Offcanvas show={show} onHide={handleClose} scroll={scroll} backdrop={backdrop}>
        <div className="sidebar_projects_title">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>{name}</Offcanvas.Title>
        </Offcanvas.Header>
        </div>
      <Offcanvas.Body>
        <div className="sidebar_projects_title">
            <Offcanvas.Title>Projects</Offcanvas.Title>
        </div>
        <div className="sidebar_projects_units">
            {Object.values(project_descriptions).map(project => (
            <div className="sidebar_projects_unit">
                <Nav.Link key={project.title} href={project.url}>
                    {project.title}
                </Nav.Link>
            </div>
            ))} 
        </div>
        <div className="sidebar_about_title">
            <Offcanvas.Title>About</Offcanvas.Title>
        </div>
        <div className="sidebar_about_units">
            <div className="sidebar_about_unit_me">
                <Nav.Link  href="/about/me">Me</Nav.Link>
            </div>
            <div className="sidebar_about_unit_site">
                <Nav.Link  href="/about/site">This Site </Nav.Link>
            </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

function CollapsibleExample() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const toggleShow = () => setShow((s) => !s);

    return (
        <div>
            <OffCanvasExample name='Menu' scroll={false} backdrop={true} show={show} handleClose={handleClose} />
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" onClick={toggleShow}>Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <NavDropdown title="About" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/about/site">This Site</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/about/me">Me</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href={ResumePDF} target="_blank">Resume</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Github</Nav.Link>
                    <Nav.Link href="#deets">LinkedIn</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
}

export default CollapsibleExample;