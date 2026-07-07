import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Letnja škola pisanja newslettera | Nikola Newsletter",
  description:
    "Ovladaj pisanjem prodajnog newslettera od naslova do poziva na akciju. 6 online časova uživo, praktičan rad na tvom newsletteru i domaći zadaci od 3. avgusta do 7. septembra.",
  openGraph: {
    title: "Letnja škola pisanja newslettera",
    description:
      "Šestonedeljna online škola u kojoj stičeš znanje kako se piše newsletter sa jasnom strukturom, psihologijom, odnosom sa čitaocem i prodajnom funkcijom.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
