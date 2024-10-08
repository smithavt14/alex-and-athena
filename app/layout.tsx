import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Roboto_Mono, Pacifico, Reenie_Beanie } from 'next/font/google';  
import "./globals.css";

// Keep your existing local font imports
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Add Google Fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const pacifico = Pacifico({
  weight: '400',  
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const reenieBeanie = Reenie_Beanie({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-reenie-beanie',
});

export const metadata: Metadata = {
  title: "Alex and Athena",
  description: "A lovely website for a lovely couple",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '64x64',
      url: '/favicon-64.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32.png',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${inter.variable} ${robotoMono.variable} ${reenieBeanie.variable} antialiased`} >
        {children}
      </body>
    </html>
  );
}
