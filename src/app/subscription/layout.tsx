import { Fragment } from "react";
import { Slot } from "@/components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <picture>
        <source
          srcSet="/tools-mobile.webp"
          media="(max-width: 768px)"
          type="image/png"
        />
        <source
          srcSet="/tools.webp"
          media="(min-width: 769px)"
          type="image/png"
        />
        <img src="/tools.webp" loading="eager" alt="tools" />
      </picture>

      {children}
    </div>
  );
}
