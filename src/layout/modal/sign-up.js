import React from 'react';
import {Form, Button, Modal, Row, Col,} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function SignUp (props) {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     modal : props,
  //   }
  // }
  // render() {
  //   console.log(this.state.modal)

  console.log(props)
    return (
      <Modal
        // {...this.state.modal}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New Account
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="box">
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Name
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" placeholder="Your name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Email
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="example@email.com" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Password
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Confirm Password
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="password" placeholder="Confirm password" />
                            </Col>
                        </Form.Group>
                        
                        <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                            <Form.Label column sm={2}>Gender</Form.Label>
                            <Form.Control as="select" style={{width:150, marginLeft: 15}}>
                            <option>MALE</option>
                            <option>FEMALE</option>
                            </Form.Control>
                        </Form.Group>

                        
          </Form> 
        </Modal.Body>
        <Link to="/home">
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button variant="success" type="submit" style={{float: 'right'}} >
            Create
        </Button>
        
        </Modal.Footer>
        </Link>
      </Modal>
    );
  // }
  }
  export default SignUp;
  