import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const User = () => {
  const { logout, loginWithRedirect, user, isAuthenticated, isLoading, error } =
    useAuth0();

  if (isLoading) {
    console.log(error, user?.name, isAuthenticated, isLoading);
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(user?.name, isAuthenticated, isLoading);
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    console.log(user, isAuthenticated, isLoading);
    return (
      <div>
        Hello {user?.name}{' '}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    );
  } else {
    console.log(error, user?.name, isAuthenticated, isLoading);
    return (
      <div>
        <button onClick={loginWithRedirect}>Log in</button>
      </div>
    );
  }
};

export default User;
