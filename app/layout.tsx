import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taxi App",
  description: "Made by Artem Sitnikov Developer",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <ClerkProvider>
        <html lang="en">
        <link rel="shortcut icon" href="/taxi.png" />
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </html>
      </ClerkProvider>
  );
}
