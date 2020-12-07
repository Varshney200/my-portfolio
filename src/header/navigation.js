
import { Navbar,Nav, NavDropdown } from 'react-bootstrap';
import './navigation.css';
// import {NavLink } from "react-router-dom";
function MyNavBar(props) {
    return(
        <Navbar collapseOnSelect expand="lg"  variant="dark" bsPrefix="navbar">
            <Navbar.Brand href="/portfolio" bsPrefix="MyName">Archita Varshney</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="./home" bsPrefix="comps">About</Nav.Link>
                    <Nav.Link href="./home#Skills" bsPrefix="comps">Skills</Nav.Link>
                    <Nav.Link href="./projects" bsPrefix="comps">Projects</Nav.Link>
                    <Nav.Link href="./experience" bsPrefix="comps">Internships/Training</Nav.Link>
                    <Nav.Link href="#footer" bsPrefix="comps">Contact</Nav.Link>
                    <NavDropdown title="More" bsPrefix="comps dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="./education">Education</NavDropdown.Item>
                        <NavDropdown.Item href="./achievements">Achievements</NavDropdown.Item>
                        <NavDropdown.Item href="./responsibilities">Responsibilities</NavDropdown.Item>
                        <NavDropdown.Item href="./extracurriculars">Extracurriculars</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavBar;