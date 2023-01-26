import API from "../../api/api";
import { UserContext } from "../../context/user-context";
import React, { useState } from "react";
import { useContext } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function LoginModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate();
  const api = new API();

  // Axios.defaults.withCredentials = true;

  const preLogin = () => {
    return api.login(emailLogin, passwordLogin);
  };

  function login() {
    preLogin().then((response) => {
      if (response.data.message === "Success") {
        handleClose();
        setLoginMessage(response.data.message);
        setUserId(response.data.loggedIn);
        console.log(response.data);
      } else if (response.data.message !== "Success") {
        setLoginMessage(response.data.message);
      }
      navigate("/");
    });
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="mx-auto">
            <Image
              height={100}
              src={require("../../assets/golf-ball-icon.png")}
            ></Image>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="E-mail"
                autoFocus
                onChange={(e) => {
                  setEmailLogin(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPasswordLogin(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="d-flex justify-content-center">
              <div className="d-flex flex-col">
                <Button variant="primary" onClick={login} className="mx-auto">
                  Login
                </Button>
                <div>
                  <p>{loginMessage}</p>
                </div>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-column">
          <h3>OR</h3>
          <a href="/register">
            <Button variant="success">Create Account</Button>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
