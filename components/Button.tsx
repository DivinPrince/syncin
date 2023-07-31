import clsx from "clsx";
import { BiLoaderAlt } from "react-icons/bi";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `
         button_Auth
         flex
         justify-center
         rounded-md
         text-sm
         font-semibold
      `,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-gray-900" : "text-white",
        !secondary && "bg-gray-500 hover:bg-gray-600  "
      )}
    >
      {disabled ? <BiLoaderAlt className="animate-spin" /> : children}
    </button>
  );
};

export default Button;
