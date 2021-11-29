import React from "react";
import { Card } from "react-bootstrap";
function Contact() {
  return (
    <Card className="m-auto mt-4 border border-4 text-dark w-50">
      <Card.Body>
        <Card.Title className="text-center">Contact Information</Card.Title>
        <Card.Text>
          <p>
            Phone : <code>437-984-5385</code>
          </p>
          <p>
            E-mail : <code>karouhifar@gmail.com</code>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Contact;
