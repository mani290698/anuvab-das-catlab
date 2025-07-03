import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import "../Nav/Nav.css";
import lablogo from '../../assets/images/labLogo.png'

function MyNavbar() {
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setShowTeamDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setShowTeamDropdown(false), 200); // 200ms delay
  };
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#" style={{ color: 'white' }}>
          <img
            src={lablogo}
            width="50"
            height="50"
            // className="d-inline-block align-top"
            alt="Das Lab Logo"
          /><span style={{ marginLeft: '10px', fontWeight: '600' }}>Das Lab</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/research">Research</Nav.Link>
            <Nav.Link href="/publications">Publications</Nav.Link>
            <NavDropdown title="Team" id="team-dropdown">
              <NavDropdown.Item href="/anuvab">Anuvab</NavDropdown.Item>
              <NavDropdown.Item href="/team">Members</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/resources">Resources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
