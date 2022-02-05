import React from "react";
import { cls } from "../utils/helpers";

const classes = {
    base: "focus:outline-none transition ease-in-out duration-300",
    disabled: "opacity-50 cursor-not-allowed",
    pill: "rounded-full",
    size: {
        small: "px-2 py-1 text-sm rounded",
        medium: "px-4 py-2 text-base rounded-md",
        large: "px-8 py-3 text-lg rounded-lg"
    },
    variant: {
        primary: "bg-blue-500 hover:bg-blue-800 text-white focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
        secondary: "bg-gray-200 hover:bg-gray-500 text-gray-900 hover:text-white focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50",
        danger: "bg-red-500 hover:bg-red-800 text-white focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
    },
}

interface Props {
    children: React.ReactNode,
    type?: "submit" | "button" | "reset",
    onClick: () => void,
    variant?: "primary" | "secondary" | "danger",
    size?: "small" | "medium" | "large",
    pill?: boolean,
    disabled?: boolean,
    className?: string,
}

const Button: React.FC<Props> = ({
    children,
    type = "button",
    onClick,
    variant = "primary",
    size = "medium",
    pill = false,
    disabled = false,
    className = "",
    ...rest
  }) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={cls(`
                ${classes.base}
                ${pill && classes.pill}
                ${classes.size[size as keyof typeof classes.size]}
                ${classes.variant[variant as keyof typeof classes.variant]}
                ${disabled && classes.disabled}
                ${className}
            `)}
            {...rest}
        >
            {children}
        </button>
    )
};

export default Button;