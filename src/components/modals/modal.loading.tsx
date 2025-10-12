'use client';
import { useLayoutEffect } from 'react';

export const LoadingModal = () => {
  useLayoutEffect(() => {
    document.body.classList.toggle('overflow-hidden');
    document.documentElement.classList.toggle('overflow-hidden');
  }, []);

  return (
    <div
      id="loading-modal"
      className="absolute inset-0 z-100000 flex h-full w-full items-center justify-center bg-[#0E0C12]"
    >
      <video
        playsInline
        autoPlay
        loop
        muted
        controls={false}
        preload="auto"
        className="h-[100px] w-[100px]"
      >
        <source src="/videos/logo.mov" type="video/quicktime;" />
      </video>
    </div>
  );
};
