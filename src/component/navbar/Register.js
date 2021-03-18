import { Modal, Button, Form, Col, Row, FormGroup } from 'react-bootstrap';
import React, { useState } from 'react';

const title = {
  textAlign: "center",
  backgroundColor: "rgb(115, 115, 219)",
  color: "whitesmoke"

}

function Register(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

            <Form.Group as={Row} controlId="formGridDate">
              <Form.Row>
                <Col>
                  <Form.Label column sm={3}>
                    D.o.b.
    </Form.Label>
                </Col>
                <Col  sm={3}>
                  <Form.Control as="select" placeholder="Day">
                    <option label="Day"></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </Form.Control>
                </Col>
                <Col sm={3}>
                  <Form.Control as="select" placeholder="Please select">
                    <option label="Month"></option>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option>May</option>
                    <option>Jun</option>
                    <option>Jul</option>
                    <option>Aug</option>
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>Nov</option>
                    <option>Dec</option>
                  </Form.Control>
                </Col>
                <Col sm={3}>
                  <Form.Control as="select" placeholder="Please select">
                    <option label="Year"></option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                    <option>2005</option>
                  </Form.Control>
                </Col>
              </Form.Row>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Row} >
                <Col sm={2}>
                  <Form.Label>Height</Form.Label>
                </Col>
                <Col sm={3}>
                  <Form.Control type="Number" placeholder="Height" />
                </Col>
                <Col sm={2}>
                  <Form.Label>Weight</Form.Label>
                </Col>
                <Col sm={3}>
                  <Form.Control type="Number" placeholder="Weight" />
                </Col>
              </Form.Group>
            </Form.Row>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Marital Status
              </Form.Label>
              <Col sm={9}>
                <Form.Control as="select" placeholder="Please select">
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
              <Form.Label column sm={3}>
                Mother Toungue
              </Form.Label>
              <Col sm={3}>
                <Form.Control as="select" placeholder="Please select">
                  <option label="Please select"></option>
                  <option>Marathi</option>
                  <option>Hindi</option>
                  <option>English</option>
                  <option>Sindhi</option>
                  <option>Urdu</option>
                  <option>Tamil</option>
                </Form.Control>
              </Col>
              <Form.Label column sm={3}>
                Religion
              </Form.Label>
              <Col sm={3}>
                <Form.Control as="select" placeholder="Please select">
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
                <Form.Label as="legend" column sm={3}>
                  Gender
                </Form.Label>
                <Form.Check column sm={3}
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
              <Form.Row>
                <Form.Label column sm={2}>
                  City
                </Form.Label>
                <Col column sm={3}>
                  <Form.Control placeholder="City" />
                </Col>
                <Form.Label column sm={2}>
                  PinCode
                </Form.Label>
                <Col column sm={3}>
                  <Form.Control placeholder="Pincode" />
                </Col>
              </Form.Row>
            </FormGroup>
            <Form.Group as={Row}>
              <Form.Label column sm={3}>
                Mobile Number
              </Form.Label>
              <Col sm={9}>
                <Form.Control type="text" placeholder="Mobile Number" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalCheck">
              <Col sm={{ span: 11}}>
                <Form.Check style={{fontSize : "13px"}} label="I have agreed to the Terms & Conditions & have read & understood the Privacy Policy." />
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

export default Register;