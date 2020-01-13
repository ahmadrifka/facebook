import React from 'react';
import '../layout.css'
import {Navbar, Form, FormControl, Nav} from 'react-bootstrap';

function HeaderNav(){
    return(
        <div>
             <Navbar bg="" variant="dark" className="header">
                <Navbar.Brand style={{fontWeight:'bold', fontSize: 30}} href="#home">Digital Facebook</Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width: 400}} />
            </Form>
                <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Profile</Nav.Link>
                <Nav.Link href="#Notifs">Notification</Nav.Link>
                </Nav>
                
            </Navbar>
        </div>
    )
}

export default HeaderNav;
