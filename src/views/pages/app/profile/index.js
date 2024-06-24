import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Dropdown } from "react-bootstrap";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Form,
  Modal,
} from "react-bootstrap";
import Swal from "sweetalert2";

import { ThemeContext } from "../../../../context/ThemeContext";
import App from "../../../../App";
import PageUnderConstraction from "../../../components/Custom/Page/UnderConstruction";
import { UpdateUserDetails } from "../../../../services/ccms/userManagement/profile/profile_endpoint";

const Profile = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [surname, setsurname] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(userDetails);
  const { changeBackground } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "dark", label: "dark" });
  }, []);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCancelClick = () => {
    setFirstName("");
    setsurname("");
    setIsEditing(false);
  };
  const handleSaveClick = async () => {
    setLoading(true);
    let userData = { firstName, surname, email: userDetails.email };
    try {
      const response = await UpdateUserDetails(userData);
      Swal.fire({
        icon: response.status === "Success" ? "success" : "error",
        title: response.title,
        text: response.message,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while saving data.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <h1>Profile</h1>
      {userDetails && (
        <Row className="mb-4 profile-info">
          {isEditing ? (
            <Form.Group className="mb-3">
              <Form.Label>First Name :</Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
          ) : (
            <h4>First Name : {userDetails.firstName}</h4>
          )}{" "}
          {isEditing ? (
            <Form.Group className="mb-3">
              <Form.Label>Last Name :</Form.Label>
              <Form.Control
                type="text"
                value={surname}
                onChange={(e) => setsurname(e.target.value)}
              />
            </Form.Group>
          ) : (
            <h4>Last Name : {userDetails.surname}</h4>
          )}
          <h4>Email : {userDetails.email}</h4>
          {isEditing ? (
            <>
              <Button
                variant="primary"
                onClick={handleSaveClick}
                disabled={loading}
                className="mb-3"
              >
                Save
              </Button>
              <Button
                onClick={handleCancelClick}
                variant="primary"
                disabled={loading}
                className="mb-3"
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              onClick={handleEditClick}
              variant="primary"
              disabled={loading}
            >
              Edit
            </Button>
          )}
        </Row>
      )}
    </Fragment>
  );
};

export default Profile;
