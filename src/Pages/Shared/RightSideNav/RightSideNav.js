import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import { FcGoogle } from 'react-icons/fc';




const RightSideNav = () => {
  return (
    <ListGroup>
    <ListGroup.Item variant='outline-primary' style={{marginTop:'10px',marginBottom:'10px'}}> <FcGoogle />   Sign in With Google</ListGroup.Item>
    
  </ListGroup>
  );
};

export default RightSideNav;