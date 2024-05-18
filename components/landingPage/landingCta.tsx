import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { Base } from "@/types/base";

export default function LandingCta() {
  const { data: session, status } = useSession();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [res, setRes] = useState<Base | null>();
  const inputRef = useRef(null);

  const userEmail = session?.user?.email;

  const subscribeUser = async (e) => {
    e.preventDefault();

    // ReactTagManager.action({
    //   event: "click_all_button",
    //   clickText: "Request Access",
    // });

    try {
      const res = await fetch("/api/user/subscribeUser", {
        body: JSON.stringify({
          email: inputRef.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      setRes(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      setIsAuthenticated(true);
    }
  }, [status]);

  return (
    <section
      id="cta"
      className="cta max-w-7xl mx-auto items-center mt-10 p-7 gap-y-20"
    >
      <div className="relative py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-white to-blue-800 "></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-white to-blue-400 "></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative">
            <div className="flex items-center justify-center -space-x-2">
              <img
                loading="lazy"
                width="400"
                height="400"
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="member photo"
                className="h-8 w-8 rounded-full object-cover"
              />
              <img
                loading="lazy"
                width="200"
                height="200"
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="member photo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <img
                loading="lazy"
                width="200"
                height="200"
                src="https://randomuser.me/api/portraits/women/60.jpg"
                alt="member photo"
                className="z-10 h-16 w-16 rounded-full object-cover"
              />
              <img
                loading="lazy"
                width="200"
                height="200"
                src="https://randomuser.me/api/portraits/women/4.jpg"
                alt="member photo"
                className="relative h-12 w-12 rounded-full object-cover"
              />
              <img
                loading="lazy"
                width="200"
                height="200"
                src="https://randomuser.me/api/portraits/women/34.jpg"
                alt="member photo"
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>

            <div className="mt-6 m-auto space-y-6 md:w-9/12">
              <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
                Ready to Automate Customer Support Job?
              </h1>
              <p className="flex text-center text-xl text-gray-600 dark:text-gray-300 ">
                Be part of people around the world using Deskbox to reduce
                repetitive customer support job
              </p>
              <div className="flex flex-wrap justify-center gap-6 w-full">
                <div>
                  <div id="mc_embed_shell" className="min-w-full m-0">
                    <div
                      id="mc_embed_signup2"
                      className="bg-indigo-800 px-10 py-10 rounded-xl w-full text-white"
                    >
                      <form onSubmit={subscribeUser}>
                        <div className="mc-field-group flex flex-col md:flex-row gap-x-5 gap-y-5 w-full">
                          <input
                            placeholder="Email"
                            name="EMAIL"
                            className="required email bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl w-full px-3 py-3"
                            id="mce-EMAIL"
                            required={true}
                            type="email"
                            ref={inputRef}
                          />
                          <input
                            type="submit"
                            name="subscribe"
                            id="mc-embedded-subscribe"
                            className="button text-sm outline outline-style:solid text-white px-10 py-3 rounded-2xl font-semibold cursor-pointer "
                            value="Request Access"
                          />
                        </div>
                        {res && (
                          <div className="text-center text-xs mt-2">
                            {!res.success && (
                              <div className="response text-danger">
                                {res.message}
                              </div>
                            )}
                            {res.success && (
                              <div className="response text-success">
                                {res.message}
                              </div>
                            )}
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
