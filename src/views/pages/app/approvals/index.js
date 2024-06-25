import React, { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Form,
  Modal,
  Badge,
} from "react-bootstrap";
import DataTable from "react-data-table-component";
import { ThemeContext } from "../../../../context/ThemeContext";
import Shimmer from "../../../components/Custom/Loading/Shimmer";
import {
  SupplierDetailsList,
  InsertSupplier,
} from "../../../../services/ccms/supplier_management/supplier/supplier_endpoints";
import { IndustryList } from "../../../../services/ccms/supplier_management/industry/industry_endpoint";
import Swal from "sweetalert2";
import {
  getUserRequestApprovals,
  updateRequestApproval,
} from "../../../../services/ccms/procurement_management/request_approval/request_approval_endpoints";

const Approvals = () => {
  const { changeBackground, background } = useContext(ThemeContext);
  const [requestApprovals, setrequestApprovals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [requestClick, setrequestClick] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    changeBackground({ value: "dark", label: "dark" });

    const fetchRequestApprovals = async () => {
      try {
        const requestApprovalsDetails = await getUserRequestApprovals();
        console.log(requestApprovalsDetails);
        setrequestApprovals(requestApprovalsDetails.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching supplier details list:", error);
        setLoading(false);
      }
    };

    fetchRequestApprovals();
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const memberID = userDetails.memberID;

  const handleViewQuotations = (row) => {
    setrequestClick(row);
    setShowModal(true);
  };
  const handleApproveQuotation = async (quotation) => {
    const requestData = {
      requestID: quotation.requestID,
      quotationID: quotation.quotationID,
      approvalMemberID: memberID,
      statusID: 2,
      approvedDate: new Date(),
    };

    const response = await updateRequestApproval(requestData);
    Swal.fire({
      icon: response.status === "Success" ? "success" : "error",
      title: response.title,
      text: response.message,
    });
    if (response.status === "Success") {
      setShowModal(false);
    }
  };

  const columns = [
    {
      name: "Request ID",
      selector: (row) => row.orderRequest.requestID,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.orderRequest.description,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.orderRequest.statusID,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.orderRequest.requestDate,
      sortable: true,
    },
    {
      name: "",
      cell: (row) => (
        <Button
          size="sm"
          variant="outline-primary"
          onClick={() => handleViewQuotations(row)}
        >
          <i className="fas fa-eye"></i> View
        </Button>
      ),
    },
  ];

  const lightThemeStyles = {
    table: {
      style: {
        backgroundColor: "transparent",
      },
    },
    headRow: {
      style: {
        backgroundColor: "transparent",
        color: "#737B8B",
      },
    },
    headCells: {
      style: {
        color: "#737B8B",
      },
    },
    rows: {
      style: {
        backgroundColor: "transparent",
        color: "#737B8B",
      },
    },
    pagination: {
      style: {
        backgroundColor: "transparent",
        color: "#737B8B",
      },
      pageButtonsStyle: {
        backgroundColor: "transparent",
        borderColor: "#737B8B",
        color: "#737B8B",
        "&:hover": {
          backgroundColor: "#737B8B",
          color: "#fff",
        },
      },
    },
  };

  const darkThemeStyles = {
    table: {
      style: {
        backgroundColor: "transparent",
      },
    },
    headRow: {
      style: {
        backgroundColor: "transparent",
        color: "#737B8B",
      },
    },
    headCells: {
      style: {
        color: "#737B8B",
      },
    },
    rows: {
      style: {
        backgroundColor: "transparent",
        color: "#737B8B",
      },
    },
    pagination: {
      style: {
        backgroundColor: "transparent",
        color: "#737B8B",
      },
      pageButtonsStyle: {
        backgroundColor: "transparent",
        borderColor: "#737B8B",
        color: "#737B8B",
        "&:hover": {
          backgroundColor: "#737B8B",
          color: "#1a1a1a",
        },
      },
    },
  };

  const customStyles =
    background.value === "dark" ? darkThemeStyles : lightThemeStyles;

  return (
    <Fragment>
      <Row>
        <Col>
          {loading ? (
            <Shimmer type="table" />
          ) : (
            <Card>
              <Card.Body>
                <h2>Requests</h2>
                <DataTable
                  columns={columns}
                  data={requestApprovals}
                  pagination
                  responsive
                  highlightOnHover
                  customStyles={customStyles}
                />
              </Card.Body>
              <Modal size="lg" show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Quotations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {requestClick && (
                    <>
                      {requestClick.requestQuotations.map(
                        (quotation, index) => (
                          <Card key={index} style={{ margin: "1rem 0 0 0" }}>
                            <Card.Header>
                              <h4>{quotation.quotationID}</h4>
                            </Card.Header>
                            <Card.Body>
                              <h4>Amount : {quotation.amount}</h4>
                              <h4>Description : {quotation.description}</h4>
                              <div>
                                <Button
                                  variant="primary"
                                  onClick={() =>
                                    handleApproveQuotation(quotation)
                                  }
                                >
                                  Approve
                                </Button>
                                <Button variant="primary">Decline</Button>
                              </div>
                            </Card.Body>
                          </Card>
                        )
                      )}
                    </>
                  )}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                  </Button>
                  {/* <Button
                    variant="primary"
                    onClick={handleSaveSupplier}
                    disabled={saving}
                  >
                    {saving ? "Saving Changes..." : "Save"}
                  </Button> */}
                </Modal.Footer>
              </Modal>
            </Card>
          )}
        </Col>
      </Row>
    </Fragment>
  );
};

export default Approvals;
