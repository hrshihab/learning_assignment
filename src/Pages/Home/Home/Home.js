import React from 'react';
import { Image } from 'react-bootstrap';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
  useTitle('Home');
  return (
    <div>
      <h1>Tutorial Zone!</h1><h5>Course Loading..!!</h5>
      <Image src='https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2019/09/web-developement-tutorial-1.png'></Image>
    </div>
  );
};

export default Home;