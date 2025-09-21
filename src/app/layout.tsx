
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
