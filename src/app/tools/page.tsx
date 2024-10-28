import React, { FC } from "react";
import { HeaderCases } from "../cases/components";

export const Slot: FC<{
  header?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  color: string;
}> = (props) => {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className={`p-[32px] md:px-[40px] md:py-[60px] rounded-[30px] flex flex-col gap-[20px] md:gap-[40px]`}
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

export default function Page() {
  return (
    <div>
      <HeaderCases />

      <div className="py-[35px] px-[16px] md:py-[70px] mx-auto max-w-[846px] grid grid-cols-1 md:grid-cols-2 gap-y-[16px] md:gap-y-0 md:gap-x-[12px]">
        <Slot
          header={
            <div className="md:hidden flex items-center">
              <img
                src="/influencer.png"
                className="min-w-[85px] h-[85px] object-contain"
              />
            </div>
          }
          color="#A863FF"
          title="influencer marketing"
          description="Our clients get access to our vast influencer network that spans
            across the globe. We strategically choose influencers that have a
            track record of high quality conversion rates."
        />

        <div className="hidden md:flex items-center">
          <img
            src="/influencer.png"
            className="scale-[.8] w-full object-contain"
          />
        </div>
        <div className="hidden md:flex items-center">
          <img src="/media.png" className="scale-[.9] w-full object-cover" />
        </div>

        <Slot
          header={
            <div className="md:hidden flex items-center">
              <img
                src="/media.png"
                className="min-w-[85px] h-[85px] object-contain"
              />
            </div>
          }
          color="#9847FF"
          title="media buying"
          description="We have spent 4 years fine tuning media buying techniques that allow
            our clients to benefit from the high quality user traffic on Google,
            FB, Instagram, Bing and YouTube. We also leverage relationships to
            open exclusive media buying opportunities for our clients."
        />

        <Slot
          header={
            <div className="md:hidden flex items-center">
              <img
                src="/markets.png"
                className="min-w-[85px] h-[85px] object-contain"
              />
            </div>
          }
          color="#8A2EFF"
          title="ASO Promotion"
          description="Our team of specialists will analyze the current state and prepare a strategy to promote your applications, as well as help to implement high-quality brand protection in App Store and PlayMarket"
        />

        <div className="hidden md:flex items-center">
          <img src="/markets.png" className="scale-[.9] w-full object-cover" />
        </div>
        <div className="hidden md:flex items-center">
          <img src="/heart.png" className="scale-[.6] w-full object-cover" />
        </div>

        <Slot
          header={
            <div className="md:hidden flex items-center">
              <img
                src="/heart.png"
                className="min-w-[85px] h-[85px] object-contain"
              />
            </div>
          }
          color="#7D16FF"
          title="Community Building"
          description="Growing an online platform is more efficient and profitable when brands create engaged online communities. We consult with clients to help them structure their community building efforts correctly and maximise the value of their communities."
        />
      </div>
    </div>
  );
}
