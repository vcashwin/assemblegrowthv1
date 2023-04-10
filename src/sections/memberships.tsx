import { Button } from "@/ui/Button";
import React from "react";

export const Memberships = () => {
  return (
    <div className="font-sans bg-lightorange w-full flex flex-col items-center gap-10 py-24 px-4">
      <h1 className="font-heading text-3xl md:text-5xl max-w-2xl text-center">
        {"Membership Levels"}
      </h1>
      <h2 className="font-sans text-xl md:text-2xl max-w-2xl tracking-wide text-center">
        {"Choose a plan that fits your business needs."}
      </h2>
      <div className="max-w-5xl">
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          {plans.map((plan, index) => (
            <MembershipPlan key={index} {...plan} />
          ))}
        </div>
        <div className="bg-black text-white flex flex-col gap-4 items-center w-full mt-6 md:mt-0 border-t-2 border-lightorange py-4 rounded-lg md:rounded-t-none">
          <h1 className="font-heading text-lg md:text-2xl text-yellow">
            {"What's included?"}
          </h1>
          <ul>
            <li className="">Unlimited Requests</li>
            <li className="">Unlimited Add-ons</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const plans = [
  {
    title: "Monthly",
    description: "Pause or cancel anytime.",
    priceInDollars: "299",
    handleClick: () => {},
  },
  {
    title: "Yearly",
    description: "Save $1,200 with this plan",
    priceInDollars: "199",
    handleClick: () => {},
  },
];

type MembershipProps = {
  title: string;
  description: string;
  priceInDollars: string;
  handleClick: () => void;
};

const MembershipPlan = (props: MembershipProps) => {
  return (
    <div className="flex flex-col p-10 bg-white gap-6 border-lightorange border w-full rounded-lg md:rounded-b-none">
      <h1 className="font-heading text-3xl md:text-4xl">{props.title}</h1>
      <h3 className="font-sans text-base md:text-lg">{props.description}</h3>
      <p className="font-heading text-2xl md:text-3xl mt-10">
        $ {props.priceInDollars}/m
      </p>
      <p className="text-gray-500 text-xs md:text-sm -mt-6 mb-6">
        Paid {props.title.toLowerCase()}
      </p>
      <Button text="Get started" onClick={props.handleClick} />
    </div>
  );
};
