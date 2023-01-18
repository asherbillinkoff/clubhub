import NavBar from "../NavBar";
import { useState, useEffect } from "react";
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, ListGroupItem } from "react-bootstrap";
import Image from 'react-bootstrap/Image';


function ProfilePage() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if (response.data.loggedIn === true) {
                console.log(response);
                setUser(response.data.user[0]);
            }
        })
    }, []);

    return (
        <>
            <NavBar></NavBar>
            <Container fluid className="d-flex mx-auto">
                <div className="d-flex ms-5">
                    <Image className="mx-auto mt-5" style={{ border: "black solid 1px", borderRadius: "30px", maxWidth: '200px', maxHeight: '200px' }} src={user.image} alt="club details"></Image>
                    <Container fluid>
                        <Card className="mt-5 mx-auto" style={{ width: '18rem' }}>
                            <Card.Header>User Info</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>First Name: {user.first_name}</ListGroup.Item>
                                <ListGroup.Item>Last Name: {user.last_name}</ListGroup.Item>
                                <ListGroup.Item>E-mail: {user.email}</ListGroup.Item>
                                <ListGroup.Item>Gender: {user.is_male}</ListGroup.Item>
                                <ListGroup.Item>Address: {user.address}</ListGroup.Item>
                                <ListGroup.Item>City: {user.city}</ListGroup.Item>
                                <ListGroup.Item>Country: {user.country}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Container>
                </div>

            </Container>
        </>
    )
}

export default ProfilePage;