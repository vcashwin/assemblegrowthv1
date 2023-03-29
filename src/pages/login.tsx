import { Button } from "@/ui/Button";
import * as React from "react";

export default function LoginPage() {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const handleSubmit = () => {};
  return (
    <div className="flex flex-col items-center min-h-screen h-full bg-black text-white font-heading">
      <p id="title" className="text-2xl tracking-wider py-10">
        AssembleGrowth
      </p>
      <div id="credentials" className="text-black w-full max-w-lg">
        <section
          id="upper"
          className="flex flex-col gap-10 items-center bg-white p-8 py-10"
        >
          <div className="flex flex-col items-center text-xl md:text-2xl">
            <h1>{"Welcome Back."}</h1>
            <h1>{"Let's sign in."}</h1>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full gap-4 bg-white text-black font-sans"
          >
            <input
              ref={emailRef}
              type="email"
              placeholder="Email address"
              className="outline-none border-black border-2 rounded-xl p-4 focus:border-blue-400"
            ></input>
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="outline-none border-black border-2 rounded-xl p-4 focus:border-blue-400"
            ></input>
            <p className="text-center py-6 font-sans text-xs">
              {"Forgot your password? "}{" "}
              <span className="text-customorange font-bold hover:underline">
                {"Send reset link"}
              </span>
            </p>
            <Button text="Login" onClick={handleSubmit} />
          </form>
        </section>
        <section
          id="lower"
          className="bg-lightblue flex items-center justify-center p-6"
        >
          <h3 className="mx-auto font-sans">
            {"Don't have an account yet? "}
            <span className="text-customorange font-bold hover:underline">
              {"Sign up"}
            </span>
          </h3>
        </section>
      </div>
    </div>
  );
}
