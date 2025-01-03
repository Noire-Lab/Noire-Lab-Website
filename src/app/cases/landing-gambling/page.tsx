import { NavigateProducts, ProductItem } from "@/app/components.client";
import { Button } from "@/app/components";import Link from "next/link";
import { Fragment } from "react";

const list = [
  {
    image: "/landings/landing7.png",
    title: "New Year's Wheel of Fortune",
    description: "Engaging holiday-themed game to boost player interaction and rewards.",
  },
  {
    image: "/landings/landing8.png",
    title: "Casino landing page with a registration for",
    description: "Optimized landing page design to enhance user registration.",
  },
  {
    image: "/landings/landing9.png",
    title: "Wheel of Fortune",
    description: "Exciting spin-to-win game offering free spins and big prizes.",
  },
  {
    image: "/landings/landing10.png",
    title: "Landing page with a preview of the Gates of Olympus game",
    description: "Stunning showcase of Gates of Olympus with extra rewards.",
  },
  {
    image: "/landings/landing11.png",
    title: "Landing page with a preview of the Sugar Rush game",
    description: "Colorful and fun landing page showcasing the Sugar Rush game with free spins bonuses.",
  },
  {
    image: "/landings/landing12.png",
    title: "Promo landing page for the game WANTED",
    description: "Immersive Wild West-themed landing page designed to captivate players.",
  },
];

export default function Page() {
  return (
    <Fragment>
      <picture>
        <source
          srcSet="/web-design-gambling-mobile.png"
          media="(max-width: 768px)"
          type="image/png"
        />
        <source
          srcSet="/web-design-gambling.png"
          media="(min-width: 769px)"
          type="image/png"
        />
        <img
          src="/web-design-gambling.png"
          loading="lazy"
          alt="web design gambling"
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
