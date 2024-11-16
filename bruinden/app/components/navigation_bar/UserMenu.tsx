'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useState, useCallback } from 'react';
import MenuItem from './MenuItem';
import LoginPage from '../../auth/LoginPage';
import SignUpPage from '../../auth/SignUpPage';

const UserMenu = () => {
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
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[200px] overflow-hidden right-0 top-12 text-sm" style={{ backgroundColor: '#2F4858' }}>
          <div className="flex flex-col cursor-pointer py-2">
            <>
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
              <MenuItem
                onClick={() => {}}
                label="Create a Listing"
                reference="#"
              />
            </>
          </div>
        </div>
      )}
      {showLogin && (
        <LoginPage onBack={handleBackClick} />
      )}
      {showSignUp && (
        <SignUpPage onBack={handleBackClick} />
      )}
    </div>
  );
};

export default UserMenu;
