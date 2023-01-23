import API from "../../api/api";
import { UserContext } from "../../context/user-context";
import NavBar from "../NavBar";
import Axios from "axios";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBInput,
} from "mdb-react-ui-kit";
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";

function ProfilePageMDB() {
  const [user, setUser] = useState([]);
  const [edit, setEdit] = useState(false);
  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate();
  const api = new API();

  function logout() {
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
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href="#">Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="#">User</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

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
                          Recently Viewed
                        </span>
                      </MDBCardText>
                      <MDBCardText
                        className="mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Web Design
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={80}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Website Markup
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={72}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        One Page
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={89}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Mobile Template
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={55}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>

                      <MDBCardText
                        className="mt-4 mb-1"
                        style={{ fontSize: ".77rem" }}
                      >
                        Backend API
                      </MDBCardText>
                      <MDBProgress className="rounded">
                        <MDBProgressBar
                          width={66}
                          valuemin={0}
                          valuemax={100}
                        />
                      </MDBProgress>
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

export default ProfilePageMDB;
