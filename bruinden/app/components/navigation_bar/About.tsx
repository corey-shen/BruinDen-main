'use client';
import React from "react";
import Link from "next/link";

const About = () => {
    return (
      <div className="cursor-pointer hover:text-gray-300">
        <Link href='/about'>About</Link>
      </div>
    );
  };
  
  export default About;