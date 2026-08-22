import { DM_Mono, EB_Garamond } from "next/font/google";
import PmGamesClient from "./PmGamesClient";

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const ebGaramondBold = EB_Garamond({
  variable: "--font-eb-garamond-bold",
  weight: "700",
  subsets: ["latin"],
});

export const metadata = {
  title: "PM Games — Lasitha E",
  description:
    "Spin for a random PM content prompt across three games — What If, Growth Signal, and Eval This.",
};

export default function PmGamesPage() {
  return (
    <div className={`${dmMono.variable} ${ebGaramondBold.variable}`}>
      <PmGamesClient />
    </div>
  );
}
