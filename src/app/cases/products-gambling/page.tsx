import {
  IntersectionObserverWrapper,
  LoadingModal,
  NavigateProducts,
  ProductItem,
  ProductItemProps,
} from "@/app/components.client";
import { Button } from "@/app/components";
import Link from "next/link";
import { Fragment } from "react";
import { Picture } from "./components";
import clsx from "clsx";

const list: Pick<ProductItemProps, "link" | "type">[] = [
  {
    link: "/videos/roobet.mp4",
    type: "video",
  },
  {
    link: "/products/product2.webp",
  },
  {
    link: "/videos/sant.mp4",
    type: "video",
  },
  {
    link: "/videos/dante.mp4",
    type: "video",
  },
  {
    link: "/products/product5.webp",
  },
  {
    link: "/products/product6.webp",
  },
  {
    link: "/videos/tr.mp4",
    type: "video",
  },
  {
    link: "/videos/vulkan.mp4",
    type: "video",
  },
];

export default function Page() {
  return (
    <Fragment>
      <IntersectionObserverWrapper />
      <LoadingModal />
      <Picture />

      <div className="py-[35px] md:py-[70px] flex flex-col">
        <NavigateProducts />

        <section className="flex flex-col pt-[30px] md:pt-[40px] px-[16px]">
          <div className="flex gap-[8px] md:gap-[30px] max-w-[884px] mx-auto">
            <div className="flex flex-col gap-[8px] md:gap-[30px]">
              {list.slice(0, 4).map((props, index) => (
                <div key={index}>
                  <ProductItem {...props} />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[8px] md:gap-[30px]">
              {list.slice(5, 8).map((props, index) => (
                <div key={index}>
                  <ProductItem {...props} />
                </div>
              ))}
            </div>
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
