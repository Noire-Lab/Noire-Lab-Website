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
      <h2 className="mt-[70px] text-center text-[40px] font-bold">
        CHOOSE YOUR PLAN
      </h2>

      <ul className="mx-auto mt-6 mb-[70px] grid max-w-[1232px] grid-cols-1 justify-center gap-x-6 gap-y-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
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
