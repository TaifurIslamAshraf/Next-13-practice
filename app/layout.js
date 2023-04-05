import Header from "@/components/header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
