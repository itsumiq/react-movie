import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const buttonVariants = cva("flex items-center text-[14px] font-medium", {
  variants: {
    variant: {
      base: "",
    },
    w: {
      none: "",
      full: "w-full justify-center",
    },
    h: {
      none: "",
      base: "h-9",
    },
    tint: {
      none: "",
      brand: "bg-brand",
    },
    textTint: {
      white: "text-neutral-50",
    },
    rounded: {
      base: "rounded-[0.25rem]",
      md: "rounded-[0.5rem]",
    },
  },
  defaultVariants: {
    variant: "base",
    w: "none",
    h: "none",
    tint: "none",
    textTint: "white",
    rounded: "base",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {}

export const Button = ({
  variant,
  w,
  h,
  tint,
  textTint,
  rounded,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={buttonVariants({ variant, w, h, tint, textTint, className, rounded })}
      {...props}
    >
    </button>
  );
};
