import { EB_Garamond, Fleur_De_Leah, Inter_Tight } from "next/font/google";
import "@/app/globals.css";
import { TopBarWrapper } from "@/components/TopBarWrapper";

const fleurDeLeah = Fleur_De_Leah({
  variable: "--font-fleur-de-leah",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter_Tight({
  variable: "--font-inter-tight",
  weight: "400",
  subsets: ["latin"],
});
const EBGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Lasitha E ☆ Product",
  description:
    "Product Manager with a background in frontend dev & project management — building, shipping, and writing about it.",
  icons: {
    icon: "/tab_icon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fleurDeLeah.variable} ${EBGaramond.variable} ${inter.variable} antialiased polka-dot overflow-x-hidden flex flex-col min-h-screen`}
        cz-shortcut-listen="true"
      >
        <TopBarWrapper />

        <main className="flex-1 pb-24 md:pb-0">{children}</main>
      </body>
    </html>
  );
}
