import Categories from '@/components/helpCenter/Categories';
import LandingContainer from '@/components/landingPage/landingContainer';
import LandingFooter from '@/components/landingPage/landingFooter';
import LandingHeader from '@/components/landingPage/landingHeader';
import AuthLayout from '@/components/layout/AuthLayout'
import { useTheme } from 'next-themes';
import React from 'react'

export default function HelpCenter() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  setTheme("system");
  return (
    <AuthLayout>
        <LandingHeader />
        <Categories/>
        <LandingFooter/>
    </AuthLayout>
  )
}
