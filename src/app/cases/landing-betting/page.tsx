import { Button } from "@/app/components";
import { NavigateProducts, ProductItem } from "@/app/components.client";
import Link from "next/link";
import { Fragment } from "react";

const list = [
  {
    link: "/landings/landing1.webp",
    title: "Promo landing “Crypto Casino”",
    description: "Modern platform offering crypto betting with up to 100% bonuses.",
  },
  {
    link: "/landings/landing2.webp",
    title: "Promo landing “Welcome Bonus”",
    description: "Exclusive welcome bonus of 1000 USDT for new players.",
  },
  {
    link: "/landings/landing3.webp",
    title: "Promo landing “Sporting Events”",
    description: "Dynamic platform for betting on your favorite sporting competitions.",
  },
  {
    link: "/landings/landing4.webp",
    title: "Promo landing “India Cricket”",
    description: "Celebrate the passion for cricket with exclusive betting offers.",
  },
  {
    link: "/landings/landing5.webp",
    title: "Promo landing “E-Sports”",
    description: "Elevate your e-sports experience with exclusive bonuses and bets.",
  },
  {
    link: "/landings/landing6.webp",
    title: "Promo landing “EPL”",
    description: "Your ultimate destination for betting on the Premier League.",
  },
];

export default function Page() {
  return (
    <Fragment>
      <picture>
        <source
          srcSet="/web-design-betting-mobile.webp"
          media="(max-width: 768px)"
          type="image/webp"
        />
        <source
          srcSet="/web-design-betting.webp"
          media="(min-width: 769px)"
          type="image/webp"
        />
        <img
          src="/web-design-betting.webp"
          loading="eager"
          alt="web design betting"
        />
      </picture>

      <div className="py-[35px] md:py-[70px] flex flex-col">
        <NavigateProducts />
        <section className="flex flex-col pt-[30px] md:pt-[40px] px-[16px]">
          <div className="grid md:grid-cols-2 gap-[8px] md:gap-[30px] max-w-[1296px] mx-auto">
            {list.map((props, index) => (
              <ProductItem key={index} {...props} />
            ))}
          </div>
        </section>

        <Link href="/contact-us" className="mx-auto w-max mt-[40px]">
          <Button
            type="button"
            variant="filled"
            className="h-[41px] md:h-[56px] font-bold text-[16px] md:text-[20px] hover:bg-[#563AA7]"
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
