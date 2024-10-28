"use client";
import { Button } from "@/components/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const NavigationCases = () => {
  const path = usePathname();

  const isActive = (currentPath: string, match: string) => {
    return currentPath.includes(match);
  };

  const isBetting = useMemo(() => isActive(path, "betting"), [path]);
  const isGambling = useMemo(() => isActive(path, "gambling"), [path]);
  const isLanding = useMemo(() => isActive(path, "landing"), [path]);
  const isGames = useMemo(() => isActive(path, "games"), [path]);
  const isProduct = useMemo(() => isActive(path, "product"), [path]);

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
