import Nav1 from './Nav1';
import { CardDeck, Card, Breadcrumb, Button, Form, Row, Col } from 'react-bootstrap';

const profile = {
    width: "20px",
    height: "700px"
}

const Profile = () => {

    return (
        <>
            <CardDeck>
                <Card >
                    <Card.Header><h3>My Profile</h3></Card.Header>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Matches</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">
                            Messages
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Card.Body>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src="holder.js" />
                    <Card.Body>
                        <Card.Title>
                            <Button variant="danger" as="input" type="button" value="Dislike" />
                            <Button variant="success" as="input" type="button" value="Like" />
                        </Card.Title>
                        <Card.Text>
                            Bio
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Header><h3>Settings</h3></Card.Header>

                    <Card.Body>
                        <Card.Title>Filters</Card.Title>
                        <Card.Text>
                            <Form.Group as={Row}>
                                <Form.Label column sm={4} htmlFor="status">
                                    Show : 
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control as="select" name="status" placeholder="Please select" required>
                                        <option label="Please select"></option>
                                        <option>Mens</option>
                                        <option>Womens</option>
                                        <option>Both</option>
                                        
                                    </Form.Control>
    
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={4} htmlFor="status">
                                    Age Range : 
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control as="select" name="status" placeholder="Please select" required>
                                        <option label="Please select"></option>
                                        <option>20-22</option>
                                        <option>22-24</option>
                                        <option>24-26</option>
                                        
                                    </Form.Control>
    
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={4} htmlFor="status">
                                    Religion : 
                                </Form.Label>
                                <Col sm={7}>
                                    <Form.Control as="select" name="status" placeholder="Please select" required>
                                        <option label="Please select"></option>
                                        <option>Hindu</option>
                                        <option>Muslim</option>
                                        <option>Sikh</option>
                                        <option>Chrishtan</option>
                                        
                                    </Form.Control>
    
                                </Col>
                            </Form.Group>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

            </CardDeck>

        </>
    )

}
export default Profile;