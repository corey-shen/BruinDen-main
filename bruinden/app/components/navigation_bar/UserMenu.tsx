'use client';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useState, useCallback } from 'react';
import MenuItem from './MenuItem';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/*
        <div
          onClick={() => {}}
          className="p-4 md:py-1 md:px-4 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition hidden md:block" // hidden on small screens, visible on medium and larger screens
          style={{ backgroundColor: '#FFFFFF', color: "#2F4858", fontSize: "30px" }}
        >
          Create a Listing
        </div>
  */}
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
        <div className = "absolute rounded-xl shadow-md w-[40vw] md:w-[200px] overflow-hidden right-0 top-12 text-sm" style={{backgroundColor:'#2F4858'}}
        >
            <div className = "flex flex-col cursor-pointer py-2">
                <>
                    <MenuItem
                        onClick = {() => {}}
                        label = "Log In"
                        reference='login'
                    />
                    <MenuItem
                        onClick = {() => {}}
                        label = "Create a Listing"
                        reference='create_listing'
                    />
                </>
            </div>
        </div>
      )
      }
    </div>
  );
};

export default UserMenu;
