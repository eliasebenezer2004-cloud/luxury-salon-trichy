import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/providers/ClientLayout";

export const metadata: Metadata = {
  title: "Aurelia Spa & Salon | Sanctuary Trichy",
  description:
    "Experience absolute structural wellness and advanced salon formulations at Aurelia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="grain-overlay" />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
