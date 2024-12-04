'use client';
import React from "react";
import Link from "next/link";


const Home = () => {
    return (
      <div className="cursor-pointer hover:text-gray-300">
        <Link href='/'>Home</Link>
      </div>
    );
  };
  
  export default Home;