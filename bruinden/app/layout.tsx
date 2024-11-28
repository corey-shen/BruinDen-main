import './globals.css'
import {Montserrat} from "next/font/google";
import Navigationbar from './components/navigation_bar/Navigationbar';
import Categories from './components/navigation_bar/Categories';

export const metadata = {
    title: 'BruinDen',
    description: 'The apartment finding website'

}

const font = Montserrat({
  subsets: ["latin"]
});

export default function RootLayout({children}:{children: React.ReactNode}){
    return (
      <html lang = "eng">
        <body className={font.className}>
          <Navigationbar/>
          <div className="pt-[80px]">
            <div className="w-full bg-white">
              <Categories />
            </div>
          </div>
          {children}
          </body>
      </html>
    )
  }