"use client";
import { Button } from "@/components/Button";
import {
  bag,
  behance,
  burgerMenu,
  close,
  dribble,
  house,
  instagram,
  linkedin,
  phone,
} from "@/svg";
import { clsx } from "clsx/lite";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useMemo, useState } from "react";

export const NavigationCases = () => {
  const path = usePathname();

  const isActive = (match: string, currentPath = path) => {
    return currentPath.includes(match);
  };

  const isBetting = useMemo(() => isActive("betting", path), [path]);
  const isGambling = useMemo(() => isActive("gambling", path), [path]);
  const isLanding = useMemo(() => isActive("landing", path), [path]);
  const isGames = useMemo(() => isActive("games", path), [path]);
  const isProduct = useMemo(() => isActive("product", path), [path]);

  return (
    <section className="mx-auto w-full md:w-max flex flex-col gap-[21px] md:gap-[30px]">
      <div className="max-w-[320px] md:max-w-max mx-auto flex flex-wrap justify-center md:justify-normal gap-[8px] md:gap-[12px] font-bold text-[14px] md:text-[24px]">
        <Link href="/cases/landing-betting">
          <Button
            variant="outline"
            className={`h-[41px] md:h-[53px] px-[36px] border-[#855CFF!important] border-[2px!important] ${
              isLanding ? " bg-[#855CFF] border-[#855CFF!important]" : ""
            }`}
            aria-label="Landings | Sites"
          >
            Landings | Sites
          </Button>
        </Link>

        <Link href="/cases/games">
          <Button
            variant="outline"
            className={`h-[41px] md:h-[53px] px-[36px] border-[#855CFF!important] border-[2px!important] ${
              isGames ? " bg-[#855CFF] border-[#855CFF!important]" : ""
            }`}
            aria-label="Games"
          >
            Games
          </Button>
        </Link>

        <Link href="/cases/products-betting">
          <Button
            variant="outline"
            className={`h-[41px] md:h-[53px] px-[36px] border-[#855CFF!important] border-[2px!important] ${
              isProduct ? " bg-[#855CFF] border-[#855CFF!important]" : ""
            }`}
            aria-label="Products"
          >
            Products
          </Button>
        </Link>
      </div>

      {!isGames && (
        <div className="flex gap-[18px] justify-center text-[14px] md:text-[20px]">
          <Link
            href={path.split("-")[0] + "-gambling"}
            className={`flex flex-col gap-[12px] ${
              isGambling ? "" : "text-[#6C6C6C]"
            }`}
          >
            <span
              className={`${
                isGambling ? "decoration-purple" : "decoration-[#6C6C6C]"
              } underline underline-offset-[16px]`}
            >
              Gambling
            </span>
          </Link>
          <Link
            href={path.split("-")[0] + "-betting"}
            className={`flex flex-col gap-[12px] ${
              isBetting ? "" : "text-[#6C6C6C]"
            }`}
          >
            <span
              className={`${
                isBetting ? "decoration-purple" : "decoration-[#6C6C6C]"
              } underline underline-offset-[16px]`}
            >
              Betting
            </span>
          </Link>
        </div>
      )}
    </section>
  );
};

export const Navigation = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (match: string, currentPath = path) => {
    return currentPath.includes(match);
  };

  const isHome = useMemo(() => "/" === path, [path]);
  const isContacts = useMemo(() => isActive("contact-us", path), [path]);
  const isProjects = useMemo(() => isActive("cases", path), [path]);

  return (
    <Fragment>
      <nav className="bg-white hidden md:flex rounded-[500px] h-[48px] w-[426px] py-[4px] px-[4px] text-[#0E0C12] text-[21px] font-[500] fixed z-50 bottom-10 left-1/2 -translate-x-1/2 justify-around items-center gap-x-1 ">
        <Link
          href="/"
          className={`flex items-center gap-[8px] px-[16px] rounded-[500px] h-full ${
            isHome ? "bg-[#0E0C12]" : ""
          }`}
        >
          {house(isHome ? "#A863FF" : undefined)}
          <span className={isHome ? "text-white" : ""}>Home</span>
        </Link>
        <Link
          href="/cases/landing-betting"
          className={`flex items-center gap-[8px] px-[16px] rounded-[500px] h-full ${
            isProjects ? "bg-[#0E0C12]" : ""
          }`}
        >
          {bag(isProjects ? "#A863FF" : undefined)}
          <span className={isProjects ? "text-white" : ""}>Projects</span>
        </Link>
        <Link
          href="/contact-us"
          className={`flex items-center gap-[8px] px-[16px] rounded-[500px] h-full ${
            isContacts ? "bg-[#0E0C12]" : ""
          }`}
        >
          {phone(isContacts ? "#A863FF" : undefined)}
          <span className={isContacts ? "text-white" : ""}>Contacts</span>
        </Link>
      </nav>

      <div
        className={clsx(
          open ? "bottom-0" : "bottom-3",
          "block md:hidden py-[4px] px-[4px] fixed z-50 left-1/2 -translate-x-1/2"
        )}
      >
        <nav
          className={clsx(
            open ? "hidden" : "flex",
            "bg-white rounded-[500px] w-[169px] h-[48px] px-[24px] py-[4px] cursor-pointer"
          )}
        >
          <div
            onClick={() => setOpen((o) => !o)}
            className={`flex items-center justify-between gap-[12px] h-full bg-white text-[#0E0C12] text-[21px] font-[500]`}
          >
            <div className="flex gap-[10px] items-center">
              <div>{house()}</div>
              <p>Menu</p>
            </div>
            <div>{burgerMenu()}</div>
          </div>
        </nav>

        <nav
          className={clsx(
            open ? "flex flex-col gap-[12px]" : "hidden",
            "p-[12px] bg-[#0E0C12] w-[365px] rounded-[31px]"
          )}
        >
          <div className="py-[18px] px-[24px] flex flex-col gap-[24px] text-[16px] font-[500]">
            <div className="flex flex-col gap-[16px]">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-[10px] h-[16px]"
              >
                <div>{house("#A863FF")}</div>
                <p>Home</p>
              </Link>
              <Link
                href="/cases/landing-betting"
                onClick={() => setOpen(false)}
                className="flex items-center gap-[10px] h-[16px]"
              >
                <div>{bag("#A863FF")}</div>
                <p>Projects</p>
              </Link>
            </div>
            <hr className="border-t border-[#FFFFFF26] w-full" />
            <div>
              <div className="flex flex-col gap-[8px] justify-start">
                <div className="w-[81px] h-[16px]">{instagram}</div>
                <div className="w-[73px] h-[16px]">{behance}</div>
                <div className="w-[66px] h-[16px]">{dribble}</div>
                <div className="w-[73px] h-[16px]">{linkedin}</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[12px] font-[500] text-[21px]">
            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="bg-[#A863FF] rounded-[500px] flex items-center justify-center h-[48px]"
            >
              <p>Contact us</p>
            </Link>
            <div
              onClick={() => setOpen(false)}
              className="flex bg-white rounded-[500px] items-center justify-between px-[24px] h-[48px] cursor-pointer"
            >
              <div className="flex items-center gap-[10px]">
                <div>{house()}</div>
                <p className="text-[#191520]">Menu</p>
              </div>
              <div>{close}</div>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};
