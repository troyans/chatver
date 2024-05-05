import LandingContainer from "./landingContainer";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import ProductHunt from "../elements/productHunt";
import Button from "../elements/button";
import CustomDialog from "../elements/customDialog";

export default function LandingHero() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const words = ["NextJs", "AI"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentTyping, setCurrentTyping] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      setIsAuthenticated(true);
    }
  }, [status]);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentTyping(words[currentWordIndex].substr(0, charIndex + 1));
      setCharIndex(charIndex + 1);

      if (charIndex >= words[currentWordIndex].length) {
        setCharIndex(0);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, [currentWordIndex, charIndex, words]);

  return (
    <>
      <section
        id="hero"
        className="hero md:max-w-3xl flex flex-col gap-y-12 mx-auto text-center mt-20 pt-20 md:pt-40 px-1"
      >
        <div className="flex flex-col gap-y-5 items-center justify-center">
          <div className="flex flex-col gap-y-5 ">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-none ">
              AI Chatbot To Reduce Customer Service's Repetitive Work
            </h1>

            <p className="text-xl">
              Available 24/7 for customer, boost team productivity, and elevate
              customer satisfaction
            </p>
          </div>

          <div className="socialproof flex flex-col justify-center gap-y-3 hidden">
            <div className="flex items-center justify-center">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="img/avatar-1.jpeg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="img/avatar-2.jpeg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="img/avatar-3.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="img/avatar-4.png" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center text-left items-center px-4 gap-y-3">
              <div className="flex flex-row items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>

              <div className="flex items-center justify-center text-center">
                <p className="text-sm md:text-base">
                  249+ Customer Support Use Chatver
                </p>
              </div>
            </div>
          </div>

          <div className="ctahero flex flex-row items-center gap-x-2">
            <a
              className="text-lg bg-indigo-950 text-white px-4 py-3 rounded-2xl font-semibold hover:bg-violet-800"
              href="#cta"
              rel="noopener noreferrer"
            >
              Request Access
            </a>
          </div>

          {/* <div className="p-4">
                  <img src="img/productshowcase.webp" alt="" srcSet="" class="w-auto">
              </div> */}
        </div>
      </section>
      <div className="relative hidden" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <LandingContainer>
          <div className="relative pt-32 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <ProductHunt />
              <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                SaaS Boilerplate with <br />
                {/* <span className="text-primary">{currentTyping}</span> */}
                <span className="text-primary">NextJs & AI</span>
              </h1>
              <p className="mt-8 text-gray-700 dark:text-gray-300 text-lg">
                Ship your <span className="text-primary font-bold">SaaS</span>{" "}
                product with NextJs super fast.
                <br /> Just change the config file
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-y-4 gap-x-4">
                <>
                  <Button
                    link="/blog/nextjs-boilerplate"
                    text="View Guide Documentation"
                  />
                  <div onClick={() => setShowDialog(true)}>
                    <Button link="#" text="Show Dialog" type="primary" />
                  </div>
                  <Button
                    link={isAuthenticated ? "/dashboard" : "/api/auth/signin"}
                    text="Get Started"
                    type="primary"
                  />
                </>
              </div>
              <div className="py-8 mt-16 border-y border-gray-800 sm:flex flex-col sm:flex-row justify-between items-center">
                <div className="text-center flex-1 mb-4 sm:mb-0">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Lorem ipsum
                  </h6>
                  <p className="mt-2 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
                <div className="text-center flex-1 mb-4 sm:mb-0">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Lorem ipsum
                  </h6>
                  <p className="mt-2 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
                <div className="text-center flex-1">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Lorem ipsum
                  </h6>
                  <p className="mt-2 text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </LandingContainer>
      </div>
      <CustomDialog
        isOpen={showDialog}
        closeModal={() => setShowDialog(false)}
      />
    </>
  );
}
