import React, { Fragment, useEffect, useState, useContext } from "react";
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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RequestTypeList } from "../../../../services/ccms/procurement_management/request_type/request_type_endpoints";
import {
  MemberRequest,
  SubmitOrderRequest,
  insertOrderRequest,
} from "../../../../services/ccms/procurement_management/order_request/order_request_endpoints";
import { insertRequestQuotation } from "../../../../services/ccms/procurement_management/request_quotation/request_quotation_endpoints";
import { LocationList } from "../../../../services/ccms/locationManagement/location/location_endpoints";
import { DepartmentList } from "../../../../services/ccms/departmentManagement/department/department_endpoints";
import { SupplierList } from "../../../../services/ccms/supplier_management/supplier/supplier_endpoints";
import { ThemeContext } from "../../../../context/ThemeContext";
import { useNavigate, useParams } from "react-router-dom";

const SubmitRequest = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const { changeBackground, background } = useContext(ThemeContext);
  const { requestID } = useParams();
  const navigate = useNavigate();

  const memberID = userDetails.memberID;

  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const requestDetails = await MemberRequest(requestID);
      if (requestDetails.results.requestQuotations.length < 1) {
        navigate(`/app/request/${request.requestID}/add-quotations`);
      }
      setRequest(requestDetails.results);
    };

    fetchData();
  }, []);

  useEffect(() => {
    changeBackground({ value: "dark", label: "dark" });
  }, []);

  const handleRequestSubmit = async () => {
    setLoading(true);
    try {
      const response = await SubmitOrderRequest(request.requestID);
      console.log("Submit Response:", response);
      Swal.fire({
        icon: response.status === "Success" ? "success" : "error",
        title: response.title,
        text: response.message,
      });
      if (response.status === "Success") {
        navigate(`/app/requests`);
      }
    } catch (error) {
      console.error("Error inserting request quotation:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while adding the quotation.",
      });
    } finally {
      setLoading(false);
    }
  };
  const modifyQuotations = () => {
    navigate(`/app/request/${request.requestID}/add-quotations`);
  };
  return (
    <Fragment>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <h2>Request Details</h2>
              {request && (
                <>
                  <h4 className="mt-4">Request ID : {request.requestID}</h4>
                  <h4>Department : {request.departmentName}</h4>
                  <h4>Location : {request.locationName}</h4>
                  <h4>Request type : {request.typeName}</h4>
                  <h4>Description : {request.description}</h4>
                  <h2 className="mt-4">Quotations</h2>
                  <Button variant="primary" onClick={modifyQuotations}>
                    Modify Quotations
                  </Button>
                  <ul className="list-group mt-3">
                    {request.requestQuotations.map((quotation, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        {quotation.description} - {quotation.amount}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="success"
                    onClick={handleRequestSubmit}
                    className="mt-2"
                  >
                    Submit
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default SubmitRequest;
