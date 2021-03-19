import { Modal, Button, Form, Col, Row, FormGroup } from 'react-bootstrap';
import React, { useState } from 'react';
const title = {
  textAlign: "center",
  backgroundColor: "rgb(115, 115, 219)",
  color: "whitesmoke"

}

function Register(props) {
  const [show, setShow] = useState(false);
  // const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

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
          <Form>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={4}>
                Email
              </Form.Label>
              <Col sm={8}>
                <Form.Control hasValidation type="email" placeholder="Email" required />
                <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={4}>
                Password
            </Form.Label>
              <Col sm={8}>
                <Form.Control type="password" placeholder="Password" required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formDate">
                <Col column sm={4}>
                  <Form.Label>
                    D.O.B.
                  </Form.Label>
                </Col>
                <Col column sm={5}>
                  <Form.Control type="date" name='date_of_birth' required>
                  </Form.Control>
                </Col>
             
            </Form.Group>
            
              <Form.Group as={Row} >
                <Col sm={4}>
                  <Form.Label>Height</Form.Label>
                </Col>
                <Col sm={3}>
                  <Form.Control type="Number" placeholder="Height" required/>
                </Col>
                <Col sm={2}>
                  <Form.Label>Weight</Form.Label>
                </Col>
                <Col sm={3}>
                  <Form.Control type="Number" placeholder="Weight" required/>
                </Col>
              </Form.Group>
            
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Marital Status
              </Form.Label>
              <Col sm={7}>
                <Form.Control as="select" placeholder="Please select" required>
                  <option label="Please select"></option>
                  <option>Never Married</option>
                  <option>Married</option>
                  <option>Awaiting Divorce</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                  <option>Annulled</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Mother Toungue
              </Form.Label>
              <Col sm={3}>
                <Form.Control as="select" placeholder="Please select" required>
                  <option label="Please select"></option>
                  <option>Marathi</option>
                  <option>Hindi</option>
                  <option>English</option>
                  <option>Sindhi</option>
                  <option>Urdu</option>
                  <option>Tamil</option>
                </Form.Control>
              </Col>
              <Form.Label column sm={2}>
                Religion
              </Form.Label>
              <Col sm={3}>
                <Form.Control as="select" placeholder="Please select" required>
                  <option label="Please select"></option>
                  <option>Hindu</option>
                  <option>Muslim</option>
                  <option>Christian</option>
                  <option>Buddhist</option>
                  <option>Jain</option>
                  <option>Sikh</option>
                </Form.Control>
              </Col>
            </Form.Group>
            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={4}>
                  Gender
                </Form.Label>
                <Form.Check column sm={2}
                  type="radio"
                  label="Male "
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1">
                </Form.Check>
                <Form.Check column sm={3}
                  type="radio"
                  label="Female "
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1">
                </Form.Check>
                <Form.Check column sm={3}
                  type="radio"
                  label="Others"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1">
                </Form.Check>
              </Form.Group>
            </fieldset>
            <FormGroup as={Row}>
              
                <Form.Label column sm={4}>
                  City
                </Form.Label>
                <Col column sm={3}>
                  <Form.Control placeholder="City" required/>
                </Col>
                <Form.Label column sm={2}>
                  PinCode
                </Form.Label>
                <Col column sm={3}>
                  <Form.Control placeholder="Pincode" required />
                </Col>
              
            </FormGroup>
            <Form.Group as={Row}>
              <Form.Label column sm={4}>
                Mobile Number
              </Form.Label>
              <Col sm={8}>
                <Form.Control type="text" placeholder="Mobile Number" required/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col sm={{ span: 11}}>
                <Form.Check style={{fontSize : "13px"}} label="I have agreed to the Terms & Conditions & have read & understood the Privacy Policy."  feedback="You must agree before submitting."/>
              </Col>
            </Form.Group> 
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
             Register
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register;