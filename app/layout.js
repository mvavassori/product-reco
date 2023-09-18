import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Standardpick",
  description: "The best product picks, without choice overload.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <div className="flex flex-col min-h-screen min-w-[240px]"> */}
        <Navbar />
        <main className="">{children}</main>
        <Footer />
        {/* </div> */}
      </body>
    </html>
  );
}
