import { ProductItem } from "@/app/components.client";

const list = [
  {
    image: "/landings/landing7.png",
    title: "Project name",
    description: "Project short decription",
  },
  {
    image: "/landings/landing8.png",
    title: "Project name",
    description: "Project short decription",
  },
  {
    image: "/landings/landing9.png",
    title: "Project name",
    description: "Project short decription",
  },
  {
    image: "/landings/landing10.png",
    title: "Project name",
    description: "Project short decription",
  },
  {
    image: "/landings/landing11.png",
    title: "Project name",
    description: "Project short decription",
  },
  {
    image: "/landings/landing12.png",
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
