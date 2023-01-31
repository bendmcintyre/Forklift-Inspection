import { Link } from "react-router-dom"
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'; // https://react-bootstrap.github.io/components/navbar/

export default function Header(){
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">Forklift Inspection</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/daily-checklist" className="nav-link">Daily Checklist</Link>
                        <Link to="/safety" className="nav-link">Safety</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}