'use client';

import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import Search from "./Search";
import Home from "./Home";
import About from "./About";
import Meet_People from './Meet_People';
import { Suspense } from "react";

import { MdAttachMoney, MdBedroomParent, MdBathroom } from 'react-icons/md';
import MenuItem from './MenuItem';
import { useRouter } from 'next/navigation';

const Navigationbar = () => {

  const router = useRouter();

  const handleCreateListingClick = () => {
    router.push('/create_listing');
  }

  return (
    <div className="fixed w-full z-10 shadow-xl" style={{ backgroundColor: '#33658A' }}>
      <div className="py-1 border-b-[1px]">
        {/* Contents are passed as children to Container */}
        <Container>
          <div className="flex items-center justify-between gap-4 text-white w-full" style = {{fontSize:"30px", fontWeight: "bold"}}>
            {/* Logo */}
            <Logo />
            <Home />
            <About />
            <Meet_People />
            {/* Right-aligned Search bar and User Menu */}
            <div className="flex items-center gap-4">
              <Search />
              <UserMenu />
              <MenuItem
                onClick={handleCreateListingClick}
                label="Create Listing"
                reference="/create_listing"
                />
            </div>
          </div>
        </Container>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
      <Categories />
      </Suspense>
    </div>
  );
};

export default Navigationbar;
