import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const baseClasses =
    "font-semibold cursor-pointer transition-all duration-200 rounded-full text-sm h-12";

  const sizeClasses = {
    small: "px-3 py-1 text-sm w-40",
    medium: "px-4 py-2 text-base w-56",
    large: "px-6 py-3 text-lg w-72",
  };

  const variantClasses = {
    primary: "bg-secondary-500 text-white hover:bg-secondary-600",
    secondary: "bg-gray-500 text-white hover:bg-primary-600",
    outline:
      "border border-primary-300 text-secondary-500 hover:border-secondary-500 hover:text-secondary-400",
  };

  const classes =
    `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
