import React, { useState } from "react";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

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
            <Nav.Link className="text-black">
              <Link to="/" className="text-black text-decoration-none">
                Home
              </Link>
            </Nav.Link>

            <Nav.Link className="text-black">
              <Link to="/projects" className="text-black text-decoration-none">
                Projects
              </Link>
            </Nav.Link>
            <div className="ps-3 text-black pt-2">
              <Link
                to="https://wa.me/+94771886641"
                className="text-success text-decoration-none"
              >
                Contact
                <i className="ms-2 bi bi-whatsapp"></i>
              </Link>
            </div>
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
            <Nav.Link className="text-black">
              <Link to="/" className="text-black text-decoration-none">
                Home
              </Link>
            </Nav.Link>

            <Nav.Link className="text-black">
              <Link to="/projects" className="text-black text-decoration-none">
                Projects
              </Link>
            </Nav.Link>
            <div className="ps-3 text-black pt-2">
              <Link
                to="https://wa.me/+94771886641"
                className="text-success text-decoration-none"
              >
                Contact
                <i className="ms-2 bi bi-whatsapp"></i>
              </Link>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;
