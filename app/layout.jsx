import { Poppins } from "next/font/google";
import "./globals.css";


//main components
import Footer from "@/components/Components/Main/Footer/Footer";
import Header from "@/components/Components/Main/Header/Header";


const poppins = Poppins({ 
  subsets: ["latin"],
  weight:['100', '200', '300', '400', '500','600', '700', '800', '900'],
  variable: '--font-poppins'
 });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable} >
        <Header />
          {children}
        <Footer/>
      
      </body>
    </html>
  );
}
