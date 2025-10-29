import {
  Button,
  IntersectionObserverWrapper,
  NavigationProducts,
  PageHeader,
  Product2Item,
} from '@/components';
import clsx from 'clsx';
import Link from 'next/link';
import { Fragment } from 'react';

const list = [
  {
    path: '/images/products/betting/1.png',
  },
  {
    path: '/images/products/betting/2.png',
  },
  {
    path: '/images/products/betting/3.png',
  },
  {
    path: '/images/products/betting/4.png',
  },
  {
    path: '/images/products/betting/5.png',
  },
  {
    path: '/images/products/betting/6.png',
  },
  {
    path: '/images/products/betting/7.png',
  },
  {
    path: '/images/products/betting/8.png',
  },
];

export default function Page() {
  return (
    <Fragment>
      <IntersectionObserverWrapper />
      <PageHeader
        title="betting products"
        imagePath="/images/cases/betting-products.webp"
        imagePathMobile="/images/cases/betting-products.mobile.webp"
      />

      <div className="flex flex-col py-[35px] md:py-[70px]">
        <NavigationProducts />

        <section className="px-[16px] pt-[30px] md:pt-[40px]">
          <p className="mb-5 text-center text-[20px] md:mb-8 md:text-[24px]">
            Static
          </p>
          {/* Desktop version */}
          <div className="mx-auto grid max-w-[1128px] grid-cols-13 gap-1.5 max-md:hidden md:grid md:gap-4">
            {list.slice(0, 6).map((props, index) => {
              const rowIndex = Math.floor(index / 2);
              const isOddRow = rowIndex % 2 === 1;
              const isLeft = index % 2 === 0;
              const heightClass =
                rowIndex === 2 ? 'md:h-[262px]' : 'md:h-[400px]';

              return (
                <Product2Item
                  link={props.path}
                  key={index}
                  className={clsx(
                    heightClass,
                    isLeft
                      ? isOddRow
                        ? 'md:col-span-5'
                        : 'md:col-span-8'
                      : isOddRow
                        ? 'md:col-span-8'
                        : 'md:col-span-5',
                  )}
                />
              );
            })}
          </div>

          <div className="mx-auto mt-1.5 flex justify-center gap-1.5 max-md:hidden max-md:w-full max-md:flex-col md:mt-4 md:max-w-[816px] md:gap-4">
            <Product2Item link={list[6].path} />
            <Product2Item link={list[7].path} />
          </div>

          {/* Mobile version */}
          <div className="mx-auto grid gap-1.5 md:hidden">
            {[
              list[4],
              list[6],
              list[3],
              list[2],
              list[7],
              list[5],
              list[1],
              list[0],
            ].map((props, index) => (
              <Product2Item link={props.path} key={index} />
            ))}
          </div>
        </section>

        <Link href="/contact-us" className="mx-auto mt-[40px] w-max">
          <Button
            type="button"
            variant="filled"
            className="h-[41px] text-[16px] font-bold hover:bg-[#563AA7] md:h-[56px] md:text-[20px]"
            aria-label="Make an order"
            title="Make an order"
          >
            Make an order
          </Button>
        </Link>
      </div>
    </Fragment>
  );
}
