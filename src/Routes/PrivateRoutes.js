import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
  const {user,loader} = useContext(AuthContext);
  const location = useLocation();
  if(loader){
    return <div>loading..</div>
  }
  if(!user) {
    return <Navigate to='/login' state={{from:location}} replace />
  }
  return children;
};

export default PrivateRoutes;