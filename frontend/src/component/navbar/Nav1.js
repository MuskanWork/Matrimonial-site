import { Navbar, NavDropdown, Nav, Form } from 'react-bootstrap';
import logo1 from '/home/rails/Desktop/Project/shadimubarak/frontend/src/images/logo1.jpg';
import '/home/rails/Desktop/Project/shadimubarak/frontend/src/component/navbar/navstyle.css';
import Register from '/home/rails/Desktop/Project/shadimubarak/frontend/src/component/navbar/Register.js';
import Login from '/home/rails/Desktop/Project/shadimubarak/frontend/src/component/navbar/Login.js';
import Foot from '../footer/footer';
import Profile from './Profile';
import '/home/rails/Desktop/Project/shadimubarak/frontend/src/component/navbar/Profile.js';
const Nav1 = (props) => {

  return (
    <>
      <Navbar className="bg" expand="lg">
        <Navbar.Brand href="./Nav1"><img src={logo1} width="120" height="80" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="./Nav1">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            
            <Nav.Link href="/Profile">Profile</Nav.Link>
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
