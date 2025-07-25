import {
  IntersectionObserverWrapper,
  LoadingModal,
  NavigationProducts,
  ProductItem,
} from "@/components";
import { Button } from "@/components";
import Link from "next/link";
import { Fragment } from "react";
import { Picture } from "./components";

const list = [
  {
    link: "/images/products/product9.webp",
  },
  {
    link: "/images/products/product10.webp",
  },
  {
    link: "/images/products/product11.webp",
  },
  {
    link: "/images/products/product12.webp",
  },
  {
    link: "/images/products/product13.webp",
  },
  {
    link: "/images/products/product14.webp",
  },
  {
    link: "/images/products/product15.webp",
  },
];

export default function Page() {
  return (
    <Fragment>
      <IntersectionObserverWrapper />
      <LoadingModal />
      <Picture />

      <div className="py-[35px] md:py-[70px] flex flex-col">
        <NavigationProducts />

        <section className="flex flex-col pt-[30px] md:pt-[40px] px-[16px]">
          <div className="columns-2 gap-[8px] md:gap-[30px] max-w-[884px] mx-auto">
            {list.map((props, index) => (
              <div
                key={index}
                className={
                  index === 0 || index === 4
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
