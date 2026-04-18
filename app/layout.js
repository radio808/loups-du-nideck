import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Les Loups du Nideck | Natacha Kocher",
  description:
    "Élevage, éducation canine et ostéopathie canine dans un univers premium inspiré du loup, de la forêt et du prestige.",
  keywords: [
    "élevage canin",
    "éducation canine",
    "ostéopathie canine",
    "Les Loups du Nideck",
    "Natacha Kocher",
    "Alsace",
  ],
  openGraph: {
    title: "Les Loups du Nideck | Natacha Kocher",
    description:
      "Site premium dédié à l'élevage, l'éducation et l'ostéopathie canine.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
