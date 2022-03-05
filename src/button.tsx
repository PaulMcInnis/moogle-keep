import { MouseEventHandler, ReactChild } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: ReactChild | null | false;
  isRed?: boolean;
}

// FIXME popped out button state

export function Button({ onClick, disabled, children, isRed }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={`w-36 xl:w-52 h-14 text-white font-medium text-2xl rounded-2xl bg-black ${
        isRed ? "hover:bg-red-500" : "hover:bg-green-500"
      } border border-black`}
      onClick={onClick}
    >
      {children && <span>{children}</span>}
    </button>
  );
}
