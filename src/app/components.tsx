import Link from "next/link";
import { NotNull } from "yup";
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
    "flex items-center justify-center rounded-[63px] px-[40px] leading-[20px]";

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

export const Footer = () => {
  return (
    <div className="bg-[#191520] rounded-t-[25px] md:rounded-t-0">
      <footer className="flex flex-col gap-[60px] md:gap-[100px] min-h-[422px] max-w-[1328px] px-[16px] py-[55px] mx-auto mt-auto">
        <div className="flex gap-[30px] text-[16px] md:text-[20px] font-bold mx-auto">
          <Link href="/contact-us">
            <Button
              variant="outline"
              className="h-[60px] leading-3 mb-[-20px]  whitespace-nowrap hover:bg-white hover:text-[#191520] ease-in-out duration-150"
            >
              Contact us
            </Button>
          </Link>

          <Link href="https://t.me/noire_lab_contacts" target="_blank">
            <Button
              variant="outline"
              className="h-[60px] hover:bg-white hover:text-[#191520] ease-in-out duration-150"
            >
              Telegram
            </Button>
          </Link>
        </div>
        <ul className="hidden md:flex flex-wrap justify-center gap-[50px] mx-auto">
          <li className="h-[33.6px]">
            <a
              href="https://www.instagram.com/noire_lab?igsh=MXFvZWE1eHNubXVjaQ%3D%3D&utm_source=qr"
              target="_blank"
            >
              <img
                src="/instagram.svg"
                className="h-[33.6px] hover:opacity-50 duration-300 ease-in-out"
                loading="eager"
                alt="instagram"
              />
            </a>
          </li>
          <li className="h-[33.6px] hover:opacity-50 duration-300 ease-in-out">
            <a href="https://www.behance.net/noirelab" target="_blank">
              <img
                src="/behance.svg"
                className="h-[33.6px]"
                loading="eager"
                alt="behance"
              />
            </a>
          </li>
          <li className="h-[33.6px] hover:opacity-50 duration-300 ease-in-out">
            <a
              href="https://www.linkedin.com/in/noire-lab-73a9b4344/"
              target="_blank"
            >
              <img
                src="/linkedin.svg"
                className="h-[33.6px]"
                loading="eager"
                alt="linkedin"
              />
            </a>
          </li>
          <li className="h-[33.6px] hover:opacity-50 duration-300 ease-in-out">
            <a href="https://dribbble.com/NoireLab" target="_blank">
              <img
                src="/dribble.webp"
                className="h-[33.6px]"
                loading="eager"
                alt="dribble"
              />
            </a>
          </li>
        </ul>
        <div className="md:hidden grid grid-cols-2 place-items-center mx-auto gap-[16px]">
          <a
            href="https://www.instagram.com/noire_lab?igsh=MXFvZWE1eHNubXVjaQ%3D%3D&utm_source=qr"
            target="_blank"
          >
            <img
              src="/instagram.svg"
              className="h-[20px]"
              loading="eager"
              alt="instagram"
            />
          </a>

          <a href="https://www.behance.net/noirelab" target="_blank">
            <img
              src="/behance.svg"
              className="h-[20px]"
              loading="eager"
              alt="behance"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/noire-lab-73a9b4344/"
            target="_blank"
          >
            <img
              src="/linkedin.svg"
              className="h-[20px]"
              loading="eager"
              alt="linkedin"
            />
          </a>
          <a href="https://dribbble.com/NoireLab" target="_blank">
            <img
              src="/dribble.webp"
              className="h-[20px]"
              loading="eager"
              alt="dribble"
            />
          </a>
        </div>
        <div className="flex flex-wrap gap-[24px] md:justify-between justify-center items-center text-[16px] leading-[16px] font-light">
          <div className="flex gap-[46px] whitespace-nowrap">
            <p>Privacy Policy</p> <p>Terms of Service</p> <p>FAQ</p>
          </div>

          <div className="">
            <p>©2024 Noire Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const Slot: FC<{
  header?: React.ReactNode;
  descriptionList: React.ReactNode[];
  color: NotNull<React.CSSProperties["color"]>;
}> = (props) => {
  console.log(props.color);
  return (
    <div
      style={{
        backgroundColor: props.color,
        borderColor: props.color,
        borderWidth: "5px",
      }}
      className={`hover:bg-[transparent!important] duration-300 ease-in-out p-[32px] md:px-[40px] md:py-[60px] rounded-[30px] flex flex-col gap-[20px] md:gap-[40px]`}
    >
      {props?.header && props.header}
      <ul className="text-[16px] md:text-[24px] leading-[25px] flex flex-col gap-[12px] md:gap-[38px]">
        {props.descriptionList.map((title, index) => {
          return (
            <li key={index} className="flex items-center gap-[15px]">
              <div className="w-[13px] h-[13px]">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6.5" r="6" fill="white" />
                </svg>
              </div>

              <p>{title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const SlotTools: FC<{
  header?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  color: string;
}> = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.color,
        borderColor: props.color,
        borderWidth: "5px",
      }}
      className={`hover:bg-[transparent!important] duration-300 ease-in-out p-[32px] md:px-[40px] md:py-[60px] rounded-[30px] flex flex-col gap-[20px] md:gap-[40px]`}
    >
      <div className="max-h-[102px] w-full flex items-center md:items-baseline justify-self-start md:text-center md:justify-center">
        {props?.header && <p className="mr-[12px]">{props.header}</p>}
        <p className="flex justify-start ml-[-26px] md:m-0">
          <h3 className="text-[36px] sm:text-[50px] scale-x-[0.8] md:scale-100 leading-9 sm:leading-[50px] uppercase font-bold">
            {props.title}
          </h3>
        </p>
      </div>
      <p className="text-[16px] md:text-[24px] leading-[19.2px] md:leading-[25px] font-normal md:max-w-[272px] md:mx-auto">
        {props.description}
      </p>
    </div>
  );
};
