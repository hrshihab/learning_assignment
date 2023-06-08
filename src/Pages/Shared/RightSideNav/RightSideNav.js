import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';




const RightSideNav = () => {
  const {googleSignIn} = useContext(AuthContext);
  const handleSubmit = () => {
const Provider = new GoogleAuthProvider();
googleSignIn(Provider)
.then((result) => {
  const user = result.user;
  console.log(user);
})
.catch(error => {
  console.error(error);
})
  }
  return (
    <ListGroup>
    <ListGroup.Item 
    onClick={handleSubmit}
    variant='outline-primary' 
    style={{marginTop:'10px',marginBottom:'10px'}}> 
    <FcGoogle />   Sign in With Google</ListGroup.Item>
    
  </ListGroup>
  );
};

export default RightSideNav;