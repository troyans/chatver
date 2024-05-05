import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import LandingLayout from "@/components/landingPage/landingLayout";
import Script from "next/script";
import SEO from "@/components/additional/seo";
import { ThemeProvider } from "next-themes";
import GoogleAnalytics from "@/components/additional/googleAnalytics";
import { AppProps } from "next/app";
import { Session } from "next-auth";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <>
      <GoogleAnalytics />
      <SEO />
      <SessionProvider session={session}>
        <ThemeProvider attribute="class">
          <LandingLayout>
            <Component {...pageProps} />
          </LandingLayout>
        </ThemeProvider>
      </SessionProvider>
      <Script src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" />
      {/* <script type="text/javascript">(function($) {(window as any).fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script> */}
    </>
  );
}
