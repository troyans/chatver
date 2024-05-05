import { useTheme } from "next-themes";

import LandingHeader from "@/components/landingPage/landingHeader";
import LandingFeature from "@/components/landingPage/landingFeature";
import LandingHowTo from "@/components/landingPage/landingHowTo";
import LandingHero from "@/components/landingPage/landingHero";
import LandingFooter from "@/components/landingPage/landingFooter";
import LandingCta from "@/components/landingPage/landingCta";
import AuthLayout from "@/components/layout/AuthLayout";
import LandingTestimonials from "@/components/landingPage/landingTestimonials";
import LandingFaq from "@/components/landingPage/landingFaq";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  setTheme("system");

  return (
    <AuthLayout>
      <LandingHeader />

      <LandingHero />

      <section className="logos"></section>

      <LandingFeature />

      <section className="transformation"></section>

      <LandingHowTo />

      <LandingTestimonials />

      <LandingFaq />

      <LandingCta />

      <LandingFooter />
    </AuthLayout>
  );
}
