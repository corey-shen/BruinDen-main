'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () =>{
    const router = useRouter();

    return (
        <Image 
            onClick={() => router.push('/')} // Click on logo to reset category selection
            alt = "BruinDen Logo" 
            className="hidden md:block cursor-pointer" 
            height = "80" 
            width="80" 
            src="/images/temp_logo.png"></Image>
    );
}

export default Logo;