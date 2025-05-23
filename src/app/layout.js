import { EB_Garamond, Fleur_De_Leah, Jost, Inter_Tight, Pixelify_Sans } from "next/font/google";
import "@/app/globals.css";
import { TopBar } from "@/components/TopBar";


const fleurDeLeah = Fleur_De_Leah({
  variable: "--font-fleur-de-leah",
  weight: "400",
  subsets: ["latin"],
});

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  weight: "400",
  subsets: ["latin"],
});
const inter = Inter_Tight({
  variable: "--font-inter-tight",
  weight: "400",
  subsets: ["latin"],
});
const jost = Jost({ variable: "--font-jost", subsets: ["latin"] });
const EBGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Lasitha E ☆ Product",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fleurDeLeah.variable} ${jost.variable} ${EBGaramond.variable} ${inter.variable} antialiased polka-dot`}
        cz-shortcut-listen="true"
      >
       <> <TopBar />
       {children}</>
      </body>
    </html>
  );
}
