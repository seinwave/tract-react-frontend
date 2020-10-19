import React from "react";
import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button variant="danger"
    onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </Button>
  );
};

export default LogoutButton;
