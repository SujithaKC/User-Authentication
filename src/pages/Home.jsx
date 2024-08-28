import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/home.css";

function Home() {
  return (
    <Container>
      <h1>Welcome To Our Home Page</h1>
      <Button variant="success" type="submit">
        Let's Get Started
      </Button>
    </Container>
  );
}

export default Home;
