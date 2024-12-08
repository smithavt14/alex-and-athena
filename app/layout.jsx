import { geistSans, geistMono, inter, robotoMono, pacifico, reenieBeanie } from './fonts';
import Navbar from "@components/Navbar";
import StarryBackground from "@components/StarryBackground";
import "./globals.css";
import { NavigationProvider } from '@contexts/NavigationContext';

export const metadata = {
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${inter.variable} ${robotoMono.variable} ${reenieBeanie.variable} antialiased bg-white`}>
        <main className="mx-auto max-w-screen-lg px-6 md:px-12 lg:px-16">
          <NavigationProvider>
            <StarryBackground />
            <Navbar />
            {children}
          </NavigationProvider>
        </main>
      </body>
    </html>
  );
}
