import { SlotTools } from "../components";

export default function Page() {
  return (
    <div>
      <picture>
        <source
          srcSet="/tools-mobile.webp"
          media="(max-width: 768px)"
          type="image/png"
        />
        <source
          srcSet="/tools.webp"
          media="(min-width: 769px)"
          type="image/png"
        />
        <img
          src="/tools.webp"
          loading="eager"
          alt="tools"
        />
      </picture>
      
      <div className="py-[35px] px-[16px] md:py-[70px] mx-auto max-w-[846px] grid grid-cols-1 md:grid-cols-2 gap-y-[16px] md:gap-y-0 md:gap-x-[12px]">
        <SlotTools
          header={
            <div className="md:hidden flex items-center">
              <img
                src="/influencer.webp"
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
            src="/influencer.webp"
            className="scale-[.8] w-full object-contain"
          />
        </div>
        <div className="hidden md:flex items-center">
          <img src="/media.webp" className="scale-[.9] w-full object-cover" />
        </div>

        <SlotTools
          header={
            <div className="md:hidden flex items-center">
              <img
                src="/media.webp"
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

        <SlotTools
          header={
            <div className="md:hidden flex items-center">
              <img
                src="/markets.webp"
                className="min-w-[85px] h-[85px] object-contain"
              />
            </div>
          }
          color="#8A2EFF"
          title="ASO Promotion"
          description="Our team of specialists will analyze the current state and prepare a strategy to promote your applications, as well as help to implement high-quality brand protection in App Store and PlayMarket"
        />

        <div className="hidden md:flex items-center">
          <img src="/markets.webp" className="scale-[.9] w-full object-cover" />
        </div>
        <div className="hidden md:flex items-center">
          <img src="/heart.webp" className="scale-[.6] w-full object-cover" />
        </div>

        <SlotTools
          header={
            <div className="md:hidden flex items-center">
              <img
                src="/heart.webp"
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
