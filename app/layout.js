import "./globals.css";

export const metadata = {
  title: "União Transportes | Viagens",
  description: "Busca e gerenciamento de viagens da União Transportes"
};

export default function RootLayout({ children }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
