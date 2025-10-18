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

const list = Array.from({ length: 8 }, (_, index) => ({
  path: `/images/products/gambling/static/${index + 1}.png`,
}));

const videoList = Array.from({ length: 6 }, (_, index) => ({
  videoPath: `/images/products/gambling/video/${index + 1}.mp4`,
  posterPath: `/images/products/gambling/video/${index + 1}.png`,
}));

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

          <div className="mx-auto grid max-w-[1128px] grid-cols-13 gap-4 max-md:grid-cols-1">
            {list.slice(0, 6).map((props, index) => {
              const rowIndex = Math.floor(index / 2); // each 2 items = 1 row
              const isOddRow = rowIndex % 2 === 1;
              const isLeft = index % 2 === 0;

              const heightClass = 'md:h-[400px]';

              return (
                <Product2Item
                  link={props.path}
                  key={props.path}
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

          <div className="mx-auto mt-4 flex justify-center gap-4 max-md:w-full max-md:flex-col md:max-w-[816px]">
            <Product2Item link={list[6].path} />
            <Product2Item link={list[7].path} />
          </div>

          <p className="mt-5 text-center text-[20px] md:mt-8 md:text-[24px]">
            Video
          </p>

          <div className="mx-auto mt-5 grid grid-cols-2 gap-4 max-md:grid-cols-1 md:mt-8 md:max-w-[816px]">
            {videoList.map((props, index) => {
              return (
                <Product2Item
                  key={index}
                  link={props.posterPath}
                  videoLink={props.videoPath}
                />
              );
            })}
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
