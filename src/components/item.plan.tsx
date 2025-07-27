import { Button } from '@/components';
import Link from 'next/link';
import React, { FC } from 'react';

export const PlanItem: FC<{
  title: React.ReactNode;
  description: React.ReactNode;
  price: number;
  fullPrice: number;
  savingTitle: React.ReactNode;
  chip?: React.ReactNode;
  background: React.ReactNode;
  list: { count: number; label: React.ReactNode }[];
  learnMoreLink: string;
}> = ({
  title,
  description,
  chip,
  fullPrice,
  price,
  savingTitle,
  list,
  background,
  learnMoreLink,
}) => {
  return (
    <li className="h-[822px] max-h-[822px] w-full max-w-[394px] min-w-[360px] overflow-hidden rounded-[36px] bg-gradient-to-r from-[#B89EFF] to-[#855CFF] p-[1px]">
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[36px]">
        {chip}
        <div className="z-10 flex h-full flex-col p-6">
          <div className="font-gotham-xnarrow text-[40px] leading-12 font-bold text-[#CBA2FF]">
            {title}
          </div>
          <div className="mt-2 text-[18px] leading-3 text-[#9990AB]">
            {description}
          </div>
          <div className="my-4 h-[1px] min-h-[1px] w-full bg-[#302840]"></div>
          <div className="text-2xl leading-6 font-medium text-[#9990AB] line-through">
            ${fullPrice}
          </div>
          <div className="my-4">
            <span className="text-[60px] leading-10 font-bold">${price}</span>{' '}
            <span className="text-[16px] text-[#9990AB] lowercase">/MONTH</span>
          </div>
          <div className="text-2xl leading-4 font-medium text-[#CBA2FF] uppercase">
            {savingTitle}
          </div>

          <div className="my-6 h-[1px] min-h-[1px] w-full bg-[#302840]"></div>

          <div className="text-[18px] leading-3.5 font-medium">
            What’s inside?
          </div>

          <ul className="flex flex-col gap-1 p-4 text-white">
            {list.map((item, index) => (
              <li key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-[6px] w-[6px] bg-[#9990AB]"></div>
                  <span className="text-[14px] leading-2.5 text-[#9990AB]">
                    {item.label}
                  </span>
                </div>
                <span className="text-[14px] text-[#9990AB]">{item.count}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex justify-between">
            <Button
              variant="filled"
              className="h-14 px-11 py-4 text-xl font-bold duration-200 hover:bg-[#563AA7]"
            >
              <a href="https://t.me/noire_lab_igaming" target="_blank">
                Get
              </a>
            </Button>

            <Link
              href={learnMoreLink}
              className="flex items-center justify-center gap-2 pr-3 duration-200 hover:opacity-50"
            >
              <span className="leading-4 text-[#9990AB]">Learn more</span>
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
            </Link>
          </div>
        </div>

        {background}
      </div>
    </li>
  );
};
