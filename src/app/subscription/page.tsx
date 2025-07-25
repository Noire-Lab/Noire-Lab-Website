import { PlanItem } from '@/components';
import { noireMax, noirePro, noireStart } from '@/svg';

const featuresStart = [
  { label: 'Static creative', count: 40 },
  { label: 'Static resize', count: 20 },
  { label: 'Static geo/offer adaptation', count: 30 },
  { label: 'Static uniqueization', count: 10 },
];

const featuresPro = [
  { label: 'Video (1 lvl)', count: 20 },
  { label: 'Video (2 lvl)', count: 8 },
  { label: 'Video (3 lvl)', count: 3 },
  { label: 'Video geo adaptation', count: 10 },
  { label: 'Video game adaptation', count: 8 },
  { label: 'Video uniqueization', count: 8 },
  { label: 'Video resize', count: 20 },
  { label: 'Static creative', count: 20 },
  { label: 'Static resize', count: 10 },
  { label: 'Static geo/offer adaptation', count: 15 },
  { label: 'Static uniqueization', count: 8 },
];

const featuresMax = [
  { label: 'Video (1 lvl)', count: 20 },
  { label: 'Video (2 lvl)', count: 15 },
  { label: 'Video (3 lvl)', count: 6 },
  { label: 'Video geo adaptation', count: 15 },
  { label: 'Video game adaptation', count: 15 },
  { label: 'Video uniqueization', count: 10 },
  { label: 'Video resize', count: 20 },
  { label: 'Static creative', count: 25 },
  { label: 'Static resize', count: 15 },
  { label: 'Static geo/offer adaptation', count: 15 },
  { label: 'Promo-landing', count: 4 },
  { label: 'Promo-landing game adaptation', count: 4 },
  { label: 'Promo-landing geo adaptation', count: 4 },
  { label: 'Promo-landing developing', count: 4 },
];

export default function Page() {
  return (
    <div>
      <div className="relative">
        <picture>
          <source
            srcSet="/images/subscription.mobile.png"
            media="(max-width: 768px)"
            type="image/png"
          />
          <source
            srcSet="/images/subscription.png"
            media="(min-width: 769px)"
            type="image/png"
          />
          <img
            className="max-h-[295px] w-full object-cover md:max-h-[486px]"
            src="/images/subscription.mobile.png"
            loading="eager"
            alt="subscription"
          />
        </picture>
        <h2 className="absolute inset-x-0 bottom-[62px] mx-auto text-center text-xl md:leading-[50px] font-bold uppercase md:text-[40px]">
          Subscriptions <br className="md:hidden" /> for complex services
        </h2>
        <div className="absolute right-0 bottom-[35px] left-0 mx-auto flex max-w-[1296px] items-center gap-5">
          <div className="min-h-[1px] w-full bg-[#8578AC]"></div>
          <svg
            className="shrink-0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="11.5"
              stroke="#8578AC"
            />
            <path
              d="M11.7525 15.4056C11.8892 15.5422 12.1108 15.5422 12.2475 15.4056L14.4749 13.1782C14.6116 13.0415 14.6116 12.8199 14.4749 12.6832C14.3382 12.5465 14.1166 12.5465 13.9799 12.6832L12 14.6631L10.0201 12.6832C9.88342 12.5465 9.66181 12.5465 9.52513 12.6832C9.38844 12.8199 9.38844 13.0415 9.52513 13.1782L11.7525 15.4056ZM12 8.84229L11.65 8.84229L11.65 15.1581L12 15.1581L12.35 15.1581L12.35 8.84229L12 8.84229Z"
              fill="#8578AC"
            />
          </svg>

          <div className="min-h-[1px] w-full bg-[#8578AC]"></div>
        </div>
      </div>

      <div>
        <h2 className="mt-[35px] text-center text-2xl font-bold md:mt-[70px] md:text-[40px]">
          CHOOSE YOUR PLAN
        </h2>

        <ul className="mx-auto mt-[35px] mb-[70px] grid max-w-[1232px] grid-cols-1 justify-center gap-x-6 gap-y-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
          <PlanItem
            title={<div className="text-[#CBA2FF]">NOIRE START</div>}
            savingTitle={<div className="text-[#CBA2FF]">Save over 15%!</div>}
            fullPrice={1800}
            price={1499}
            description="Static graphics"
            list={featuresStart}
            background={noireStart()}
            learnMoreLink="/subscription/noire-start"
          />

          <PlanItem
            title={<div className="text-[#7C51FF]">NOIRE PRO</div>}
            savingTitle={<div className="text-[#7C51FF]">Save over 20%!</div>}
            fullPrice={3400}
            price={2799}
            description="Static graphics & motion design"
            list={featuresPro}
            background={noirePro()}
            learnMoreLink="/subscription/noire-pro"
            chip={
              <svg
                className="absolute top-[35px] right-0 z-1"
                width="126"
                height="26"
                viewBox="0 0 126 26"
                fill="none"
              >
                <rect width="147" height="26" rx="13" fill="#7C51FF" />
                <path
                  d="M13.386 18V8.2H17.558C18.678 8.2 19.56 8.522 20.12 9.068C20.54 9.502 20.75 10.034 20.75 10.636V10.664C20.75 11.938 19.966 12.596 19.196 12.932C20.358 13.268 21.296 13.968 21.296 15.298V15.326C21.296 17.006 19.882 18 17.74 18H13.386ZM19.63 10.818V10.79C19.63 9.824 18.86 9.194 17.46 9.194H14.478V12.568H17.376C18.72 12.568 19.63 11.98 19.63 10.818ZM20.176 15.256V15.228C20.176 14.164 19.294 13.548 17.572 13.548H14.478V17.006H17.768C19.266 17.006 20.176 16.362 20.176 15.256ZM23.4895 18V8.2H30.5735V9.208H24.5955V12.554H29.9435V13.562H24.5955V16.992H30.6435V18H23.4895ZM36.2284 18.14C34.6604 18.14 33.4004 17.636 32.2244 16.572L32.9104 15.76C33.9324 16.698 34.9124 17.146 36.2704 17.146C37.6004 17.146 38.4544 16.446 38.4544 15.48V15.452C38.4544 14.542 37.9644 14.038 35.9064 13.59C33.6524 13.1 32.6164 12.372 32.6164 10.762V10.734C32.6164 9.208 33.9744 8.06 35.8364 8.06C37.2784 8.06 38.2724 8.466 39.2804 9.264L38.6364 10.118C37.7264 9.376 36.8164 9.054 35.8084 9.054C34.5204 9.054 33.7224 9.74 33.7224 10.636V10.664C33.7224 11.588 34.2124 12.12 36.3824 12.568C38.5664 13.058 39.5744 13.842 39.5744 15.34V15.368C39.5744 17.048 38.1744 18.14 36.2284 18.14ZM44.2211 18V9.222H40.9171V8.2H48.6311V9.222H45.3271V18H44.2211ZM59.3191 18.168C56.4911 18.168 54.4051 15.942 54.4051 13.128V13.1C54.4051 10.328 56.4911 8.032 59.3611 8.032C61.1391 8.032 62.2171 8.648 63.1831 9.586L62.4271 10.398C61.5871 9.614 60.6911 9.054 59.3471 9.054C57.1771 9.054 55.5531 10.818 55.5531 13.072V13.1C55.5531 15.368 57.1771 17.146 59.3471 17.146C60.6911 17.146 61.5731 16.628 62.5111 15.732L63.2391 16.446C62.2311 17.482 61.0831 18.168 59.3191 18.168ZM65.2298 18V8.2H66.3358V12.554H71.9918V8.2H73.0978V18H71.9918V13.59H66.3358V18H65.2298ZM80.4165 18.168C77.4345 18.168 75.4325 15.83 75.4325 13.128V13.1C75.4325 10.398 77.4625 8.032 80.4445 8.032C83.4265 8.032 85.4285 10.37 85.4285 13.072V13.1C85.4285 15.802 83.3985 18.168 80.4165 18.168ZM80.4445 17.146C82.6845 17.146 84.2805 15.354 84.2805 13.128V13.1C84.2805 10.874 82.6565 9.054 80.4165 9.054C78.1765 9.054 76.5805 10.846 76.5805 13.072V13.1C76.5805 15.326 78.2045 17.146 80.4445 17.146ZM87.859 18V8.2H88.965V18H87.859ZM96.3152 18.168C93.4872 18.168 91.4012 15.942 91.4012 13.128V13.1C91.4012 10.328 93.4872 8.032 96.3572 8.032C98.1352 8.032 99.2132 8.648 100.179 9.586L99.4232 10.398C98.5832 9.614 97.6872 9.054 96.3432 9.054C94.1732 9.054 92.5492 10.818 92.5492 13.072V13.1C92.5492 15.368 94.1732 17.146 96.3432 17.146C97.6872 17.146 98.5692 16.628 99.5072 15.732L100.235 16.446C99.2272 17.482 98.0792 18.168 96.3152 18.168ZM102.226 18V8.2H109.31V9.208H103.332V12.554H108.68V13.562H103.332V16.992H109.38V18H102.226ZM111.815 15.228L111.493 8.998V8.2H112.753V8.998L112.417 15.228H111.815ZM111.479 18V16.53H112.767V18H111.479Z"
                  fill="white"
                />
              </svg>
            }
          />

          <PlanItem
            title={<div className="text-[#FC51FF]">NOIRE MAX</div>}
            savingTitle={<div className="text-[#CBA2FF]">Save over 18%!</div>}
            fullPrice={7000}
            price={6399}
            description="Static, motion design, web design"
            list={featuresMax}
            background={noireMax()}
            learnMoreLink="/subscription/noire-max"
          />
        </ul>
      </div>
    </div>
  );
}
