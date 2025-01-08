import {
  LoadingModal,
  NavigateProducts,
  ProductItem,
} from "@/app/components.client";
import { Button } from "@/app/components";
import Link from "next/link";
import { Fragment } from "react";
import { Picture } from "./components";

const list = [
  {
    link: "/products/product9.webp",
  },
  {
    link: "/products/product10.webp",
  },
  {
    link: "/products/product11.webp",
  },
  {
    link: "/products/product12.webp",
  },
  {
    link: "/products/product13.webp",
  },
  {
    link: "/products/product14.webp",
  },
  {
    link: "/products/product15.webp",
  },
];

export default function Page() {
  return (
    <Fragment>
      <LoadingModal />
      <Picture />

      <div className="py-[35px] md:py-[70px] flex flex-col">
        <NavigateProducts />

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
