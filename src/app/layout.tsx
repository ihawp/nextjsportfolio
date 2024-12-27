import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faSquareParking, faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare, faSquareFontAwesomeStroke } from "@fortawesome/free-brands-svg-icons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warren Chemerika | ihawp.com",
  description: "Transform your digital presence with Warren Chemerika (ihawp) a skilled web developer dedicated to crafting stunning, user-friendly websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <div className="animated-gradient h-screen flex items-center justify-center">
        <div className={"h-svh w-screen overflow-y-auto overflow-x-hidden flex items-start justify-center"}>
          <div className={"text-white text-lg w-full p-4 max-w-3xl flex flex-col"}>
            <header className={"font-bold flex bg-[#999] mb-4 bg-opacity-10 rounded py-1 px-1.5 sm:pr-2 sm:pl-4"}>
              <div className={"items-center sm:flex hidden"}>
                <h2 className={"text-xl spongeboymebob mt-1 text-green-600"}><Link href={"/"}>ihawp.com</Link>
                </h2>
              </div>
              <nav className={"flex sm:gap-5 h-[40px] w-full justify-end items-center gap-3 sm:gap-0 text-center"}>
                <Link href={"https://www.linkedin.com/in/warren-chemerika-628b15275"} title="LinkedIn: Warren Chemerika"
                      target={"_blank"}
                      className={"sm:flex-grow-0 flex-grow"}>LinkedIn</Link>
                <Link href={"https://github.com/ihawp"} target={"_blank"}
                      title={"GitHub: ihawp"}
                      className={"sm:flex-grow-0 flex-grow"}>GitHub</Link>
                <Link href={"mailto:ihawp@ihawp.com"} title="Email: ihawp@ihawp.com"
                      className={"sm:flex-grow-0 flex-grow bg-green-700 py-1 px-3 rounded"}>Contact</Link>
              </nav>
            </header>
            {children}
            <footer
                className={"flex text-lg sm:pt-4 sm:pb-0 py-16 flex-col-reverse sm:flex-row sm:justify-start items-center text-[#999] text-opacity-40"}>
              <div
                  className={"sm:w-[300px] w-full sm:text-xl text-lg flex justify-center mt-7 sm:mt-0 sm:justify-start"}>
                <p className={"spongeboymebob"}><Link
                    href={"/"}>&copy; ihawp.com {new Date().getFullYear()}</Link></p>
              </div>
              <div
                  className={"flex flex-auto flex-wrap sm:justify-end w-full sm:gap-3 gap-4 sm:text-3xl text-5xl justify-center"}>
                <a href={"https://www.github.com/ihawp"} title={"Github"} target={"_blank"}><FontAwesomeIcon
                    icon={faGithubSquare} className={"flex-grow"}></FontAwesomeIcon></a>
                <a href={"mailto:ihawp@ihawp.com"} title={"Email: ihawp@ihawp.com"}><FontAwesomeIcon
                    icon={faEnvelopeSquare}
                /></a>
                <a href={"https://www.linkedin.com/in/warren-chemerika-628b15275"} title={"LinkedIn"}
                   target={"_blank"}>
                  <FontAwesomeIcon icon={faLinkedin}/></a>
                <a href={"/Front-EndWebDevCertificateWarrenChemerika.pdf"}
                   title={"Certificate of Front-End Web Development from Saskatchewan Polytechnic"}
                   target={"_blank"}><FontAwesomeIcon icon={faSquareCheck}
                /></a>
                <Link href={'/privacy'} title={"Privacy Policy"}><FontAwesomeIcon
                    icon={faSquareParking}
                /></Link>
                <a href={"https://fontawesome.com/"} title={"Provider of Icons: Font Awesome v6"}
                   target={"_blank"}><FontAwesomeIcon icon={faSquareFontAwesomeStroke}
                /></a>
              </div>
            </footer>
          </div>
        </div>
      </div>
      </body>
      </html>
  );
}
