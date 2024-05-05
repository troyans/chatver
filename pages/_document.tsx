import CustomerSupport from "@/components/additional/customerSupport";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <CustomerSupport />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.10.1/dist/full.min.css"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=plus-jakarta-sans@200,300,500,501,600,700,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="min-h-screen font-['Plus_Jakarta_Sans'] scroll-smooth focus:scroll-auto">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
