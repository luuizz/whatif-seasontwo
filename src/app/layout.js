import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import './app.css'

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  adjustFontFallback: false
});

export const metadata = {
  title: "What if...? | Codeboost",
  description: "Projeto do realizado durante o curso do Codeboost, com o intuito de utilizar a API do Prismic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
