import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import TopSideNav from '../TopSideNav/TopSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogOut = () => {
   logOut();
  }
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">Learn & Build </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className='d-lg-none'>
          <TopSideNav></TopSideNav>
        </div>
        {
          user?.uid ? 
          <Nav>
          <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
         
         {user.photoURL ?
          <Image roundedCircle style={{height:'30px'}}  src={user.photoURL} alt='Null'></Image>
          :
          <FaUserAlt></FaUserAlt>
         }
         <Button onClick={handleLogOut} className='ms-4' variant="primary">LogOut</Button>
      
        </Nav> 
        :
    <>
     
    <Link className='mx-2' to='/login'>Login</Link>

    <Link to='/register'>Register</Link>
  
    </>
    
        
     
}
        
     
       
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;