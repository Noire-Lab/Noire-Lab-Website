import { Button } from '@/components';
import { PlanItem } from '@/components/item.plan';
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
      <h2 className="mt-[35px] text-center text-2xl font-bold md:mt-[70px] md:text-[40px]">
        CHOOSE YOUR PLAN
      </h2>

      <ul className="mx-auto mt-[35px] mb-[70px] grid max-w-[1232px] grid-cols-1 justify-center gap-x-6 gap-y-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        <li className="h-[822px] max-h-[822px] w-full max-w-[394px] min-w-[360px] overflow-hidden rounded-[36px] bg-gradient-to-r from-[#B89EFF] to-[#855CFF] p-[1px]">
          <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[36px]">
            <div className="z-10 flex h-full flex-col p-6">
              <p className="font-gotham-xnarrow text-[40px] leading-12 font-bold text-[#CBA2FF]">
                NOIRE START
              </p>
              <p className="mt-2 text-[18px] leading-3 text-[#9990AB]">
                Static graphics
              </p>
              <div className="my-4 h-[1px] min-h-[1px] w-full bg-[#302840]"></div>
              <p className="text-2xl leading-6 font-medium text-[#9990AB] line-through">
                $1800
              </p>
              <p className="my-4">
                <span className="text-[60px] leading-10 font-bold">$1499</span>{' '}
                <span className="text-[16px] text-[#9990AB] lowercase">
                  /MONTH
                </span>
              </p>
              <p className="text-2xl leading-4 font-medium text-[#CBA2FF] uppercase">
                Save over 15%!
              </p>

              <div className="my-6 h-[1px] min-h-[1px] w-full bg-[#302840]"></div>

              <p className="text-[18px] leading-3.5 font-medium">
                What’s inside?
              </p>

              <ul className="flex flex-col gap-1 p-4 text-white">
                {featuresStart.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-[6px] w-[6px] bg-[#9990AB]"></div>
                      <span className="text-[14px] leading-2.5 text-[#9990AB]">
                        {item.label}
                      </span>
                    </div>
                    <span className="text-[14px] text-[#9990AB]">
                      {item.count}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex justify-between">
                <Button
                  variant="filled"
                  className="h-14 px-11 py-4 text-xl font-bold"
                >
                  Get
                </Button>

                <div className="flex items-center justify-center gap-2 pr-3">
                  <span className="leading-0 text-[#9990AB]">Learn more</span>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.52504 11.5846L10.4609 7.0013L5.52504 2.41797"
                      stroke="#9990AB"
                      strokeWidth="1.375"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/*  */}

            <svg
              className="absolute inset-0 min-h-full object-cover"
              width="393"
              height="822"
              viewBox="0 0 393 822"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="393" height="822" fill="#191520" fillOpacity="0.5" />
              <rect
                width="393"
                height="822"
                fill="url(#paint0_linear_8113_12212)"
              />
              <rect
                width="393"
                height="822"
                fill="url(#paint1_radial_8113_12212)"
                fillOpacity="0.25"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_8113_12212"
                  x1="196.5"
                  y1="0"
                  x2="196.5"
                  y2="822"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1F1A28" />
                  <stop offset="1" stopColor="#14111A" />
                </linearGradient>
                <radialGradient
                  id="paint1_radial_8113_12212"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(196.5 760.203) rotate(90) scale(204.519 438.292)"
                >
                  <stop stopColor="#CBA2FF" />
                  <stop offset="1" stopColor="#CBA2FF" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>

            {/*  */}
          </div>
        </li>

        <PlanItem
          title={<div className="text-[#7C51FF]">NOIRE PRO</div>}
          savingTitle={<div className="text-[#7C51FF]">Save over 20%!</div>}
          fullPrice={3400}
          price={2799}
          description="Static graphics & motion design"
          learnMoreLink=""
          list={featuresPro}
          background={noirePro()}
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
          learnMoreLink=""
          list={featuresMax}
          background={noireMax()}
        />
      </ul>
    </div>
  );
}
