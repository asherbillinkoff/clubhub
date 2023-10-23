import profilePic from "../assets/icons/account-profile.svg";
import contactPic from "../assets/icons/contact.svg";
import cartPic from "../assets/icons/shopping-cart.svg";
import { UserContext } from "../context/user-context";
import LoginModal from "./login/LoginModal";
import { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const { userId } = useContext(UserContext);
  console.log(userId);

  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link
            className="ms-4 mx-2 d-flex align-items-center"
            href="/products/1"
          >
            Clubs
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="mx-2 d-flex align-items-center" href="/balls/1">
            Balls
          </Nav.Link>
        </Nav>
        <Navbar.Brand href="/" style={{ marginLeft: "36%", fontStyle: "bold" }}>
          ClubHub
        </Navbar.Brand>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link className="mx-2 d-flex align-items-center" href="#action2">
            <img
              src={contactPic}
              style={{ maxHeight: "35px" }}
              alt="Contact Us"
            ></img>
          </Nav.Link>
          <Nav.Link className="mx-2 d-flex align-items-center" href="/cart">
            <img
              src={cartPic}
              style={{ maxHeight: "35px" }}
              alt="Shopping Cart"
            ></img>
          </Nav.Link>
          {userId ? (
            <Nav.Link className="mx-2" href="/profile">
              <img
                src={profilePic}
                style={{ maxHeight: "35px" }}
                alt="User profile"
              ></img>
            </Nav.Link>
          ) : (
            <LoginModal></LoginModal>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
