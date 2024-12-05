import './globals.css';
import { Montserrat } from 'next/font/google';
import Navigationbar from './components/navigation_bar/Navigationbar';
import { AuthProvider } from './components/AuthContext';

export const metadata = {
  title: 'BruinDen',
  description: 'The apartment finding website'
}

const font = Montserrat({
  subsets: ["latin"]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProvider>
          <Navigationbar />
            {children}
        </AuthProvider>
      </body>
    </html>
  )
}
