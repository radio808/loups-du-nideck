import "./globals.css";

export const metadata = {
  title: "Les Loups du Nideck",
  description: "Élevage, éducation et ostéopathie canine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
