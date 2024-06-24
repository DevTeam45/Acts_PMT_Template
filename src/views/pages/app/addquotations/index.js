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
  insertOrderRequest,
} from "../../../../services/ccms/procurement_management/order_request/order_request_endpoints";
import { insertRequestQuotation } from "../../../../services/ccms/procurement_management/request_quotation/request_quotation_endpoints";
import { LocationList } from "../../../../services/ccms/locationManagement/location/location_endpoints";
import { DepartmentList } from "../../../../services/ccms/departmentManagement/department/department_endpoints";
import { SupplierList } from "../../../../services/ccms/supplier_management/supplier/supplier_endpoints";
import { ThemeContext } from "../../../../context/ThemeContext";
import { useNavigate, useParams } from "react-router-dom";

const AddQuotationsForm = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const { changeBackground, background } = useContext(ThemeContext);
  const { requestID } = useParams();
  const navigate = useNavigate();

  const memberID = userDetails.memberID;

  const [requestQuotations, setRequestQuotations] = useState([]);
  const [quotation, setQuotation] = useState({
    requestID: "",
    supplierID: "",
    quotationDate: new Date(),
    description: "",
    amount: "",
    memberID: "",
    locationID: "",
    departmentID: "",
    typeID: "",
    pdfCopy: null,
  });

  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showQuotationModal, setShowQuotationModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const suppliers = await SupplierList();
      const requestDetails = await MemberRequest(requestID);

      setRequestQuotations(requestDetails.results.requestQuotations);
      setQuotation((prevState) => ({
        ...prevState,
        requestID: requestDetails.results.requestID,
        memberID: requestDetails.results.memberID,
        locationID: requestDetails.results.locationID,
        departmentID: requestDetails.results.departmentID,
        typeID: requestDetails.results.typeID,
      }));
      setSuppliers(suppliers.results);
    };

    fetchData();
  }, []);

  useEffect(() => {
    changeBackground({ value: "dark", label: "dark" });
  }, []);

  const handleQuotationSubmit = async () => {
    setLoading(true);
    try {
      //   const formData = new FormData();
      //   formData.append("requestID", requestID);
      //   formData.append("statusID", quotation.statusID);
      //   formData.append("supplierID", quotation.supplierID);
      //   formData.append("quotationDate", quotation.quotationDate.toISOString());
      //   formData.append("description", quotation.description);
      //   formData.append("amount", quotation.amount);
      //   if (quotation.pdfCopy) {
      //     formData.append("pdfCopy", quotation.pdfCopy);
      //   }
      const response = await insertRequestQuotation(quotation);
      console.log("Request Quotation Response:", response);
      Swal.fire({
        icon: response.status === "Success" ? "success" : "error",
        title: response.title,
        text: response.message,
      });
      if (response.status === "Success") {
        setRequestQuotations([...requestQuotations, response.results]);
        setShowQuotationModal(false);
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
  const submitRequestf = () => {
    navigate(
      `/app/request/${requestID}/submit`
    );
  };
  return (
    <Fragment>
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
              {requestQuotations.length >= 2 ? (
                <Button
                  variant="success"
                  className="mt-3"
                  onClick={submitRequestf}
                >
                  Finish
                </Button>
              ) : (
                <>
                  <p>Please add Atleast 2 Quotations</p>
                  <Button variant="success" disabled>
                    Finish
                  </Button>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal
        show={showQuotationModal}
        onHide={() => setShowQuotationModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Quotation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
                    {supplier.name}
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
      </Modal>
    </Fragment>
  );
};

export default AddQuotationsForm;
