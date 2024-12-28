import { Button } from "@/components/Button";
import Link from "next/link";
import { HeaderCases } from "./components";
import { NavigationCases } from "../components.client";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HeaderCases />
      <div className="py-[35px] md:py-[70px] flex flex-col">
        <NavigationCases />
        {children}
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
    </div>
  );
}
