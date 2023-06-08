import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [error,setError] = useState('');
  const {signIn,setLoader} = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
signIn(email,password)
.then(result => {
  const user = result.user;
  form.reset();
  setError();
  if(user.emailVerified)
  {
    navigate(from,{replace:true});
  }
  else {
    toast.error('please verify you mail');
  }

})
.catch(error => {
setError(error.message);
})
.finally(()=> {
  setLoader(false);
})

  }
  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control name='email'  type="email" placeholder="Enter email" required />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name='password' type="password" placeholder="Password" required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    <Form.Text className='text-danger'>
      {error}
    </Form.Text>
  </Form>
  
  );
};

export default Login;