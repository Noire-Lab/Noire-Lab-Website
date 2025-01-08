"use client";
import Image from "next/image";
import { ReactEventHandler } from "react";

export const Picture = () => {
  const onLoad: ReactEventHandler<HTMLImageElement> = (e) => {
    const modal = document.getElementById("loading-modal");

    if (modal) {
      modal.classList.add("hidden");
      document.body.classList.toggle("overflow-hidden");
      document.documentElement.classList.toggle("overflow-hidden");
    }
  };

  return (
    <picture>
      <source
        srcSet="/gambling-products-mobile.webp"
        media="(max-width: 768px)"
        type="image/webp"
      />
      <source
        srcSet="/gambling-products.webp"
        media="(min-width: 769px)"
        type="image/webp"
      />

      <Image
        onLoad={onLoad}
        width={5760}
        height={1944}
        src="/gambling-products.webp"
        loading="eager"
        alt="web design gambling"
      />
    </picture>
  );
};
