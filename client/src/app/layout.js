import { IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Thype",
  description: "Type to win!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={IBMPlexMono.className}>{children}</body>
    </html>
  );
}
