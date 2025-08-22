"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css"; // এই লাইনটি নিশ্চিত করুন

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SessionProvider>
  );
}
