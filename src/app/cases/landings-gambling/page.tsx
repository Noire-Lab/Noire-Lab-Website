import {
  Button,
  IntersectionObserverWrapper,
  NavigationProducts,
  PageHeader,
  ProductItem,
} from '@/components';
import Link from 'next/link';
import { Fragment } from 'react';

const list = [
  {
    link: '/images/landings/landing7.webp',
    title: "New Year's Wheel of Fortune",
    description:
      'Engaging holiday-themed game to boost player interaction and rewards.',
  },
  {
    link: '/images/landings/landing8.webp',
    title: 'Casino landing page with a registration for',
    description: 'Optimized landing page design to enhance user registration.',
  },
  {
    link: '/images/landings/landing9.webp',
    title: 'Wheel of Fortune',
    description:
      'Exciting spin-to-win game offering free spins and big prizes.',
  },
  {
    link: '/images/landings/landing10.webp',
    title: 'Landing page with a preview of the Gates of Olympus game',
    description: 'Stunning showcase of Gates of Olympus with extra rewards.',
  },
  {
    link: '/images/landings/landing11.webp',
    title: 'Landing page with a preview of the Sugar Rush game',
    description:
      'Colorful and fun landing page showcasing the Sugar Rush game with free spins bonuses.',
  },
  {
    link: '/images/landings/landing12.webp',
    title: 'Promo landing page for the game WANTED',
    description:
      'Immersive Wild West-themed landing page designed to captivate players.',
  },
];

export default function Page() {
  return (
    <Fragment>
      <IntersectionObserverWrapper />
      <PageHeader
        title="gambling web-design"
        imagePath="/images/cases/gambling-landings.webp"
        imagePathMobile="/images/cases/gambling-landings.mobile.webp"
      />

      <div className="flex flex-col py-[35px] md:py-[70px]">
        <NavigationProducts />
        <section className="flex flex-col px-[16px] pt-[30px] md:pt-[40px]">
          <div className="mx-auto grid max-w-[1296px] gap-[8px] md:grid-cols-2 md:gap-[30px]">
            {list.map((props, index) => (
              <ProductItem key={index} {...props} />
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
