import { PastCompanies } from "@/sections/past-companies";
import { Testimonials } from "@/sections/testimonials";
import { Button } from "@/ui/Button";
import { Tag } from "@/ui/Tag";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Assemble Growth</title>
        <meta name="description" content="Next-Gen Web Development Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex min-h-full flex-col items-center overflow-hidden font-heading gap-16">
        <div className="absolute inset-0 bg-[url(../assets/images/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="pt-8 text-lg">AssembleGrowth</div>
        <h1 className="flex gap-2 justify-center text-xl font-bold lg:tracking-wide xl:text-2xl max-w-2xl text-center">
          <div data-text="Coming">
            <span className="animate-gradient-1 bg-gradient-to-r from-red-500 to-orange-500  bg-clip-text text-transparent">
              Coming
            </span>
          </div>

          <div data-text="Soon...">
            <span className="animate-gradient-1 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Soon...
            </span>
          </div>
        </h1>
        <div className="sm:max-w-auto relative flex flex-col gap-10 px-10 py-20 sm:mx-auto sm:rounded-lg sm:px-20 bg-lightorange">
          <h1 className="text-5xl font-bold lg:tracking-tight xl:text-7xl max-w-2xl text-center">
            The Next-Gen web development agency
          </h1>
          <h1 className="font-sans text-xl lg:tracking-wider xl:text-xl max-w-2xl text-center">
            A single subscription to 10x your business.
          </h1>
        </div>
        {/* <section className="flex justify-center w-full">
          <PastCompanies />
        </section>
        <section className="flex justify-center w-full">
          <Testimonials />
        </section> */}
      </div>
    </>
  );
}
