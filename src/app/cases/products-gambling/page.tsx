import { ProductItem } from "../components";

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
    <section className="flex flex-col pt-[30px] md:pt-[40px] px-[16px]">
      <div className="columns-2 gap-[8px] md:gap-[30px] max-w-[884px] mx-auto">
        {list.map((props, index) => (
          <div
            key={index}
            className={
              index === 0 ? "" : "mt-[8px] md:mt-[30px]" + " break-inside-avoid"
            }
          >
            <ProductItem {...props} />
          </div>
        ))}
      </div>
    </section>
  );
}
