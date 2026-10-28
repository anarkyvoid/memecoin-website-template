import "./globals.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Dúi (aka Nguyen Van Dui) | Solana",
  description: "Dui is forever on Solana",
  openGraph: {
    title: "Dúi (aka Nguyen Van Dui) | Solana",
    description: "Dui is forever on Solana",
    images: ["/hero.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
