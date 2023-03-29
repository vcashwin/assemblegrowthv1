import React from "react";

export const Testimonials = () => {
  return (
    <div className="font-sans bg-lightblue w-full flex flex-col items-center gap-10 py-24 px-4">
      <h1 className="font-heading text-2xl md:text-3xl max-w-2xl">
        {'"So good that you don\'t wanna miss out"'}
      </h1>
      <h2 className="text-xl max-w-2xl text-center">
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt luctus, nisl nisl aliquam lorem, nec ultricies nisl nisl vel lorem."
        }
      </h2>
      <section className="bg-white flex flex-col items-center gap-4 p-8">
        <QuotationSvg />
        <h1 className="font-heading text-xl text-center">
          {"It's like having a team of avengers be there for your online needs"}
        </h1>
        <p>- Stewzera</p>
      </section>
      <div>
        <h1 className="font-heading text-xl">{"Completely Asynchronous"}</h1>
        <h2 className="text-lg">
          {
            "We believe in the utmost value of time. Meetings can usually be solved by an email or a well written question. Hence, we've gotten rid of them."
          }
        </h2>
      </div>
    </div>
  );
};

const QuotationSvg = () => {
  return (
    <svg
      width="35"
      height="30"
      viewBox="0 0 35 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-customorange"
    >
      <path
        d="M22.3838 27.6777C23.5264 28.9961 25.3721 29.6992 27.4814 29.6992C31.6123 29.6992 34.249 26.9746 34.249 22.7559C34.249 18.625 31.5244 15.6367 27.6572 15.6367C26.8662 15.6367 25.9873 15.8125 25.1084 16.0762C24.5811 9.48438 27.833 4.03516 32.2275 2.36523L31.7881 0.871094C24.2295 3.77148 19.4834 11.1543 19.4834 19.8555C19.4834 22.668 20.5381 25.7441 22.3838 27.6777ZM0.499023 19.8555C0.499023 24.6895 3.22363 29.6992 8.49707 29.6992C12.54 29.6992 15.1768 26.9746 15.1768 22.7559C15.1768 18.625 12.4521 15.6367 8.67285 15.6367C7.88184 15.6367 7.00293 15.8125 6.12402 16.0762C5.59668 9.48438 8.84863 4.03516 13.2432 2.36523L12.7158 0.871094C5.24512 3.77148 0.499023 11.1543 0.499023 19.8555Z"
        fill="#EA552B"
      />
    </svg>
  );
};
