import {
  Button,
  IntersectionObserverWrapper,
  NavigationProducts,
  PageHeader,
} from '@/components';
import clsx from 'clsx';
import Link from 'next/link';
import { Fragment } from 'react';

const list = [
  {
    path: '/images/products/gambling/video/1.png',
  },
  {
    path: '/images/products/gambling/video/2.png',
  },
  {
    path: '/images/products/gambling/video/3.png',
  },
  {
    path: '/images/products/gambling/video/4.png',
  },
  {
    path: '/images/products/gambling/video/5.png',
  },
  {
    path: '/images/products/gambling/video/6.png',
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
          <div className="mx-auto grid max-w-[980px] grid-cols-2 gap-5 max-md:grid-cols-1">
            {list.map((props, index) => {
              return (
                <figure
                  key={index}
                  className="h-full overflow-hidden rounded-[12px]"
                >
                  <img
                    src={props.path}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    alt=""
                  />
                </figure>
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
