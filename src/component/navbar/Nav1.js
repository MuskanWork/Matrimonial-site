import { Navbar, NavDropdown, Nav, Button, Form, FormControl } from 'react-bootstrap';
import logo1 from '/home/rails/Desktop/Project/shadimubarak/src/images/logo1.jpg';
import '/home/rails/Desktop/Project/shadimubarak/src/component/navbar/navstyle.css';
import Register from '/home/rails/Desktop/Project/shadimubarak/src/component/navbar/Register.js';
import Login from '/home/rails/Desktop/Project/shadimubarak/src/component/navbar/Login.js';
const Nav1 = (props) => {

  return (
    <>
      <Navbar className="bg" expand="lg">
        <Navbar.Brand href="#home"><img src={logo1} width="120" height="80" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
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
