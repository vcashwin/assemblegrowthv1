import Head from "next/head";
import Image from "next/image";
import bkgImage from "../assets/images/beams.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Assemble Growth</title>
        <meta name="description" content="Next-Gen Web Development Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 font-sans">
        <Image
          src={bkgImage}
          alt="background"
          className="absolute top-1/2 left-1/2 -z-10 max-w-none -translate-x-1/2 -translate-y-1/2"
          width="2000"
          height="2000"
        />
        <div className="absolute inset-0 bg-[url(../assets/images/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="sm:max-w-auto relative px-10 pt-24 pb-24 sm:mx-auto sm:rounded-lg sm:px-20">
          <div className="mx-auto">
            <h1 className="flex flex-col gap-2 text-6xl font-bold md:flex-row lg:tracking-tight xl:text-8xl">
              <span
                className="before:absolute before:-z-10 before:text-black before:content-[attr(data-text)]"
                data-text="Coming"
              >
                <span className="animate-gradient-1 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Coming
                </span>
              </span>

              <span
                className="before:absolute before:-z-10 before:text-black before:content-[attr(data-text)]"
                data-text="soon..."
              >
                <span className="animate-gradient-2 bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
                  soon...
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
