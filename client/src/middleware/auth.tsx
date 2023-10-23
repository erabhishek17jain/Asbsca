import { Navigate } from 'react-router-dom';

export const AuthorizeUser = ({ children }: any) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to={'/'} replace={true}></Navigate>;
  }

  return children;
};

export const ProtectRoute = ({ children }: any) => {
  const username = '';
  if (!username) {
    return <Navigate to={'/'} replace={true}></Navigate>;
  }
  return children;
};
