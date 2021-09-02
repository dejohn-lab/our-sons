import React from "react";
import { Form } from "react-bootstrap";

const ContactForm = () => {
  return (
    <>
      <h1 className="text-center heading1">
        <span className="styles2">Author of Our Son's</span>{" "}
        <span className="styledtext">Dejohn Huffman</span>
      </h1>
      <div className="d-flex justify-content-center redLinear">
        <Form className="col-md-6 shadow p-3 mb-5 bg-white borderRadius">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              className="shadow p-3 mb-5 redLinear"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="shadow p-3 mb-5 redLinear"
            />
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
