import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  variant: "filled" | "outline";
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  variant = "filled",
  ...props
}) => {
  const baseStyles: ButtonProps["className"] =
    "flex items-center justify-center rounded-[63px] px-[40px] leading-[20px] cursor-pointer";

  const variantStyles = (
    type: ButtonProps["variant"]
  ): ButtonProps["className"] => {
    switch (type) {
      case "filled":
        return "bg-[#855CFF] text-white";
      case "outline":
        return "border-[3px] border-solid border-white text-white";
    }
  };

  const combinedClassName: ButtonProps["className"] = `${baseStyles} ${variantStyles(
    variant
  )} ${props.className}`;

  delete props.className;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
