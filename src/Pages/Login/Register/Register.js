import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
  const {createUser,updateUserProfile,verifyEmail} = useContext(AuthContext);
  const [error,setError] = useState('');
  const [accepted,setAccepted] = useState(false);
  const handleSubmit =(event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    //console.log(name,email,password,photoURL);
    const profile = {displayName:name,photoURL:photoURL};

    createUser(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
      setError('');
      updateProfile(profile);
      emailVerify();
      toast.success('Please verify you mail');
    })
    .catch(error => {
setError(error.message);
    })

  }
  const updateProfile = (profile) => {
    updateUserProfile(profile)
    .then(()=> {})
    .catch(error => {console.error(error)})
  }
  const handleAccepted = event => {
    //console.log(event.target.checked);
    setAccepted(event.target.checked);
  }
  const emailVerify =() => {
verifyEmail()
.then(()=> {})
.catch(e=> console.error(error.message))
  }
  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Your Name</Form.Label>
      <Form.Control name='userName' type="text" placeholder="Enter name" />
      
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Photo Url</Form.Label>
      <Form.Control name='photoURL' type="text" placeholder="Enter photo URL" />
      
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control name='email' type="email" placeholder="Enter email" required/>
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name='password' type="password" placeholder="Password" required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
    </Form.Group>
    <Button variant="primary" type="submit" disabled={!accepted}>
      Submit
    </Button>

    <Form.Text className="text-danger">
        {error}
      </Form.Text>
  </Form>
  );
};

export default Register;