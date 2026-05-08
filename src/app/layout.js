import "./globals.css";

export const metadata = {
  title: "Simple CRUD Client",
  description: "A simple CRUD application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
