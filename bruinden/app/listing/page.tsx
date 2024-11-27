import Image from "next/image";
import { Oswald } from "next/font/google"
import { Montserrat } from "next/font/google"
import styles from './page.module.css'
import ImageCarousel from './components/ImageMarquee';

const monserrat = Montserrat({subsets:['latin']})

export default function Listing() {
  const placeholderImages = [
    "https://picsum.photos/seed/a/1920/1080",
    "https://picsum.photos/seed/b/1024/576",
    "https://picsum.photos/seed/c/1024/576",
    "https://picsum.photos/seed/d/1024/576",
    // "https://picsum.photos/seed/e/1024/576",
    // "https://picsum.photos/seed/f/1024/576",
    // "https://picsum.photos/seed/g/1024/576",
    // "https://picsum.photos/seed/h/1024/576",
    // "https://picsum.photos/seed/i/1024/576",
    // "https://picsum.photos/seed/j/1024/576",
    // "https://picsum.photos/seed/k/1024/576",
    // "https://picsum.photos/seed/l/1024/576",
    // "https://picsum.photos/seed/m/1024/576",
    // "https://picsum.photos/seed/n/1024/576",
    // "https://picsum.photos/seed/o/1024/576",
    // "https://picsum.photos/seed/p/1024/576",
    // "https://picsum.photos/seed/q/1024/576",
    // "https://picsum.photos/seed/r/1024/576",
    // "https://picsum.photos/seed/s/1024/576",
    // "https://picsum.photos/seed/t/1024/576",
    // "https://picsum.photos/seed/u/1024/576",
  ];
  
  return (
   <div>
      <ImageCarousel images={placeholderImages} />
   </div>
  );
}