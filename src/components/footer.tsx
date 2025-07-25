import { Button } from "@/components";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-[#191520] rounded-t-[25px] md:rounded-t-0">
      <footer className="flex flex-col gap-[60px] md:gap-[100px] min-h-[422px] max-w-[1328px] px-[16px] py-[55px] mx-auto mt-auto">
        <div className="flex gap-[30px] text-[16px] md:text-[20px] font-bold mx-auto">
          <Link href="/contact-us">
            <Button
              variant="outline"
              className="h-[60px] leading-3 mb-[-20px]  whitespace-nowrap hover:bg-white hover:text-[#191520] ease-in-out duration-150"
            >
              Contact us
            </Button>
          </Link>

          <Link href="https://t.me/noire_lab_igaming" target="_blank">
            <Button
              variant="outline"
              className="h-[60px] hover:bg-white hover:text-[#191520] ease-in-out duration-150"
            >
              Telegram
            </Button>
          </Link>
        </div>
        <ul className="hidden md:flex flex-wrap justify-center gap-[50px] mx-auto">
          <li className="h-[33.6px]">
            <a
              href="https://www.instagram.com/noire_lab_world?igsh=MXc1ejE2YmY4Z2RkYg%3D%3D&utm_source=qr"
              target="_blank"
            >
              <img
                src="/svg/instagram.svg"
                className="h-[33.6px] hover:opacity-50 duration-300 ease-in-out"
                loading="eager"
                alt="instagram"
              />
            </a>
          </li>
          <li className="h-[33.6px] hover:opacity-50 duration-300 ease-in-out">
            <a href="https://www.behance.net/noirelab" target="_blank">
              <img
                src="/svg/behance.svg"
                className="h-[33.6px]"
                loading="eager"
                alt="behance"
              />
            </a>
          </li>
          <li className="h-[33.6px] hover:opacity-50 duration-300 ease-in-out">
            <a
              href="https://www.linkedin.com/in/noire-lab-73a9b4344/"
              target="_blank"
            >
              <img
                src="/svg/linkedin.svg"
                className="h-[33.6px]"
                loading="eager"
                alt="linkedin"
              />
            </a>
          </li>
          <li className="h-[33.6px] hover:opacity-50 duration-300 ease-in-out">
            <a href="https://dribbble.com/NoireLab" target="_blank">
              <img
                src="/images/dribble.webp"
                className="h-[33.6px]"
                loading="eager"
                alt="dribble"
              />
            </a>
          </li>
        </ul>
        <div className="md:hidden grid grid-cols-2 place-items-center mx-auto gap-[16px]">
          <a
            href="https://www.instagram.com/noire_lab_world?igsh=MXc1ejE2YmY4Z2RkYg%3D%3D&utm_source=qr"
            target="_blank"
          >
            <img
              src="/instagram.svg"
              className="h-[20px]"
              loading="eager"
              alt="instagram"
            />
          </a>

          <a href="https://www.behance.net/noirelab" target="_blank">
            <img
              src="/svg/behance.svg"
              className="h-[20px]"
              loading="eager"
              alt="behance"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/noire-lab-73a9b4344/"
            target="_blank"
          >
            <img
              src="/svg/linkedin.svg"
              className="h-[20px]"
              loading="eager"
              alt="linkedin"
            />
          </a>
          <a href="https://dribbble.com/NoireLab" target="_blank">
            <img
              src="/images/dribble.webp"
              className="h-[20px]"
              loading="eager"
              alt="dribble"
            />
          </a>
        </div>
        <div className="flex flex-wrap gap-[24px] md:justify-between justify-center items-center text-[16px] leading-[16px] font-light">
          <div className="flex gap-[46px] whitespace-nowrap">
            <p>Privacy Policy</p> <p>Terms of Service</p> <p>FAQ</p>
          </div>

          <div className="">
            <p>©2024 Noire Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
