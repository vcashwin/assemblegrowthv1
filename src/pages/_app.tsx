import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const grifter = localFont({
  src: "../assets/fonts/grifterbold.otf",
  variable: "--font-grifter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`${grifter.variable} ${jakarta.variable}`}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  );
}
