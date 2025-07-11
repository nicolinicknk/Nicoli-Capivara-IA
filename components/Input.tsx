"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  id?: string;
  label?: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  state?: "default" | "error";
  disabled?: boolean;
  className?: string;
  title?: string;
}

const Input = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  state = "default",
  disabled = false,
  className = "",
  title,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";

  return (
    <div className="relative w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={isPasswordField && showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        title={title}
        className={`w-full px-4 py-3 pr-10 rounded-md border outline-none transition-all
          text-black dark:text-white
          ${state === "error" ? "border-red-500" : "border-gray-300 dark:border-gray-600"}
          ${disabled ? "bg-gray-100 dark:bg-gray-700 cursor-not-allowed" : "bg-white dark:bg-gray-800"}
          ${className}
        `}
      />

    
    </div>
  );
};

export default Input;
