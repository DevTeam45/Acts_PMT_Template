import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Row, Col, Form, Modal, Badge } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { ThemeContext } from "../../../../context/ThemeContext";
import Shimmer from '../../../components/Custom/Loading/Shimmer';
import { SupplierDetailsList, InsertSupplier } from '../../../../services/ccms/supplier_management/supplier/supplier_endpoints';
import { IndustryList } from '../../../../services/ccms/supplier_management/industry/industry_endpoint';
import Swal from 'sweetalert2';

const Suppliers = () => {
    const { changeBackground, background } = useContext(ThemeContext);
    const [supplierDetailsList, setSupplierDetailsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [industries, setIndustries] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [saving, setSaving] = useState(false);
    const [supplier, setSupplier] = useState({
        supplierID: 0,
        name: '',
        registrationNumber: '',
        vatNumber: '',
        beeeLevel: '',
        taxNumber: '',
        industryID: '',
        website: '',
        telephone: '',
        email: '',
        tags: ''
    });
    const [filterText, setFilterText] = useState('');
    const [filteredSuppliers, setFilteredSuppliers] = useState([]);
    const [selectedIndustry, setSelectedIndustry] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        changeBackground({ value: "dark", label: "dark" });

        const fetchSupplierDetailsList = async () => {
            try {
                const supplierDetailsList = await SupplierDetailsList();
                setSupplierDetailsList(supplierDetailsList.results);
                setFilteredSuppliers(supplierDetailsList.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching supplier details list:', error);
                setLoading(false);
            }
        };

        const fetchIndustries = async () => {
            try {
                const industryList = await IndustryList();
                setIndustries(industryList.results);
            } catch (error) {
                console.error('Error fetching industries:', error);
            }
        };

        fetchSupplierDetailsList();
        fetchIndustries();
    }, []);

    useEffect(() => {
        setFilteredSuppliers(
            supplierDetailsList.filter(supplier => {
                return (
                    (supplier.industryName ? supplier.industryName.toLowerCase().includes(selectedIndustry.toLowerCase()) : true) &&
                    (
                        supplier.supplierName?.toLowerCase().includes(filterText.toLowerCase()) ||
                        supplier.website?.toLowerCase().includes(filterText.toLowerCase()) ||
                        supplier.telephone?.toLowerCase().includes(filterText.toLowerCase())
                    )
                );
            })
        );
    }, [filterText, selectedIndustry, supplierDetailsList]);

    const handleViewSupplier = (supplier) => {
        navigate('/app/supplier', { state: { supplier } });
    };

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleSaveSupplier = async () => {
        setSaving(true);
        try {
            const response = await InsertSupplier(supplier);
            Swal.fire({
                icon: response.status === 'success' ? 'success' : 'error',
                title: response.title,
                text: response.message,
            });
            if (response.status === 'success') {
                setShowModal(false);
                const supplierDetailsList = await SupplierDetailsList();
                setSupplierDetailsList(supplierDetailsList.results);
                setFilteredSuppliers(supplierDetailsList.results);
            }
        } catch (error) {
            console.error('Error saving supplier:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while saving the supplier.',
            });
        } finally {
            setSaving(false);
        }
    };

    const columns = [
        {
            name: 'Supplier ID',
            selector: row => row.supplierID,
            sortable: true,
        },
        {
            name: 'Supplier Name',
            selector: row => row.supplierName,
            sortable: true,
        },
        {
            name: 'Industry Name',
            selector: row => row.industryName,
            sortable: true,
        },
        {
            name: 'Website',
            selector: row => row.website,
            sortable: true,
        },
        {
            name: 'Telephone',
            selector: row => row.telephone,
            sortable: true,
        },
        {
            name: '',
            cell: row => (
                <Button size='sm' variant="outline-primary" onClick={() => handleViewSupplier(row)}>
                    <i className='fas fa-eye'></i> View
                </Button>
            )
        }
    ];

    const lightThemeStyles = {
        table: {
            style: {
                backgroundColor: 'transparent'
            }
        },
        headRow: {
            style: {
                backgroundColor: 'transparent',
                color: '#737B8B'
            }
        },
        headCells: {
            style: {
                color: '#737B8B'
            }
        },
        rows: {
            style: {
                backgroundColor: 'transparent',
                color: '#737B8B'
            }
        },
        pagination: {
            style: {
                backgroundColor: 'transparent',
                color: '#737B8B'
            },
            pageButtonsStyle: {
                backgroundColor: 'transparent',
                borderColor: '#737B8B',
                color: '#737B8B',
                '&:hover': {
                    backgroundColor: '#737B8B',
                    color: '#fff'
                }
            }
        }
    };

    const darkThemeStyles = {
        table: {
            style: {
                backgroundColor: 'transparent'
            }
        },
        headRow: {
            style: {
                backgroundColor: 'transparent',
                color: '#737B8B'
            }
        },
        headCells: {
            style: {
                color: '#737B8B'
            }
        },
        rows: {
            style: {
                backgroundColor: 'transparent',                
                color: '#737B8B'
            }
        },
        pagination: {
            style: {
                backgroundColor: 'transparent',                
                color: '#737B8B'
            },
            pageButtonsStyle: {
                backgroundColor: 'transparent',
                borderColor: '#737B8B',
                color: '#737B8B',
                '&:hover': {
                    backgroundColor: '#737B8B',
                    color: '#1a1a1a'
                }
            }
        }
    };

    const customStyles = background.value === 'dark' ? darkThemeStyles : lightThemeStyles;

    return (
        <Fragment>
            <Row className="mb-4">
                <Col>
                    <Card>
                        <Card.Body className="d-flex justify-content-end">
                            <Button size='sm' variant="primary" onClick={handleShowModal}><i className='fas fa-plus'></i> Add Supplier</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    {loading ? (
                        <Shimmer type='table' />
                    ) : (
                        <Card>
                            <Card.Body>
                                <Form.Group className="mb-3">
                                    <Row>
                                        <Col md={4}>
                                            <Form.Control
                                                type="text"
                                                placeholder="Search by Name, Website or Telephone"
                                                value={filterText}
                                                onChange={e => setFilterText(e.target.value)}
                                            />
                                        </Col>
                                        <Col md={4}><></></Col>
                                        <Col md={4}>
                                            <Form.Control
                                                as="select"
                                                value={selectedIndustry}
                                                onChange={e => setSelectedIndustry(e.target.value)}
                                            >
                                                <option value=''>All Industries</option>
                                                {industries.map((industry, index) => (
                                                    <option key={index} value={industry.industryID}>{industry.name}</option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                {filteredSuppliers.length === 0 ? (
                                    <Shimmer type='empty' text='The are no suppliers listed' />
                                ):(
                                    <DataTable
                                        columns={columns}
                                        data={filteredSuppliers}
                                        pagination
                                        responsive
                                        highlightOnHover
                                        customStyles={customStyles}
                                    />
                                )}
                                
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>

            <Modal size='lg' show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Supplier</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formSupplierName">
                            <Form.Label>Supplier Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={supplier.name}
                                onChange={e => setSupplier({ ...supplier, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formRegistrationNumber">
                            <Form.Label>Registration Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={supplier.registrationNumber}
                                onChange={e => setSupplier({ ...supplier, registrationNumber: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formVATNumber">
                            <Form.Label>VAT Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={supplier.vatNumber}
                                onChange={e => setSupplier({ ...supplier, vatNumber: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBEEELevel">
                            <Form.Label>BEEE Level</Form.Label>
                            <Form.Control
                                type="text"
                                value={supplier.beeeLevel}
                                onChange={e => setSupplier({ ...supplier, beeeLevel: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formTaxNumber">
                            <Form.Label>Tax Number</Form.Label>
                            <Form.Control
                                type="text"
                                value={supplier.taxNumber}
                                onChange={e => setSupplier({ ...supplier, taxNumber: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formIndustry">
                            <Form.Label>Industry</Form.Label>
                            <Form.Control
                                as="select"
                                value={supplier.industryID}
                                onChange={e => setSupplier({ ...supplier, industryID: e.target.value })}
                            >
                                <option value=''>Select Industry</option>
                                {industries.map((industry, index) => (
                                    <option key={index} value={industry.industryID}>{industry.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formWebsite">
                            <Form.Label>Website</Form.Label>
                            <Form.Control
                                type="text"
                                value={supplier.website}
                                onChange={e => setSupplier({ ...supplier, website: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formTelephone">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control
                                type="text"
                                value={supplier.telephone}
                                onChange={e => setSupplier({ ...supplier, telephone: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={supplier.email}
                                onChange={e => setSupplier({ ...supplier, email: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formTags">
                            <Form.Label>Tags</Form.Label>
                            <Form.Control
                                type="text"
                                value={supplier.tags}
                                onChange={e => setSupplier({ ...supplier, tags: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveSupplier} disabled={saving}>
                        {saving ? 'Saving Changes...' : 'Save'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default Suppliers;
