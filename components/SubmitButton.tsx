"use client";

import { FC, ReactNode } from "react";

export interface SubmitButtonProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({ children, className = "", disabled = false }) => (
  <button
    type="submit"
    className={`btn-primary w-full ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default SubmitButton;
