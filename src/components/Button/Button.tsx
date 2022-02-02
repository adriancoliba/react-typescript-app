import React from "react";
import { cls } from "../utils/helpers";

const classes = {
    base: "focus:outline-none transition ease-in-out duration-300",
    disabled: "opacity-50 cursor-not-allowed",
    pill: "rounded-full",
    size: {
        small: "px-2 py-1 text-sm rounded",
        normal: "px-4 py-2 rounded-md",
        large: "px-8 py-3 text-lg rounded-lg"
    },
    variant: {
        primary: "bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white",
        secondary: "bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white",
        danger: "bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white"
    }
}

interface Props {
    children: React.ReactNode;
    onClick: () => void;
    variant?: string
    size?: string,
    pill?: string,
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<Props> = ({
    children,
    onClick,
    variant = "primary",
    size = "normal",
    pill = "",
    disabled = false,
    className = "",
    ...rest
  }) => {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={cls(`
                ${classes.base}
                ${classes.size[size as keyof typeof classes.size]}
                ${classes.variant[variant as keyof typeof classes.variant]}
                ${pill && classes.pill}
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