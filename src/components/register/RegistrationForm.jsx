import Axios from "axios";
import { useState } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";

function RegistrationForm() {
  const navigate = useNavigate();

  const [firstNameReg, setFirstNameReg] = useState("");
  const [lastNameReg, setLastNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [genderReg, setGenderReg] = useState("");
  const [addressReg, setAddressReg] = useState("");
  const [cityReg, setCityReg] = useState("");
  const [countryReg, setCountryReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      firstName: firstNameReg,
      lastName: lastNameReg,
      email: emailReg,
      password: passwordReg,
      gender: genderReg,
      address: addressReg,
      city: cityReg,
      country: countryReg,
    }).then((response) => {
      console.log(response);
      navigate("/");
    });
  };

  return (
    <Container fluid>
      <Card className="mx-auto mt-5" style={{ maxWidth: "600px" }}>
        <Card.Header>Registration</Card.Header>
        <Card.Body className="d-flex justify-content-center">
          <Form style={{ width: "500px" }}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="first-name">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  autoFocus
                  onChange={(e) => {
                    setFirstNameReg(e.target.value);
                  }}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="last-name">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => {
                    setLastNameReg(e.target.value);
                  }}
                  required
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="e-mail"
                placeholder="E-mail Address"
                onChange={(e) => {
                  setEmailReg(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Control
                type="text"
                placeholder="Password (> 7 characters)"
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Select
              className="mb-3"
              aria-label="Gender"
              onChange={(e) => {
                setGenderReg(e.target.value);
              }}
            >
              <option>Gender (optional)</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </Form.Select>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Address"
                onChange={(e) => {
                  setAddressReg(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="city">
              <Form.Control
                type="text"
                placeholder="City"
                onChange={(e) => {
                  setCityReg(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="country">
              <Form.Control
                type="text"
                placeholder="Country"
                onChange={(e) => {
                  setCountryReg(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="d-flex justify-content-center">
              <Button onClick={register}>Register</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default RegistrationForm;
