import { ProductItem } from "@/app/components.client";

const list = [
  {
    image: "/landings/landing1.png",
    title: "Project name",
    description: "Project short decription",
  },
  {
    image: "/landings/landing2.png",
    title: "Project name",
    description: "Project short decription",
  },
  {
    image: "/landings/landing3.png",
    title: "Project name",
    description: "Project short decription",
  },
  {
    image: "/landings/landing4.png",
    title: "Project name",
    description: "Project short decription",
  },
  {
    image: "/landings/landing5.png",
    title: "Project name",
    description: "Project short decription",
  },
  {
    image: "/landings/landing6.png",
    title: "Project name",
    description: "Project short decription",
  },
];

export default function Page() {
  return (
    <section className="flex flex-col pt-[30px] md:pt-[40px] px-[16px]">
      <div className="grid md:grid-cols-2 gap-[8px] md:gap-[30px] max-w-[1296px] mx-auto">
        {list.map((props, index) => (
          <ProductItem key={index} {...props} />
        ))}
      </div>
    </section>
  );
}
