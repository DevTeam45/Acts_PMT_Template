import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import styled from 'styled-components';

const ConstructionWrapper = styled(Container)`
  text-align: center;
  padding: 3rem 0;
`;

const ConstructionSVG = styled.svg`
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;
`;

const PageUnderConstruction = () => {
  return (
    <ConstructionWrapper>
      <Row className="justify-content-center">
        <Col md={8}>
          <ConstructionSVG viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#FFD700" />
            <path
              d="M32 12L42 24L38 38L26 38L22 24L32 12Z"
              fill="#FF6347"
            />
            <circle cx="32" cy="32" r="5" fill="#FFFFFF" />
            <circle cx="25" cy="25" r="2" fill="#FF6347" />
            <circle cx="39" cy="25" r="2" fill="#FF6347" />
            <path
              d="M24 38C24 38 26 42 32 42C38 42 40 38 40 38"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </ConstructionSVG>
          <h3 style={{ color: '#FF6347' }}>Hang Tight!</h3>
          <p style={{ color: '#808080' }}>This page is under construction. Check back soon for something awesome!</p>
          <Link className="btn btn-primary btn-lg" to="/app/dashboard">Back to Home</Link>
        </Col>
      </Row>
    </ConstructionWrapper>
  );
};

export default PageUnderConstruction;
