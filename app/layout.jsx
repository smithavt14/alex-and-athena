import { geistSans, geistMono, inter, robotoMono, pacifico, reenieBeanie } from './fonts';
import Navbar from "@components/Navbar";
import StarryBackground from "@components/StarryBackground";
import "./globals.css";

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
      <body className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} ${inter.variable} ${robotoMono.variable} ${reenieBeanie.variable} antialiased bg-gradient-to-t from-slate-50 to-white`}>
        <main className="mx-auto max-w-screen-lg p-6 md:px-12 lg:px-16">
          <>
            <StarryBackground />
            <Navbar />
            {children}
          </>
        </main>
      </body>
    </html>
  );
}
