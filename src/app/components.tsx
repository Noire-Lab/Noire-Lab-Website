import { Button } from "@/components/Button";
import { behance, behanceSmall, dribble, dribbleSmall, instagram, instagramSmall, linkedin, linkedinSmall } from "@/svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-[#191520] rounded-t-[25px] md:rounded-t-0">
      <footer className="flex flex-col gap-[60px] md:gap-[100px] min-h-[422px] max-w-[1328px] px-[16px] py-[55px] mx-auto mt-auto">
        <div className="flex gap-[30px] text-[16px] md:text-[20px] font-bold mx-auto">
          <Link href="/contact-us">
            <Button
              variant="outline"
              className="h-[60px] leading-3 mb-[-20px] whitespace-nowrap"
            >
              Contact us
            </Button>
          </Link>

          <Link href="https://t.me/noire_lab_contacts" target="_blank">
            <Button variant="outline" className="h-[60px]">
              Telegram
            </Button>
          </Link>
        </div>
        <div className="hidden md:flex flex-wrap justify-center gap-[50px] mx-auto">
          {instagram}

          {behance}

          {linkedin}

          {dribble}
        </div>
        <div className="md:hidden grid grid-cols-2 place-items-center mx-auto gap-[16px]">
         {instagramSmall}
         {behanceSmall}
         {linkedinSmall}
         {dribbleSmall}
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
