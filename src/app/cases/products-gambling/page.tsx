import {
  LoadingModal,
  NavigateProducts,
  ProductItem,
  ProductItemProps,
} from "@/app/components.client";
import { Button } from "@/app/components";
import Link from "next/link";
import { Fragment } from "react";
import { Picture } from "./components";

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
