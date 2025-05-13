import { Outfit, Ovo, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { personalData } from "@/assets/assets";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

const notoSerifKR = Noto_Serif_KR({
  weight: ['400', '700'],
  subsets: ['korean'], 
  display: 'swap',
});


export const metadata = {
  title: personalData.name + " Portfolio",
  description: personalData.introduction,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} ${notoSerifKR.className} antialiased leading-8 overflow-x-hidden
        dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
