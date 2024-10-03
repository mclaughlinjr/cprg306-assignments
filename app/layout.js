import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "cprg306-assignments",
  description: "Assignments for CPRG 306",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> {children}</body>
    </html>
  );
}
