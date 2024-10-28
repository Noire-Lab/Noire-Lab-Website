import { ProductItem } from "../components";

const list = [
  {
    image: "/products/product9.png",
  },
  {
    image: "/products/product10.png",
  },
  {
    image: "/products/product11.png",
  },
  {
    image: "/products/product12.png",
  },
  {
    image: "/products/product13.png",
  },
  {
    image: "/products/product14.png",
  },
  {
    image: "/products/product15.png",
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
  );
}
