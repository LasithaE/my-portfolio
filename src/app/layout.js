import {
  EB_Garamond,
  Fleur_De_Leah,
  Jost,
  Inter_Tight,
  Pixelify_Sans,
  Instrument_Serif,
} from "next/font/google";
import "@/app/globals.css";
import { TopBar } from "@/components/TopBar";
import Image from "next/image";
import { TopBarWrapper } from "@/components/TopBarWrapper";

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
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"],
});
export const metadata = {
  title: "Lasitha E ☆ Product",
  description: "Generated by create next app",
  icons: {
    icon: "/tab_icon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fleurDeLeah.variable} ${jost.variable} ${EBGaramond.variable} ${inter.variable} antialiased polka-dot overflow-x-hidden flex flex-col min-h-screen`}
        cz-shortcut-listen="true"
      >
        <div className="sticky top-0 z-50 bg-white pb-3 md:bg-transparent md:static">
          <TopBarWrapper />
        </div>

        {/* Main content area takes remaining height */}
        <main className="flex-1">{children}</main>

        <footer className="flex items-center flex-col justify-center mb-0 md:mb-10">
          <div
            style={{
              fontFamily: "Loverine",
              fontSize: "20px",
              color: "#9E9EA9",
              textShadow: "initial",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            made by yours truly ,
            <Image
              src="/sign_black_and_red.png"
              alt="Sign Icon"
              width={60}
              className="mb-3"
              height={14}
            />
          </div>
        </footer>
      </body>
    </html>
  );
}
