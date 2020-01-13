import{Navbar} from 'react-bootstrap'
import React from 'react';
import '../layout.css'
function Header() {
    return(
        <div>
            <Navbar bg="" variant="dark" className="header">
                <Navbar.Brand className="title" href="#home">Digital Facebook</Navbar.Brand>
                
            </Navbar>
        </div>
    );
}

export default Header;