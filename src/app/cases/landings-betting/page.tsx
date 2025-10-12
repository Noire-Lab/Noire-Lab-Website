import { Button, IntersectionObserverWrapper, PageHeader } from '@/components';
import { NavigationProducts, ProductItem } from '@/components';
import Link from 'next/link';
import { Fragment } from 'react';

const list = [
  {
    link: '/images/landings/landing1.webp',
    title: 'Promo landing “Crypto Casino”',
    description:
      'Modern platform offering crypto betting with up to 100% bonuses.',
  },
  {
    link: '/images/landings/landing2.webp',
    title: 'Promo landing “Welcome Bonus”',
    description: 'Exclusive welcome bonus of 1000 USDT for new players.',
  },
  {
    link: '/images/landings/landing3.webp',
    title: 'Promo landing “Sporting Events”',
    description:
      'Dynamic platform for betting on your favorite sporting competitions.',
  },
  {
    link: '/images/landings/landing4.webp',
    title: 'Promo landing “India Cricket”',
    description:
      'Celebrate the passion for cricket with exclusive betting offers.',
  },
  {
    link: '/images/landings/landing5.webp',
    title: 'Promo landing “E-Sports”',
    description:
      'Elevate your e-sports experience with exclusive bonuses and bets.',
  },
  {
    link: '/images/landings/landing6.webp',
    title: 'Promo landing “EPL”',
    description: 'Your ultimate destination for betting on the Premier League.',
  },
];

export default function Page() {
  return (
    <Fragment>
      <IntersectionObserverWrapper />
      <PageHeader
        title="betting web-design"
        imagePath="/images/cases/betting-landings.webp"
        imagePathMobile="/images/cases/betting-landings.mobile.webp"
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
