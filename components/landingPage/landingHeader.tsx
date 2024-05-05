// @ts-nocheck

import React, { useState, useEffect } from "react";
import LandingContainer from "./landingContainer";
import { useSession } from "next-auth/react";
import Button from "../elements/button";
import CustomLink from "../elements/customLink";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function LandingHeader() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const userEmail = session?.user?.email;

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setIsAuthenticated(true);
    }
  }, [status]);

  const handleCloseMenu = () => {
    document.getElementById("toggle_nav").checked = false;
  };

  return (
    <>
      <header className="hidden">
        <nav className="z-10 w-full absolute">
          <LandingContainer>
            <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
              <input
                aria-hidden="true"
                type="checkbox"
                name="toggle_nav"
                id="toggle_nav"
                className="hidden peer"
              />
              <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                <a
                  href="/"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                  onClick={handleCloseMenu}
                >
                  <div aria-hidden="true" className="flex space-x-1"></div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    NextJs - Boilercode
                  </span>
                </a>

                <div className="relative flex items-center lg:hidden max-h-10">
                  <label
                    role="button"
                    htmlFor="toggle_nav"
                    aria-label="humburger"
                    id="hamburger"
                    className="relative  p-6 -mr-6"
                  >
                    <div
                      aria-hidden="true"
                      id="line"
                      className="m-auto h-0.5 w-5 rounded bg-gray-300 transition duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-300 transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="fixed z-10 inset-0 h-screen w-screen backdrop-blur-2xl origin-bottom 
              scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 
              lg:hidden bg-gray-900/70"
              ></div>
              <div
                className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                            dark:shadow-none"
              >
                <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                  {isAuthenticated ? (
                    <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                      <li>
                        <CustomLink link="#" text={userEmail} />
                      </li>
                    </ul>
                  ) : (
                    <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                      <li>
                        <CustomLink link="#" text="Link 1" />
                      </li>
                      <li>
                        <CustomLink link="#" text="Link 2" />
                      </li>
                      <li>
                        <CustomLink link="#" text="Link 3" />
                      </li>
                      <li>
                        <CustomLink link="#" text="Link 4" />
                      </li>
                    </ul>
                  )}
                </div>

                <>
                  <div className="flex justify-end">
                    {isAuthenticated ? (
                      <>
                        <div className="mt-12 lg:mt-0">
                          <Button link="/dashboard" text="Go to Dashboard" />
                        </div>
                        <div className="mt-12 lg:mt-0 ml-2">
                          <Button
                            onClickEvent={async () => {
                              await signOut();
                              router.push("/");
                            }}
                            text="Sign Out"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="mt-12 lg:mt-0">
                          <Button link="/api/auth/signin" text="Login" />
                        </div>
                        <div className="mt-12 lg:mt-0 ml-2">
                          <Button link="/api/auth/signin" text="Get Started" />
                        </div>
                      </>
                    )}
                  </div>
                </>
              </div>
            </div>
          </LandingContainer>
        </nav>
      </header>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 mb-10">
        <div className="max-w-screen-xl flex flex-row flex-wrap items-center justify-between mx-auto p-3">
          <a href="/" className="flex items-center  rtl:space-x-reverse">
            <img src="img/chatver.png" className="h-8" alt="" />
            <span className="self-center text-xl font-extrabold whitespace-nowrap dark:text-white">
              Chatver
            </span>
          </a>

          <div className="flex ml-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex flex-row gap-x-2">
              {isAuthenticated ? (
                <div
                  className="text-sm bg-indigo-950 text-white px-3 py-3 rounded-2xl font-semibold hover:bg-violet-800"
                  onClick={async () => {
                    await signOut();
                  }}
                >
                  Sign Out
                </div>
              ) : (
                <a
                  className="text-sm bg-indigo-950 text-white px-3 py-3 rounded-2xl font-semibold hover:bg-violet-800"
                  href="/api/auth/signin"
                  rel="noopener noreferrer"
                >
                  Request Access
                </a>
              )}
            </div>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 px-10 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="#features"
                  className="text-gray-700 hover:bg-indigo-950 hover:text-white rounded-md px-3 py-2 text-base font-bold"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-700 hover:bg-indigo-950 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-indigo-950 hover:text-white rounded-md px-3 py-2 text-base font-medium"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
