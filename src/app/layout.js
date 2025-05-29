import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
})

export const metadata = {
  icons: {
    icon: "/coding.png"
  },
  title: "Lazy's portfolio",
  description: "This is portfolio website of a developer called Rupesh Vaghmare aka lazy ",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`
          ${sora.className}
          transition-colors 
          duration-500
        `}
      >
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
