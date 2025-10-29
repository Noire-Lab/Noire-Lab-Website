import { PageHeader, SlotTools } from '@/components';

export default function Page() {
  return (
    <div>
      <PageHeader
        title={<>Tools for Effective Promotion</>}
        imagePath="/images/subscription.webp"
        imagePathMobile="/images/subscription.mobile.webp"
      />

      <div className="mx-auto grid max-w-[846px] grid-cols-1 gap-y-[16px] px-[16px] py-[35px] md:grid-cols-2 md:gap-x-[12px] md:gap-y-0 md:py-[70px]">
        <SlotTools
          header={
            <div className="flex items-center md:hidden">
              <img
                src="/images/influencer.webp"
                className="h-[85px] min-w-[85px] object-contain"
              />
            </div>
          }
          color="#A863FF"
          title="influencer marketing"
          description="Our clients get access to our vast influencer network that spans
            across the globe. We strategically choose influencers that have a
            track record of high quality conversion rates."
        />

        <div className="hidden items-center md:flex">
          <img
            src="/images/influencer.webp"
            className="w-full scale-[.8] object-contain"
          />
        </div>
        <div className="hidden items-center md:flex">
          <img
            src="/images/media.webp"
            className="w-full scale-[.9] object-cover"
          />
        </div>

        <SlotTools
          header={
            <div className="flex items-center md:hidden">
              <img
                src="/images/media.webp"
                className="h-[85px] min-w-[85px] object-contain"
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
            <div className="flex items-center md:hidden">
              <img
                src="/images/markets.webp"
                className="h-[85px] min-w-[85px] object-contain"
              />
            </div>
          }
          color="#8A2EFF"
          title="ASO Promotion"
          description="Our team of specialists will analyze the current state and prepare a strategy to promote your applications, as well as help to implement high-quality brand protection in App Store and PlayMarket"
        />

        <div className="hidden items-center md:flex">
          <img
            src="/images/markets.webp"
            className="w-full scale-[.9] object-cover"
          />
        </div>
        <div className="hidden items-center md:flex">
          <img
            src="/images/heart.webp"
            className="w-full scale-[.6] object-cover"
          />
        </div>

        <SlotTools
          header={
            <div className="flex items-center md:hidden">
              <img
                src="/images/heart.webp"
                className="h-[85px] min-w-[85px] object-contain"
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
