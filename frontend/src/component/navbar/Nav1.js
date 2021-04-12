import { Navbar, Nav, Form } from 'react-bootstrap';
import './navstyle.css';
import Register from './Register';
import Login from './Login';
const Nav1 = (props) => {

  return (
    <>
      <Navbar className="bg" expand="lg">
        <Navbar.Brand href="./Home"><img src="./images/logo1.jpg" width="120" height="80" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="./Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>

            {/* <Nav.Link href="/Profile">Profile</Nav.Link> */}
          </Nav>
          <Form inline>
            <Login onClick={props.handleClose} type="button" class="btn btn-primary my-2 my-sm-0"></Login>
            {/* <button class="btn btn-primary my-2 my-sm-0" type="submit">Login</button> */}
            <Register onClick={props.handleClose} type="button" class="btn btn-primary my-2 my-sm-0"></Register>


          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default Nav1;
