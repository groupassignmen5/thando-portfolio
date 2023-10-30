import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

export const ContactUs = () => {
  return (
    <Container>
      <Row className="mb-5 mt-3 pt-md-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contact Me</h1>
          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="12">
          <Alert variant="primary" className="rounded-0 co_alert d-block" dismissible>
            <p className="my-0">
              For inquiries, please contact me at:{" "}
              <strong>vilakazithando84@gmail.com</strong>
            </p>
            <p className="my-0">
              Phone: <strong>0812874654</strong>
            </p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};


