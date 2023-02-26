import { Slot } from '@radix-ui/react-slot';

import { classNames } from "../../utils/classNames";

export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  asChild?: boolean;
}

const sizeMap = {
  "sm": "px-3.5 py-2",
  "md": "px-4 py-2",
  "lg": "px-5 py-3",
  "xl": "px-7 py-4"
}

export const Button = ({ asChild, size = "sm", disabled, children, ...nativeProps }: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';



  return (
    <Comp {...nativeProps} className={classNames(
      sizeMap[size] ? sizeMap[size]: "",
      disabled ? "bg-green-300 cursor-default" : "bg-green-500 hover:bg-green-600 active:bg-green-600 focus:outline-none focus:ring focus:ring-green-300",
      // Default
      "gap-2 inline-flex rounded-lg text-white text-sm font-medium items-center justify-center"
    )}>

      {children}
    </Comp>
  )
}