import { Modal, Button, Form, Col, Row, FormControl, FormGroup } from 'react-bootstrap';
import React, { useState } from 'react';

const title = {
    // textAlign: "center",
    backgroundColor: "rgb(115, 115, 219)",
    color: "whitesmoke"

}

function Login(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Login
        </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton style={title}>
                    <Modal.Title><center>Login<br /><h6>Meet Over 10 Lakhs Profile</h6></center></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                                Email
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={3}>
                                Password
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary" type="submit" onClick={handleClose}>
                        Sign in
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Login;