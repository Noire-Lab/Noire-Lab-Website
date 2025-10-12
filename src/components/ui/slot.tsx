import { FC } from "react";
import { NotNull } from "yup";

export const Slot: FC<{
  header?: React.ReactNode;
  descriptionList: React.ReactNode[];
  color: NotNull<React.CSSProperties["color"]>;
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
