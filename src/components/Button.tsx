// Button: Reusable button component with variants and sizes
import React from "react";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-500 shadow-lg shadow-blue-500/20 dark:shadow-blue-500/20",
  outline:
    "border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 active:bg-slate-200 focus-visible:ring-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:border-slate-600 dark:active:bg-slate-700",
  ghost:
    "text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200 focus-visible:ring-slate-400 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:active:bg-slate-700",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "primary", size = "md", className = "", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

    const variantStyles = variants[variant] ?? variants.primary;
    const sizeStyles = sizes[size] ?? sizes.md;

    return (
      <button
        ref={ref}
        className={`${base} ${variantStyles} ${sizeStyles} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
