import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "text-[14px] placeholder:text-neutral-700 text-neutral-50 px-[0.5rem] rounded-[0.5rem] appearance-none outline-none",
  {
    variants: {
      variant: {
        outline: "bg-transparent border",
      },
      w: {
        none: "",
        base: "w-[16.25rem]",
      },
      h: {
        none: "",
        base: "h-[2.5rem]",
      },
      tint: {
        none: "",
        outline: "border-neutral-50",
      },
    },
    defaultVariants: {
      variant: "outline",
      w: "base",
      h: "base",
      tint: "none",
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> { }

export const Input = ({ variant, w, h, tint, className, type, ...props }: InputProps) => {
  return (
    <input type={type} className={inputVariants({ className, variant, w, h, tint })} {...props} />
  );
};
