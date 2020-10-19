import React from "react";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import Profile from "../Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";

const AuthButton = () => {
  const { isAuthenticated } = useAuth0();

  console.log(isAuthenticated);
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <div className="profile">
            <Profile />
          </div>
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default AuthButton;
