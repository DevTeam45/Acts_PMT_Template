import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Container, Row, Col, Table } from 'react-bootstrap';

const shimmerKeyframe = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const ShimmerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ShimmerElement = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '20px'};
  background: linear-gradient(
    to right,
    #f0f0f0 0%,
    #e0e0e0 20%,
    #f0f0f0 40%,
    #f0f0f0 100%
  );
  background-repeat: no-repeat;
  background-size: 1000px 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
  animation: ${shimmerKeyframe} 1.5s infinite linear;
  border-radius: 8px;
`;

const EmptyResultsWrapper = styled.div`
  text-align: center;
  padding: 2rem;
`;

const EmptySVG = styled.svg`
  width: 150px;
  height: 150px;
  margin-bottom: 1rem;
`;

const Shimmer = ({ type, width, height, text }) => {
  switch (type) {
    case 'list':
      return (
        <ShimmerWrapper>
          {[...Array(5)].map((_, i) => (
            <ShimmerElement key={i} width="100%" height="20px" />
          ))}
        </ShimmerWrapper>
      );
    case 'sections':
      return (
        <ShimmerWrapper>
          {[...Array(3)].map((_, i) => (
            <ShimmerElement key={i} width="100%" height="100px" />
          ))}
        </ShimmerWrapper>
      );
    case 'listWithAvatar':
      return (
        <ShimmerWrapper>
          {[...Array(5)].map((_, i) => (
            <Row key={i} className="align-items-center mb-3">
              <Col md={2}>
                <ShimmerElement width="50px" height="50px" borderRadius="50%" />
              </Col>
              <Col md={10}>
                <ShimmerElement width="80%" height="20px" />
              </Col>
            </Row>
          ))}
        </ShimmerWrapper>
      );
    case 'pageWithMultipleSections':
      return (
        <Container fluid>
          {[...Array(5)].map((_, i) => (
            <Row key={i} className="mb-3">
              <Col>
                <ShimmerElement width="100%" height="150px" />
              </Col>
            </Row>
          ))}
        </Container>
      );
    case 'article':
      return (
        <ShimmerWrapper>
          <ShimmerElement width="70%" height="30px" />
          {[...Array(10)].map((_, i) => (
            <ShimmerElement key={i} width="100%" height="20px" />
          ))}
        </ShimmerWrapper>
      );
    case 'image':
      return <ShimmerElement width={width || '100%'} height={height || '300px'} />;
    case 'table':
      return (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              {[...Array(5)].map((_, i) => (
                <th key={i}><ShimmerElement width="100%" height="30px" /></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {[...Array(5)].map((_, colIndex) => (
                  <td key={colIndex}><ShimmerElement width="100%" height="20px" /></td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      );
    case 'page':
      return (
        <Container fluid>
          <Row className="mb-3">
            <Col>
              <ShimmerElement width="100%" height="200px" />
            </Col>
          </Row>
          {[...Array(5)].map((_, i) => (
            <Row key={i} className="mb-3">
              <Col>
                <ShimmerElement width="100%" height="100px" />
              </Col>
            </Row>
          ))}
        </Container>
      );
    case 'empty':
      return (
        <EmptyResultsWrapper>
          <EmptySVG viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="32" fill="#FFD700" />
            <path fill="#FF6347" d="M32 17L47 32L32 47L17 32z" />
          </EmptySVG>
          <p>{text || 'No results found'}</p>
        </EmptyResultsWrapper>
      );
    default:
      return <ShimmerElement width={width} height={height} />;
  }
};

export default Shimmer;
