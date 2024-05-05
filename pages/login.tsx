import React, { useEffect, useState } from "react";
// import { validateEmail } from "../../lib/utils";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import AuthLayout from "@/components/layout/AuthLayout";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailInPutError, setEmailInputError] = useState(false);
  const [passwordInPutError, setPasswordInputError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    validate();
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await signIn("credentials", {
      email,
      password,
      callbackUrl: `${process.env.NEXTAUTH_URL}`,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/dashboard");
      return;
    } else {
      // Toast failed
      setError("Failed! Check you input and try again.");
      // return;
      console.log("Failed", res);
    }
    return res;
  };

  const validate = () => {
    // let emailIsValid = validateEmail(email);

    // if (!emailIsValid) {
    //   setEmailInputError(true);
    //   return;
    // }
    if (password.length < 6) {
      setPasswordInputError(true);
    } else {
      setEmailInputError(false);
      setPasswordInputError(false);
    }
  };

  return (
    <AuthLayout>
      <div className="flex h-screen w-screen justify-center items-center overflow-hidden bg-slate-100">
        <div className="flex justify-center items-center m-auto p-3">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`border-${
                  emailInPutError ? "red-500" : ""
                } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="email"
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={` border-${
                  passwordInPutError ? "red-500" : ""
                } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="password"
                type="password"
                placeholder="******************"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p> */}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2  px-4 rounded  focus:outline-none  focus:shadow-outline"
                type="submit"
                disabled={isLoading ? true : false}
              >
                {isLoading ? "Loading..." : "Sign In"}
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 hidden"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
