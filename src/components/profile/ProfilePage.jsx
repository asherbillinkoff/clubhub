import API from "../../api/api";
import { UserContext } from "../../context/user-context";
import NavBar from "../NavBar";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";

function ProfilePage({ items }) {
  const [user, setUser] = useState([]);
  const [edit, setEdit] = useState(false);
  // const [wishlist, setWishlist] = useState([]);
  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate();

  function logout() {
    const api = new API();
    api.logout();
    setUserId(0);
    navigate("/");
  }

  // function handleProfileUpdate() {
  //   api.editUserProfile();
  // }

  function toggleEdit() {
    setEdit(!edit);
  }

  useEffect(() => {
    const api = new API();
    api.getUserProfile().then((response) => {
      if (response.data.loggedIn !== 0) {
        console.log(response);
        setUser(response.data[0]);
      }
    });
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <section style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={user.image}
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                  />
                  <p className="text-muted mb-1">{user.email}</p>
                  <p className="text-muted mb-4">
                    {user.city}, {user.country}
                  </p>
                  <div className="d-flex justify-content-center mb-2">
                    {edit ? (
                      <MDBBtn
                        outline
                        className="ms-1"
                        onClick={() => toggleEdit()}
                      >
                        submit changes
                      </MDBBtn>
                    ) : (
                      <MDBBtn
                        outline
                        className="ms-1"
                        onClick={() => toggleEdit()}
                      >
                        edit profile
                      </MDBBtn>
                    )}
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                    <MDBBtn outline className="ms-1" onClick={logout}>
                      logout
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>First Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {edit ? (
                        <MDBInput
                          id="first-name"
                          label="First Name"
                          size="sm"
                        ></MDBInput>
                      ) : (
                        <MDBCardText className="text-muted">
                          {user.first_name}
                        </MDBCardText>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Last Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {edit ? (
                        <MDBInput
                          id="last-name"
                          label="Last Name"
                          size="sm"
                        ></MDBInput>
                      ) : (
                        <MDBCardText className="text-muted">
                          {user.last_name}
                        </MDBCardText>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>E-mail</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {edit ? (
                        <MDBInput id="email" label="Email" size="sm"></MDBInput>
                      ) : (
                        <MDBCardText className="text-muted">
                          {user.email}
                        </MDBCardText>
                      )}
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Gender</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {user.is_male === 1 ? "Male" : "Female"}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Address</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      {edit ? (
                        <MDBInput
                          id="address"
                          label="Address"
                          size="sm"
                        ></MDBInput>
                      ) : (
                        <MDBCardText className="text-muted">
                          {user.address}
                        </MDBCardText>
                      )}
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>

              <MDBRow>
                <MDBCol md="12">
                  <MDBCard className="mb-4 mb-md-0">
                    <MDBCardBody>
                      <MDBCardText className="mb-4">
                        <span className="text-primary font-italic me-1">
                          Wishlist
                        </span>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default ProfilePage;
