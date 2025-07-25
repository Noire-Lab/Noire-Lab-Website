"use client";
import Image from "next/image";
import { ReactEventHandler } from "react";

export const Picture = () => {
  const onLoad: ReactEventHandler<HTMLImageElement> = (e) => {
    const modal = document.getElementById("loading-modal");

    if (modal) {
      modal.classList.add("hidden");
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    }
  };

  return (
    <picture>
      <source
        srcSet="/images/web-design-betting-mobile.webp"
        media="(max-width: 768px)"
        type="image/webp"
      />
      <source
        srcSet="/images/web-design-betting.webp"
        media="(min-width: 769px)"
        type="image/webp"
      />

      <Image
        onLoad={onLoad}
        width={5760}
        height={1944}
        src="/images/web-design-betting.webp"
        loading="eager"
        alt="web design betting"
      />
    </picture>
  );
};
