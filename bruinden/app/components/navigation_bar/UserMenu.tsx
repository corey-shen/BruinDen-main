"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useState, useEffect, useCallback } from "react";
import MenuItem from "./MenuItem";
import LoginPage from "../../../pages/auth/LoginPage";
import SignUpPage from "../../../pages/auth/SignUpPage";

import { User } from "@prisma/client";
import getCurrentUser from "@/app/action/getCurrUser";
// interface curUser {
//   currentUser?: User | null;
// }

const UserMenu = () => {
  // const [currentUser, setCurrentUser] = useState<User | null>(null);
  // useEffect(() => {
  //   const fetchCurrentUser = async () => {
  //     try {
  //       const user = await getCurrentUser();
  //       setCurrentUser(user);
  //     } catch (error) {
  //       console.error("Error fetching current user", error);
  //     }
  //   };

  //   fetchCurrentUser();
  // }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleLoginClick = useCallback(() => {
    setIsOpen(false);
    setShowLogin(true);
  }, []);

  const handleSignUpClick = useCallback(() => {
    setIsOpen(false);
    setShowSignUp(true);
  }, []);

  const handleBackClick = useCallback(() => {
    setShowLogin(false);
    setShowSignUp(false);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="p-4 md:py-3 md:px-2 border-[2px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition relative"
        >
          <AiOutlineMenu size={30} />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute rounded-xl shadow-md w-[40vw] md:w-[200px] overflow-hidden right-0 top-12 text-sm"
          style={{ backgroundColor: "#2F4858" }}
        >
          <div className="flex flex-col cursor-pointer py-2">
            {1 > 2 ? ( //TODO: Check if user exist instead. Need to debug (code commented above)
              <>
                {/* Render if currentUser is not null */}
                <MenuItem
                  onClick={() => {}}
                  label="Create a Listing"
                  reference="#"
                />
                <MenuItem onClick={() => {}} label="Profile" reference="#" />
                <MenuItem onClick={() => {}} label="Log Out" reference="#" />
              </>
            ) : (
              <>
                {/* Render if currentUser is null */}
                <MenuItem
                  onClick={handleLoginClick}
                  label="Log In"
                  reference="#"
                />
                <MenuItem
                  onClick={handleSignUpClick}
                  label="Sign Up"
                  reference="#"
                />
              </>
            )}
          </div>
        </div>
      )}
      {showLogin && <LoginPage onBack={handleBackClick} />}
      {showSignUp && <SignUpPage onBack={handleBackClick} />}
    </div>
  );
};

export default UserMenu;
