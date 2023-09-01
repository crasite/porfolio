import React from "react";
import Button from "../general/Button";
import FloatingTextinput from "../general/FloatingTextinput";

export default function RegisterPage() {
  return (
    <div className="min-w-screen bg-background text-text flex min-h-screen justify-center">
      <div className="bg-background-200 m-3 mt-10 flex h-full w-screen flex-col rounded-md py-5 shadow backdrop-blur md:h-[80vh] md:w-[60vw]">
        <div className="flex flex-col items-center px-10">
          <h2 className="text-6xl font-semibold ">Register</h2>
          <FloatingTextinput
            placeholder="Email"
            floatOff
            className="mt-10 w-full"
            labelBg="bg-white"
            id="email"
          />
          <FloatingTextinput
            type="password"
            floatOff
            placeholder="Password"
            className="mt-6 w-full"
            labelBg="bg-white"
            id="password"
          />
          <div className="mt-6 w-full gap-2 md:flex">
            <FloatingTextinput
              placeholder="First Name"
              floatOff
              className="flex-1"
              labelBg="bg-white"
              id="first-name"
            />
            <FloatingTextinput
              placeholder="Last Name"
              floatOff
              className="flex-1"
              labelBg="bg-white"
              id="last-name"
            />
          </div>
          <Button intent="success" className="mt-3">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
