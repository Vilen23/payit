"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ children, className,onClick }: ButtonProps) => {
  return <button  type="button" className={`${className?className:"bg-blue-500 font-bold px-2 py-3 text-white rounded-xl"}`} onClick={onClick}>{children}</button>;
};
