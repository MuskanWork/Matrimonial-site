import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import {className} from "classname";
import axios from 'axios';
const title = {
    // textAlign: "center",
    backgroundColor: "rgb(115, 115, 219)",
    color: "whitesmoke"

}

function Login(props) {
    const {register, handleSubmit, errors} = useForm({
        mode: "onTouched"
    });
    const [show, setShow] = useState(false);

    // const [userLogin, setuserLogin] = useState({
    //     email: "",
    //     password: ""
    // })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onsubmit = (data) =>{
    
        // console.log(data.email);
        // console.log(data.password);
        const LoginData = {
            email : data.email,
            password : data.password
        }
        console.log(LoginData);
        axios.post('http://localhost:8003/login', LoginData)
        .then(res => console.log(res.data))
        }

        

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
                    <Form onSubmit={handleSubmit(onsubmit)}>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={3}>
                                Email
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control ref={register({required : "this field is required",
                                pattern : {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message : "please enter a valid email"}
                                })} name="email" type="email" placeholder="Email" isInvalid={errors.email} />
                               
                                {errors.email && (<div className= "invalid-feedback">{errors.email.message}</div>)}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={3}>
                                Password
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control ref={register({required : "this field is required",
                                pattern : {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message : "please enter a valid password"}
                                })} name="password" type="password" placeholder="Password" isInvalid={errors.password} />
                                {errors.password && (<div className= "invalid-feedback">{errors.password.message}</div>)}
                            </Col>
                        </Form.Group>
                    
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >
                        Close
            </Button>
                    <Button variant="primary" type="submit" onClick={handleClose}>
                        Sign in
            </Button>
                </Modal.Footer>
                </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Login;