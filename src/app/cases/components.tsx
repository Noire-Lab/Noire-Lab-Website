import { logo } from "@/svg";
import { Dialog, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import React, { FC, Fragment, useState } from "react";

export const HeaderCases = () => {
  return (
    <header className="max-w-[1440px] relative h-[302px] md:h-[524px] overflow-hidden mx-auto">
      <Link
        href="/"
        className="hidden md:block absolute z-10 mx-auto left-[calc(50%-90px)] top-[40px]"
      >
        {logo}
      </Link>

      <img
        loading="eager"
        className="absolute top-0 md:top-[-100px] w-full object-cover"
        src="/bg1.webp"
        alt="background"
      />
      <div className="absolute w-full bottom-0 mt-auto z-10 mx-auto flex flex-col">
        <h1 className="text-center text-[21px] md:text-[40px] font-bold md:leading-[50px]">
          Immerse yourself in creative and <br /> innovative web solutions.
        </h1>

        <div className="my-[10px] w-full px-[16px] relative flex items-center justify-center gap-[20px] h-[38px]">
          <div className="min-w-[calc(50%-39px)] h-[1px] bg-[#6C6C6C]"></div>

          <div className="w-[40px] h-[40px]">
            <svg
              width="38"
              height="38"
              viewBox="0 0 39 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="37"
                height="37"
                rx="18.5"
                stroke="#6C6C6C"
              />
              <path
                d="M18.6464 24.3536C18.8417 24.5488 19.1583 24.5488 19.3536 24.3536L22.5355 21.1716C22.7308 20.9763 22.7308 20.6597 22.5355 20.4645C22.3403 20.2692 22.0237 20.2692 21.8284 20.4645L19 23.2929L16.1716 20.4645C15.9763 20.2692 15.6597 20.2692 15.4645 20.4645C15.2692 20.6597 15.2692 20.9763 15.4645 21.1716L18.6464 24.3536ZM18.5 14L18.5 24L19.5 24L19.5 14L18.5 14Z"
                fill="#6C6C6C"
              />
            </svg>
          </div>

          <div className="min-w-[calc(50%-39px)] h-[1px] bg-[#6C6C6C]"></div>
        </div>
      </div>
    </header>
  );
};
