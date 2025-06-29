import "./globals.css";
import ActiveSectionContextProvider from "@/app/context/active-section-context";
import Footer from "@/components/footer";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Emran Hossain Portfolio",
  description:
    "Emran is a full-stack developer and a Designer with 8 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D2ZF2LF7V8"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D2ZF2LF7V8');
          `}
        </Script>
      </head>
      <body
        className="bg-[#FAF9F6] w-full overflow-x-hidden text-gray-950 relative font-sans dark:text-opacity-90"
        style={{ fontFamily: '"Helvetica Neue,"' }}
      >
        <Theme>
          {/* Responsive Background Blob 1 */}
          <div className="bg-[#ffebcf] absolute top-[-6rem] -z-10 right-[2rem] h-[20rem] w-[20rem] rounded-full blur-[6rem] sm:w-[40rem] sm:h-[40rem] sm:right-[11rem] md:w-[50rem] md:h-[50rem] lg:w-[60rem] lg:h-[60rem] xl:w-[70rem] xl:h-[70rem]]"></div>

          {/* Responsive Background Blob 2 */}
          <div className="bg-[#f6faf7] absolute top-[1rem] -z-10 left-[-10rem] h-[20rem] w-[30rem] rounded-full blur-[6rem] sm:w-[40rem] sm:h-[40rem] sm:left-[-20rem] md:w-[50rem] md:h-[50rem] md:left-[-33rem] lg:w-[60rem] lg:h-[60rem] lg:left-[-28rem] xl:w-[70rem] xl:h-[70rem] xl:left-[-15rem] 2xl:w-[80rem] 2xl:h-[80rem] 2xl:left-[-5rem]"></div>

          <ActiveSectionContextProvider>
            {children}

            <SpeedInsights />

            <Footer />
          </ActiveSectionContextProvider>
        </Theme>
      </body>
    </html>
  );
}
