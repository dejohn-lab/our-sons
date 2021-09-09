import React from "react";
import { Form, Button } from "react-bootstrap";
import "./ContactForm.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("e target", e.target)

    // emailjs
    //   .sendForm(
    //     "service_qs9q9rd",
    //     "template_n5yj3la",
    //     e.target,
    //     "user_fNVY4cfR1XC9tvth8vkxY"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  }
  return (
    <>
      <h1 className="text-center heading1">
        <span className="styles2">Author of Our Son's</span>{" "}
        <span className="styledtext">Dejohn Huffman</span>
      </h1>
      <div className="d-flex justify-content-center">
        <Form
          onSubmit={sendEmail}
          className="p-3 col-md-6 bg-white borderRadius redLinear"
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              className="shadow p-3 mb-5"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter Your Critique or Chapter Summary</Form.Label>
            <Form.Control as="textarea" rows={3} className="shadow p-3 mb-5" />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
