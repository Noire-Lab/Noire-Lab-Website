import { NavigateProducts, ProductItem } from "@/app/components.client";
import { Button } from "@/app/components";
import Link from "next/link";
import { Fragment } from "react";

const list = [
  {
    image: "/products/product1.png",
  },
  {
    image: "/products/product2.png",
  },
  {
    image: "/products/product3.png",
  },
  {
    image: "/products/product4.png",
  },
  {
    image: "/products/product5.png",
  },
  {
    image: "/products/product6.png",
  },
  {
    image: "/products/product7.png",
  },
  {
    image: "/products/product8.png",
  },
];

export default function Page() {
  return (
    <Fragment>
      <picture>
        <source
          srcSet="/gambling-products-mobile.png"
          media="(max-width: 768px)"
          type="image/png"
        />
        <source
          srcSet="/gambling-products.png"
          media="(min-width: 769px)"
          type="image/png"
        />
        <img
          src="/gambling-products.png"
          loading="lazy"
          alt="web design gambling"
        />
      </picture>

      <div className="py-[35px] md:py-[70px] flex flex-col">
        <NavigateProducts />

        <section className="flex flex-col pt-[30px] md:pt-[40px] px-[16px]">
          <div className="columns-2 gap-[8px] md:gap-[30px] max-w-[884px] mx-auto">
            {list.map((props, index) => (
              <div
                key={index}
                className={
                  index === 0
                    ? ""
                    : "mt-[8px] md:mt-[30px]" + " break-inside-avoid"
                }
              >
                <ProductItem {...props} />
              </div>
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
