import { Modal, Button, Form, Col, Row, FormGroup, FormControl } from 'react-bootstrap';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const title = {
  textAlign: "center",
  backgroundColor: "rgb(115, 115, 219)",
  color: "whitesmoke"

}

function Register(props) {
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched"
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onsubmit = (data) => { 
    // data.preventDefault();
    const RegisterData = {
            username : data.username,
            email : data.email,
            password : data.password,
            dob : data.dob,
            height : data.height,
            weight : data.weight,
            matrialStatus : data.status,
            motherToungue : data.toungue,
            religion : data.religion,
            gender : data.gender,
            city : data.city,
            pincode : data.pincode,
            mobile : data.mobile
  }
    console.log(RegisterData) 
  
    axios.post('http://localhost:8002/register', RegisterData)
    .then(res => console.log(res.data))
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Register
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={title}>
          <Modal.Title><center>REGISTER FREE<br /><h6>Meet Over 10 Lakhs Profile</h6></center></Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form action="" onSubmit={handleSubmit(onsubmit)}>
            <Form.Group as={Row}>
              <Form.Label column sm={4} htmlFor="username">
                Username
              </Form.Label>
              <Col sm={8}>
                <Form.Control ref={register({
                  required: "this field is required",
                  minLength: {
                    value: 4,
                    message: "please enter a atlest 4 character "
                  }
                })} name="username" type="text" placeholder="username" isInvalid={errors.username} />

                {errors.username && (<div className="invalid-feedback">{errors.username.message}</div>)}
              </Col>
            </Form.Group>

            <Form.Group as={Row} >
              <Form.Label column sm={4} htmlFor="email">
                Email
              </Form.Label>
              <Col sm={8}>
                <Form.Control ref={register({
                  required: "this field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "please enter a valid email"
                  }
                })} name="email" type="email" placeholder="Email" isInvalid={errors.email} />

                {errors.email && (<div className="invalid-feedback">{errors.email.message}</div>)}
              </Col>
            </Form.Group>
            <Form.Group as={Row} >
              <Form.Label column sm={4} htmlFor="password">
                Password
            </Form.Label>
              <Col sm={8}>
                <Form.Control ref={register({
                  required: "this field is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "please enter a strict password"
                  }
                })} name="password" type="password" placeholder="Password" isInvalid={errors.password} />

                {errors.password && (<div className="invalid-feedback">{errors.password.message}</div>)}
              </Col>
            </Form.Group>

            <Form.Group as={Row} >
              <Col column sm={4}>
                <Form.Label htmlFor="dob">
                  D.O.B.
                  </Form.Label>
              </Col>
              <Col column sm={5}>
                <Form.Control ref={register({
                  required: "this field is required"
                })} type="date" name='dob' isInvalid={errors.dob} >
                </Form.Control>
                {errors.dob && (<div className="invalid-feedback">{errors.dob.message}</div>)}
              </Col>
            </Form.Group>

            <Form.Group as={Row} >
              <Col sm={4}>
                <Form.Label htmlFor="height">Height</Form.Label>
              </Col>
              <Col sm={3}>
                <Form.Control ref={register({
                  required: "this field is required"
                })} type="Number" name="height" placeholder="Height" isInvalid={errors.height} required />
                {errors.height && (<div className="invalid-feedback">{errors.height.message}</div>)}
              </Col>
              <Col sm={2}>
                <Form.Label htmlFor="weight">Weight</Form.Label>
              </Col>
              <Col sm={3}>
                <Form.Control ref={register({
                  required: "this field is required"
                })} type="Number" name="weight" placeholder="Weight" isInvalid={errors.weight} required />
                {errors.weight && (<div className="invalid-feedback">{errors.weight.message}</div>)}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4} htmlFor="status">
                Marital Status
              </Form.Label>
              <Col sm={7}>
                <Form.Control as="select" ref={register({
                  required: "this field is required"
                })} name="status" placeholder="Please select" isInvalid={errors.status} required>
                  <option label="Please select"></option>
                  <option>Never Married</option>
                  <option>Married</option>
                  <option>Awaiting Divorce</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                  <option>Annulled</option>
                </Form.Control>
                {errors.status && (<div className="invalid-feedback">{errors.status.message}</div>)}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4} htmlFor="toungue">
                Mother Toungue
              </Form.Label>
              <Col sm={3}>
                <Form.Control as="select" ref={register({
                  required: "this field is required"
                })} name="toungue" placeholder="Please select" isInvalid={errors.toungue} required>
                  <option label="Please select"></option>
                  <option>Marathi</option>
                  <option>Hindi</option>
                  <option>English</option>
                  <option>Sindhi</option>
                  <option>Urdu</option>
                  <option>Tamil</option>
                </Form.Control>
                {errors.toungue && (<div className="invalid-feedback">{errors.toungue.message}</div>)}
              </Col>
              <Form.Label htmlFor="religion" column sm={2}>
                Religion
              </Form.Label>
              <Col sm={3}>
                <Form.Control as="select" ref={register({
                  required: "this field is required"
                })} name="religion" placeholder="Please select" isInvalid={errors.religion} required>
                  <option label="Please select"></option>
                  <option>Hindu</option>
                  <option>Muslim</option>
                  <option>Christian</option>
                  <option>Buddhist</option>
                  <option>Jain</option>
                  <option>Sikh</option>
                </Form.Control>
                {errors.religion && (<div className="invalid-feedback">{errors.religion.message}</div>)}
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label as="legend" htmlFor="gender" column sm={4}>
                Gender
                </Form.Label>
              <Form.Check column sm={2}
                type="radio"
                label="Male "
                name="gender"
                ref={register({
                  required: "this field is required"
                })} name="gender" isInvalid={errors.gender}
              >
              </Form.Check>
              <Form.Check column sm={3}
                type="radio"
                label="Female "
                name="gender"
                ref={register({
                  required: "this field is required"
                })} name="gender" isInvalid={errors.gender}
              >
              </Form.Check>
              <Form.Check column sm={3}
                type="radio"
                label="Others"
                name="gender"
                ref={register({
                  required: "this field is required"
                })} name="gender" isInvalid={errors.gender}
              >
              </Form.Check>

              {errors.gender && (<div className="invalid-feedback">{errors.gender.message}</div>)}
            </Form.Group>

            <FormGroup as={Row}>

              <Form.Label htmlFor="city" column sm={4}>
                City
                </Form.Label>
              <Col column sm={3}>
                <Form.Control type="text" name="city" ref={register({
                  required: "this field is required"
                })} placeholder="City" isInvalid={errors.city} required />
                {errors.city && (<div className="invalid-feedback">{errors.city.message}</div>)}
              </Col>
              <Form.Label htmlFor="pincode" column sm={2}>
                PinCode
                </Form.Label>
              <Col column sm={3}>
                <Form.Control type="number" name="pincode" ref={register({
                  required: "this field is required"
                })} placeholder="Pincode" isInvalid={errors.pincode} required />
                {errors.pincode && (<div className="invalid-feedback">{errors.pincode.message}</div>)}
              </Col>
            </FormGroup>
            <Form.Group as={Row}>
              <Form.Label htmlFor="mobile" column sm={4}>
                Mobile Number
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="number" name="mobile" ref={register({
                  required: "this field is required",
                  pattern: {
                    value: /^[789]\d{9}$/,
                    message: "enter correct mobile number"
                  }
                })} placeholder="Mobile Number" isInvalid={errors.mobile} required />
                {errors.mobile && (<div className="invalid-feedback">{errors.mobile.message}</div>)}
              </Col>
            </Form.Group>
            <Form.Group as={Row} htmlFor="tc" ref={register({
              required: "this field is required"
            })} isInvalid={errors.tc} controlId="formHorizontalCheck">
              <Col sm={{ span: 11 }}>
                <Form.Check name="tc" style={{ fontSize: "13px" }} label="I have agreed to the Terms & Conditions & have read & understood the Privacy Policy." feedback="You must agree before submitting." />
                {errors.tc && (<div className="invalid-feedback">{errors.tc.message}</div>)}
              </Col>
            </Form.Group>
          
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Register
            </Button>
        </Modal.Footer>
        </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register;