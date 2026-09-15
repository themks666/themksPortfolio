import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';

import Provider from "@/components/provider";
import Navbar from "@/components/myComponents/Navbar";
export const metadata: Metadata = {
  title: "TheMks-portfolio",
  description: "This website showcase the projects and blogs that was made by me recently",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
    lang="en"
    suppressHydrationWarning
    className={` h-full antialiased`}
    >
      <body>
        
        <Provider>
          <div className="min-h-screen mx-auto flex flex-col container px-8 lg:px-32 sm:px-16">
          <Navbar></Navbar>
          {children}
          </div>
          </Provider>
      </body>
<Script src="https://example.com/script.js" strategy="afterInteractive" />
    </html>
  );
}
