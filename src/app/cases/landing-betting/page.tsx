import { Button } from "@/app/components";
import { NavigateProducts, ProductItem } from "@/app/components.client";
import Link from "next/link";
import { Fragment } from "react";

const list = [
  {
    image: "/landings/landing1.png",
    title: "Promo landing “Crypto Casino”",
    description: "Modern platform offering crypto betting with up to 100% bonuses.",
  },
  {
    image: "/landings/landing2.png",
    title: "Promo landing “Welcome Bonus”",
    description: "Exclusive welcome bonus of 1000 USDT for new players.",
  },
  {
    image: "/landings/landing3.png",
    title: "Promo landing “Sporting Events”",
    description: "Dynamic platform for betting on your favorite sporting competitions.",
  },
  {
    image: "/landings/landing4.png",
    title: "Promo landing “India Cricket”",
    description: "Celebrate the passion for cricket with exclusive betting offers.",
  },
  {
    image: "/landings/landing5.png",
    title: "Promo landing “E-Sports”",
    description: "Elevate your e-sports experience with exclusive bonuses and bets.",
  },
  {
    image: "/landings/landing6.png",
    title: "Promo landing “EPL”",
    description: "Your ultimate destination for betting on the Premier League.",
  },
];

export default function Page() {
  return (
    <Fragment>
      <picture>
        <source
          srcSet="/web-design-betting-mobile.png"
          media="(max-width: 768px)"
          type="image/png"
        />
        <source
          srcSet="/web-design-betting.png"
          media="(min-width: 769px)"
          type="image/png"
        />
        <img
          src="/web-design-betting.png"
          loading="lazy"
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
