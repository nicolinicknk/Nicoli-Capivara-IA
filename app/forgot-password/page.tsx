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
    className={`w-full px-4 py-3 rounded-md font-medium bg-primary-purple hover:bg-secondary-purple transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default SubmitButton;
