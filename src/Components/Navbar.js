import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default function NavBar(props) {
  return (
    <Navbar bg="secondary" varient="light" expand="lg">
      <Container fluid>
        <Navbar.Brand to="/">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link to="/about">About</Nav.Link>
          </Nav>
          {props.search ? (
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.defaultProps = {
  title : "Default Title",
  search: true,
};

NavBar.propTypes = {
  title : PropTypes.string,
  search: PropTypes.bool.isRequired,
}
