import React, { useState } from "react";
import { Navbar, Nav, Offcanvas, Button } from "react-bootstrap";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="container-fluid d-lg-flex justify-content-lg-between bg-light p-2 sticky-top">
        <div>
          <Navbar expand="lg" sticky="top" bg="light">
            <Navbar.Brand className="fw-bold px-5">Portfolio</Navbar.Brand>
            <div className="px-5">
              <Navbar.Toggle onClick={toggleMenu} aria-controls="navbarNav" />
            </div>
          </Navbar>
        </div>
        <div className="d-none d-lg-block px-5">
          <Nav className="pt-2">
            <Nav.Link className="text-black">About Me</Nav.Link>
            <Nav.Link className="text-black">Education</Nav.Link>
            <Nav.Link className="text-black">Skills</Nav.Link>
            <Nav.Link className="text-black">Projects</Nav.Link>
            <Nav.Link className="text-black">Contact</Nav.Link>
          </Nav>
        </div>
      </div>

      <Offcanvas
        show={showMenu}
        onHide={toggleMenu}
        placement="end"
        className="w-50"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Portfolio</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link className="text-black">About Me</Nav.Link>
            <Nav.Link className="text-black">Education</Nav.Link>
            <Nav.Link className="text-black">Skills</Nav.Link>
            <Nav.Link className="text-black">Projects</Nav.Link>
            <Nav.Link className="text-black">Contact</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;
