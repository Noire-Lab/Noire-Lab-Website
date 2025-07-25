'use client';
import { Button } from '@/components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export const NavigationProducts = () => {
  const path = usePathname();

  const isActive = (match: string, currentPath = path) => {
    return currentPath.includes(match);
  };

  const isBetting = useMemo(() => isActive('betting', path), [path]);
  const isGambling = useMemo(() => isActive('gambling', path), [path]);
  const isLanding = useMemo(() => isActive('landing', path), [path]);
  const isGames = useMemo(() => isActive('games', path), [path]);
  const isProduct = useMemo(() => isActive('product', path), [path]);

  return (
    <section className="mx-auto flex w-full flex-col gap-[21px] md:w-max md:gap-[30px]">
      <div className="mx-auto flex max-w-[320px] flex-wrap justify-center gap-[8px] text-[14px] font-bold md:max-w-max md:justify-normal md:gap-[12px] md:text-[24px]">
        <Link href="/cases/landing-betting">
          <Button
            variant="outline"
            className={`h-[41px] border-2 border-purple px-[36px] hover:bg-purple-500 hover:opacity-20 md:h-[53px] ${
              isLanding ? 'border-purple bg-purple' : ''
            }`}
            aria-label="Landings | Sites"
          >
            Landings | Sites
          </Button>
        </Link>

        <Link href="/cases/games">
          <Button
            disabled
            variant="outline"
            className={`h-[41px] border-2 border-[#2F293C!important] px-[36px] text-[#2F293C] hover:cursor-not-allowed hover:bg-[#855CFF33] md:h-[53px] ${
              isGames ? 'border-[#855CFF!important] bg-[#2F293C]' : ''
            }`}
            aria-label="Games"
          >
            Games
          </Button>
        </Link>

        <Link href="/cases/products-betting">
          <Button
            variant="outline"
            className={`h-[41px] border-2 border-[#855CFF!important] px-[36px] hover:bg-[#855CFF33] md:h-[53px] ${
              isProduct ? 'border-[#855CFF!important] bg-[#855CFF]' : ''
            }`}
            aria-label="Products"
          >
            Products
          </Button>
        </Link>
      </div>

      {!isGames && (
        <div className="flex justify-center gap-[18px] text-[14px] md:text-[20px]">
          <Link
            href={path.split('-')[0] + '-gambling'}
            className={`group flex flex-col gap-[12px] duration-150 ease-in-out hover:text-white ${
              isGambling ? '' : 'text-[#6C6C6C]'
            }`}
          >
            <span
              className={`${
                isGambling ? 'decoration-purple' : 'decoration-[#6C6C6C]'
              } underline underline-offset-16 group-hover:decoration-[#855CFF80]`}
            >
              Gambling
            </span>
          </Link>
          <Link
            href={path.split('-')[0] + '-betting'}
            className={`group flex flex-col gap-[12px] duration-150 ease-in-out hover:text-white ${
              isBetting ? '' : 'text-[#6C6C6C]'
            }`}
          >
            <span
              className={`${
                isBetting ? 'decoration-purple' : 'decoration-[#6C6C6C]'
              } underline underline-offset-16 group-hover:decoration-[#855CFF80]`}
            >
              Betting
            </span>
          </Link>
        </div>
      )}
    </section>
  );
};
