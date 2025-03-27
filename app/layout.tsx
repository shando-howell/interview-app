import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Interview App",
  description: "An AI-powered platform for preparing for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className="">
        {children}
      </body>
    </html>
  );
}
