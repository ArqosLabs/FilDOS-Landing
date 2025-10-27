
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "FilDOS",
  description:
    "FilDOS is a secure, AI-native decentralized cloud storage solution that prioritizes meaning-first data organization and retrieval.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <main className="flex flex-col">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
