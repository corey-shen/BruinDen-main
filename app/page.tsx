import Image from "next/image";
import { Oswald } from "next/font/google"
import { Montserrat } from "next/font/google"
import styles from './page.module.css'
import HousingListings from "./components/housing/HousingListings";

const monserrat = Montserrat({subsets:['latin']})

export default function Home() {
  return (
   <main>
    <HousingListings />
   </main>
  );
}
