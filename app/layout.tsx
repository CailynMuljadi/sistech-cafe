import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // Choose the weights you need
  subsets: ["latin"],                  // The required subset
  variable: "--font-poppins",          // Optional: for Tailwind custom variables
});

export const metadata: Metadata = {
  title: "SISTECH CAFE",
  description: "Local Coffee brewed by Extraordinary Women in Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={poppins.className}
    >
      <body className="bg-brand-white text-brand-black min-h-screen flex flex-col">
       
        <NavBar />
        <main className="flex-grow">
          {children}
        </main>

        <Footer />

        <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4"
        crossOrigin="anonymous"
        ></script>

      </body>
    </html>
  );
}
