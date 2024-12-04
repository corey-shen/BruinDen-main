'use client';
import React from "react";
import Link from "next/link";


const Meet_People = () => {
    return (
      <div className="cursor-pointer hover:text-gray-300">
        <Link href="/meet_people">Meet People</Link>
      </div>
    );
  };
  
  export default Meet_People;