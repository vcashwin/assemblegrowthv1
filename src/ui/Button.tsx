import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
}

export const Button = ({
  onClick,
  text,
  className: customClass,
}: ButtonProps) => {
  const className = `font-heading text-white text-center text-lg bg-black p-6 px-20 w-full tracking-wider rounded-xl shadow hover:-translate-y-2 transform duration-200 ease-in ${customClass}`;
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};
