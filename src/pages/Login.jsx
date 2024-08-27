import React from 'react'
import { Container, Form, Button } from "react-bootstrap";
import "../styles/Login.css" ;
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {

    const [formData, setFormData] = useState({
    
        email: "",
        password: ""

    })
    const handleChange = () => {

    }

  return (
    <Container>
        <h1>Login Form</h1>
        <Form>
            
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange} required
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange} required
                />
            </Form.Group>
            <Button variant='success' type='submit'>Register</Button>
            {/* <p>Already have an account?</p> <Link to ="/login">Login</Link> */}
        </Form>
    </Container>
  )
}

export default Login