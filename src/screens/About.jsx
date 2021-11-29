import React from "react";
import { Card, Image, Button } from "react-bootstrap";

function About() {
  return (
    <Card className="m-auto mt-4 border border-4 text-dark">
      <Card.Body>
        <Card.Title>About me</Card.Title>
        <Image
          src="https://avatars.githubusercontent.com/u/54970142?v=4"
          thumbnail
          style={{ maxWidth: "50%" }}
        />
        <Card.Subtitle className="mt-1 text-muted">
          Kamyab Rouhifar
        </Card.Subtitle>
        <Card.Text>
          <p>
            I am web developer for more than 2 years of web application
            developing.
          </p>
          <em>This is an React application for tracking real-time covid-19</em>
        </Card.Text>
        <div className="d-flex justify-content-around col-6">
          <Card.Link
            href="https://github.com/krouhifar"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            <Button variant="primary" className="text-white">
              <i class="fab fa-github-square fs-2"></i>
              <div>Github</div>
            </Button>
          </Card.Link>
          <Card.Link
            href="https://www.kamyabrouhifar.ca"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            <Button variant="primary">
              <i class="fab fa-wordpress-simple fs-2"></i>
              <div>Portfolio</div>
            </Button>
          </Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default About;
