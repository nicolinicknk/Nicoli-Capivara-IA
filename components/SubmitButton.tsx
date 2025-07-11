"use client";

import { FC, ReactNode } from "react";

export interface SubmitButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({
  children,
  className = "",
  disabled = false,
}) => (
  <button
    type="submit"
    disabled={disabled}
    className={`
      w-full px-4 py-3 rounded-md font-semibold text-black dark:text-white
      bg-primary-purple hover:bg-secondary-purple
      transition-all duration-300 ease-in-out
      disabled:opacity-50 disabled:cursor-not-allowed
      ${className}
    `}
  >
    {children}
  </button>
);

export default SubmitButton;
