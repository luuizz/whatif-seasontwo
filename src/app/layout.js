import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import './app.css'
import { createClient } from "@/prismicio";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  adjustFontFallback: false
});

export async function generateMetadata() {

  const client = createClient();

  const page = await client.getSingle("configuracoes");

  return {
    title: page.data.site_title || "What if...? | Codeboost",
    description: page.data.meta_description || "Projeto do curso Codeboost",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
    keywords: [page.data.meta_keywords || ""],
    twitter: {
      title: page.data.site_title || "What if...? | Codeboost",
      images: [page.data.og_image.url || ""],
    }
  }
}

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
