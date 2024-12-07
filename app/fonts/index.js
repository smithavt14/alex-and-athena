import localFont from "next/font/local";
import { Inter, Roboto_Mono, Pacifico, Reenie_Beanie } from 'next/font/google';

// Local fonts
export const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google fonts
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const pacifico = Pacifico({
  weight: '400',  
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

export const reenieBeanie = Reenie_Beanie({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-reenie-beanie',
}); 