import React from "react";
import Textinput from "../general/Input";
import FloatingInput from "../general/FloatingTextinput";
import Button from "../general/Button";

export default function LoginPage() {
  return (
    <div className="min-w-screen bg-background text-text flex min-h-screen justify-center">
      <div className="bg-background-200 m-3 mt-10 flex h-full w-screen flex-col rounded-md pt-5 shadow backdrop-blur md:h-[80vh] md:w-[30vw]">
        <form className="flex flex-col items-center px-10">
          <h2 className="text-6xl font-semibold ">Login</h2>
          <FloatingInput
            placeholder="Email"
            floatOff
            className="mt-8 w-full"
            labelBg="bg-white"
          />
          <FloatingInput
            placeholder="Password"
            type="password"
            floatOff
            className="mt-8 w-full"
            labelBg="bg-white"
          />
          {/* <Textinput */}
          {/*   placeholder="Password" */}
          {/*   type="password" */}
          {/*   className="mt-3 w-full" */}
          {/* /> */}
          <Button text="Login" intent="success" className="mt-3" />
          <input type="submit" className="hidden" />
        </form>
        <div className="flex-1"></div>
        <div className="bg-background/40 w-full p-5 text-center text-sm font-thin">
          Not a member?{" "}
          <a
            href="/register"
            className="text-accent-600 dark:text-accent-400 font-semibold underline"
          >
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
}
