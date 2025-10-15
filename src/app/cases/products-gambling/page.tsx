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
          <div className="mx-auto grid max-w-[892px] grid-cols-13 gap-5 max-md:grid-cols-1">
            {list.slice(0, 6).map((props, index) => {
              const rowIndex = Math.floor(index / 2); // each 2 items = 1 row
              const isOddRow = rowIndex % 2 === 1;
              const isLeft = index % 2 === 0;

              const heightClass = 'md:h-[314px]';

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

          <div className="mx-auto mt-5 flex justify-center gap-5 max-md:w-full max-md:flex-col md:max-w-[686px]">
            <div className="w-full md:h-[624px] md:max-w-[430px]">
              <figure className="h-full overflow-hidden rounded-[12px] max-md:w-full">
                <img
                  src={list[6].path}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
            <div className="w-full md:h-[624px] md:max-w-[430px]">
              <figure className="h-full overflow-hidden rounded-[12px] max-md:w-full">
                <img
                  src={list[7].path}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  alt=""
                />
              </figure>
            </div>
          </div>

          <p className="mt-5 text-center text-[24px] leading-5">Video</p>

          <div className="mx-auto mt-5 grid grid-cols-2 gap-5 max-md:grid-cols-1 md:max-w-[686px]">
            {videoList.map((props, index) => {
              return (
                <video
                  key={index}
                  className="h-full w-full overflow-hidden rounded-[12px] object-cover"
                  src={props.videoPath}
                  poster={props.posterPath}
                  controls
                  playsInline
                  muted
                  loop
                  preload="none"
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
