import React, { Fragment, useEffect, useState } from "react";
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
import { insertOrderRequest } from "../../../../services/ccms/procurement_management/order_request/order_request_endpoints";
import { insertRequestQuotation } from "../../../../services/ccms/procurement_management/request_quotation/request_quotation_endpoints";
import { LocationList } from "../../../../services/ccms/locationManagement/location/location_endpoints";
import { DepartmentList } from "../../../../services/ccms/departmentManagement/department/department_endpoints";
import { SupplierList } from "../../../../services/ccms/supplier_management/supplier/supplier_endpoints";
import { useNavigate } from "react-router-dom";

const OrderRequestForm = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const memberID = userDetails.memberID;

  const [orderRequest, setOrderRequest] = useState({
    requestID: 0,
    memberID: memberID,
    locationID: "",
    departmentID: "",
    statusID: 0,
    typeID: "",
    requestDate: new Date(),
    description: "",
  });

  const [requestQuotations, setRequestQuotations] = useState([]);
  const [quotation, setQuotation] = useState({
    quotationID: 0,
    requestID: 0,
    statusID: 0,
    supplierID: "",
    quotationDate: new Date(),
    description: "",
    amount: "",
    pdfCopy: null,
  });
  const navigate = useNavigate();

  const [locations, setLocations] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [requestTypes, setRequestTypes] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showQuotationModal, setShowQuotationModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const locations = await LocationList();
      const departments = await DepartmentList();
      const requestTypes = await RequestTypeList();
      const suppliers = await SupplierList();

      setLocations(locations.results);
      setDepartments(departments.results);
      setRequestTypes(requestTypes.results);
      setSuppliers(suppliers.results);
    };

    fetchData();
  }, []);

  const handleOrderRequestSubmit = async () => {
    setLoading(true);
    try {
      const response = await insertOrderRequest(orderRequest);
      Swal.fire({
        icon: response.status === "Success" ? "success" : "error",
        title: response.title,
        text: response.message,
      });
      console.log(response);
      if (response.status === "Success") {
        // setOrderRequest(response.orderRequest);
        setQuotation({ ...quotation, requestID: response.results.requestID });
        navigate(`/app/request/${response.results.requestID}/add-quotations`);
      }
    } catch (error) {
      console.error("Error inserting order request:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while creating the order request.",
      });
    } finally {
      setLoading(false);
    }
  };

  //   const handleQuotationSubmit = async () => {
  //     setLoading(true);
  //     try {
  //       const formData = new FormData();
  //       formData.append("quotationID", quotation.quotationID);
  //       formData.append("requestID", quotation.requestID);
  //       formData.append("statusID", quotation.statusID);
  //       formData.append("supplierID", quotation.supplierID);
  //       formData.append("quotationDate", quotation.quotationDate.toISOString());
  //       formData.append("description", quotation.description);
  //       formData.append("amount", quotation.amount);
  //       if (quotation.pdfCopy) {
  //         formData.append("pdfCopy", quotation.pdfCopy);
  //       }
  //       const response = await insertRequestQuotation(formData);
  //       console.log("Request Quotation Response:", response);
  //       Swal.fire({
  //         icon: response.status === "Success" ? "success" : "error",
  //         title: response.title,
  //         text: response.message,
  //       });
  //       if (response.status === "Success") {
  //         setRequestQuotations([...requestQuotations, response.requestQuotation]);
  //         setShowQuotationModal(false);
  //       }
  //     } catch (error) {
  //       console.error("Error inserting request quotation:", error);
  //       Swal.fire({
  //         icon: "error",
  //         title: "Error",
  //         text: "An error occurred while adding the quotation.",
  //       });
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <Fragment>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="formLocation" className="mt-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    as="select"
                    value={orderRequest.locationID}
                    onChange={(e) =>
                      setOrderRequest({
                        ...orderRequest,
                        locationID: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Location</option>
                    {locations.map((location) => (
                      <option
                        key={location.locationID}
                        value={location.locationID}
                      >
                        {location.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formDepartment" className="mt-3">
                  <Form.Label>Department</Form.Label>
                  <Form.Control
                    as="select"
                    value={orderRequest.departmentID}
                    onChange={(e) =>
                      setOrderRequest({
                        ...orderRequest,
                        departmentID: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Department</option>
                    {departments.map((department) => (
                      <option
                        key={department.departmentID}
                        value={department.departmentID}
                      >
                        {department.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formType" className="mt-3">
                  <Form.Label>Request Type</Form.Label>
                  <Form.Control
                    as="select"
                    value={orderRequest.typeID}
                    onChange={(e) =>
                      setOrderRequest({
                        ...orderRequest,
                        typeID: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Request Type</option>
                    {requestTypes.map((type) => (
                      <option key={type.typeID} value={type.typeID}>
                        {type.name}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formRequestDate" className="mt-3">
                  <Form.Label>Request Date</Form.Label>
                  <DatePicker
                    selected={orderRequest.requestDate}
                    onChange={(date) =>
                      setOrderRequest({ ...orderRequest, requestDate: date })
                    }
                    className="form-control"
                  />
                </Form.Group>
                <Form.Group controlId="formDescription" className="mt-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={orderRequest.description}
                    onChange={(e) =>
                      setOrderRequest({
                        ...orderRequest,
                        description: e.target.value,
                      })
                    }
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={handleOrderRequestSubmit}
                  disabled={loading}
                  className="mt-3"
                >
                  {loading
                    ? "Creating Order Request..."
                    : "Create Order Request"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* {orderRequest.requestID == 0 && (
        <Row className="mb-4">
          <Col>
            <Card>
              <Card.Body>
                <h4>Add Quotations</h4>
                <Button
                  variant="primary"
                  onClick={() => setShowQuotationModal(true)}
                >
                  Add Quotation
                </Button>
                {requestQuotations.length > 0 && (
                  <ul className="list-group mt-3">
                    {requestQuotations.map((quotation, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        {quotation.description} - {quotation.amount}
                        <div>
                          <Button
                            variant="info"
                            size="sm"
                            onClick={() => setShowQuotationModal(true)}
                          >
                            View/Edit
                          </Button>
                          <Button variant="danger" size="sm" className="ml-2">
                            Remove
                          </Button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                <Button
                  variant="success"
                  className="mt-3"
                  onClick={() => Swal.fire("Quotations Added", "", "success")}
                >
                  {requestQuotations.length >= 2
                    ? "Finish"
                    : "Add Quotations Later"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      <Modal
        show={showQuotationModal}
        onHide={() => setShowQuotationModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Quotation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formType" className="mt-3">
              <Form.Label>Request Type</Form.Label>
              <Form.Control
                as="select"
                value={orderRequest.typeID}
                onChange={(e) =>
                  setOrderRequest({ ...orderRequest, typeID: e.target.value })
                }
              >
                <option value="">Select Request Type</option>
                {requestTypes.map((type) => (
                  <option key={type.typeID} value={type.typeID}>
                    {type.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSupplier">
              <Form.Label>Supplier</Form.Label>
              <Form.Control
                as="select"
                value={quotation.supplierID}
                onChange={(e) =>
                  setQuotation({ ...quotation, supplierID: e.target.value })
                }
              >
                <option value="">Select Supplier</option>
                {suppliers.map((supplier) => (
                  <option key={supplier.supplierID} value={supplier.supplierID}>
                    {supplier.supplierName}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formQuotationDate">
              <Form.Label>Quotation Date</Form.Label>
              <DatePicker
                selected={quotation.quotationDate}
                onChange={(date) =>
                  setQuotation({ ...quotation, quotationDate: date })
                }
                className="form-control"
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={quotation.description}
                onChange={(e) =>
                  setQuotation({ ...quotation, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                value={quotation.amount}
                onChange={(e) =>
                  setQuotation({ ...quotation, amount: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formPdfCopy">
              <Form.Label>PDF Copy (optional)</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) =>
                  setQuotation({ ...quotation, pdfCopy: e.target.files[0] })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowQuotationModal(false)}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleQuotationSubmit}
            disabled={loading}
          >
            {loading ? "Saving Quotation..." : "Save Quotation"}
          </Button>
        </Modal.Footer>
      </Modal> */}
    </Fragment>
  );
};

export default OrderRequestForm;
