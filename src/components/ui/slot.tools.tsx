import { FC } from "react";

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
        {props?.header && <div className="mr-[12px]">{props.header}</div>}
        <div className="flex justify-start ml-[-26px] md:m-0">
          <h3 className="text-[36px] sm:text-[50px] scale-x-[0.8] md:scale-100 leading-9 sm:leading-[50px] uppercase font-bold">
            {props.title}
          </h3>
        </div>
      </div>
      <p className="text-[16px] md:text-[24px] leading-[19.2px] md:leading-[25px] font-normal md:max-w-[272px] md:mx-auto">
        {props.description}
      </p>
    </div>
  );
};
