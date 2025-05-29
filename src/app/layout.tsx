import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins', 
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: "Olivia Young | Developer",
  description: "Modern portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="0f13b70b-51cd-4f89-9119-0aabfcd55dcb"
        />
      </head>
      <body className={`${poppins.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
