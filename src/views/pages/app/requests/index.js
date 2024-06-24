import React, { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Badge,
  Card,
  Container,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import DataTable from "react-data-table-component";
import { ThemeContext } from "../../../../context/ThemeContext";
import Shimmer from "../../../components/Custom/Loading/Shimmer";
import { MemberRequests } from "../../../../services/ccms/procurement_management/order_request/order_request_endpoints";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { subDays } from "date-fns";

const Requests = () => {
  const {
    changeBackground,
    primaryColor,
    background,
    haderColor,
    sidebarColor,
  } = useContext(ThemeContext);
  const [memberRequests, setMemberRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [locations, setLocations] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [startDate, setStartDate] = useState(subDays(new Date(), 30));
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    changeBackground({ value: "dark", label: "dark" });

    const fetchMemberRequests = async () => {
      try {
        const response = await MemberRequests();
        setMemberRequests(response.results);
        setFilteredRequests(response.results);
        setLoading(false);

        // Extract unique locations, departments, and statuses
        const uniqueLocations = [
          ...new Set(response.results.map((item) => item.locationName)),
        ];
        const uniqueDepartments = [
          ...new Set(response.results.map((item) => item.departmentName)),
        ];
        const uniqueStatuses = [
          ...new Set(response.results.map((item) => item.statusName)),
        ];

        setLocations(uniqueLocations);
        setDepartments(uniqueDepartments);
        setStatuses(uniqueStatuses);
      } catch (error) {
        console.error("Error fetching member requests:", error);
        setLoading(false);
      }
    };

    fetchMemberRequests();
  }, []);

  useEffect(() => {
    setFilteredRequests(
      memberRequests.filter((request) => {
        const matchesLocation = selectedLocation
          ? request.locationName === selectedLocation
          : true;
        const matchesDepartment = selectedDepartment
          ? request.departmentName === selectedDepartment
          : true;
        const matchesStatus = selectedStatus
          ? request.statusName === selectedStatus
          : true;
        const requestDate = new Date(request.requestDate);
        const matchesDate = requestDate >= startDate && requestDate <= endDate;
        return (
          matchesLocation && matchesDepartment && matchesStatus && matchesDate
        );
      })
    );
  }, [
    selectedLocation,
    selectedDepartment,
    selectedStatus,
    startDate,
    endDate,
    memberRequests,
  ]);

  const handleViewRequest = (request) => {
    navigate(`/app/request/${request.requestID}/add-quotations`, {
      state: { request },
    });
  };

  const columns = [
    {
      name: "Request ID",
      selector: (row) => row.requestID,
      sortable: true,
      hidden: true,
    },
    {
      name: "Location",
      selector: (row) => row.locationName,
      sortable: true,
      hide: "sm",
    },
    {
      name: "Department",
      selector: (row) => row.departmentName,
      sortable: true,
      hide: "sm",
    },
    {
      name: "Status",
      selector: (row) => row.statusName,
      sortable: true,
      cell: (row) => (
        <span className="badge" style={{ backgroundColor: row.statusColor }}>
          {row.statusName}
        </span>
      ),
    },
    {
      name: "Request Type",
      selector: (row) => row.typeName,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => new Date(row.requestDate).toLocaleDateString(),
      sortable: true,
      hide: "md",
    },
    {
      name: "Quotes",
      selector: (row) => row.totalQuotations,
      sortable: true,
      hide: "md",
    },
    {
      name: "",
      cell: (row) => (
        <Button
          size="sm"
          variant="outline-primary"
          onClick={() => handleViewRequest(row)}
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
          <Card className="mb-4">
            <Card.Body className="d-flex justify-content-end">
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate("/app/new-request")}
              >
                <i className="fas fa-plus"></i> Add Request
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              {loading ? (
                <Shimmer type="table" />
              ) : (
                <div>
                  <Form.Group className="mb-3">
                    <Row>
                      <Col md={3}>
                        <Form.Control
                          as="select"
                          value={selectedLocation}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                        >
                          <option value="">All Locations</option>
                          {locations.map((location, index) => (
                            <option key={index} value={location}>
                              {location}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={3}>
                        <Form.Control
                          as="select"
                          value={selectedDepartment}
                          onChange={(e) =>
                            setSelectedDepartment(e.target.value)
                          }
                        >
                          <option value="">All Departments</option>
                          {departments.map((department, index) => (
                            <option key={index} value={department}>
                              {department}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={3}>
                        <Form.Control
                          as="select"
                          value={selectedStatus}
                          onChange={(e) => setSelectedStatus(e.target.value)}
                        >
                          <option value="">All Statuses</option>
                          {statuses.map((status, index) => (
                            <option key={index} value={status}>
                              {status}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={3} className="d-flex">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          className="form-control"
                          maxDate={new Date()}
                        />
                        <DatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          className="form-control"
                          maxDate={new Date()}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                  <DataTable
                    columns={columns}
                    data={filteredRequests}
                    pagination
                    responsive
                    highlightOnHover
                    customStyles={customStyles}
                  />
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Requests;
