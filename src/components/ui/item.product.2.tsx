'use client';
import { FC, Fragment, useState } from 'react';
import { ImagePreviewModal } from '@/components';
import clsx from 'clsx';

export interface ProductItem2Props {
  link: string;
  className?: string;
}

export const Product2Item: FC<ProductItem2Props> = ({ link, className }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <Fragment>
      {/* <div
        onClick={handleOpen}
        className="animated-appear group h-max cursor-pointer rounded-[8px] bg-[#191520] p-[10px] duration-150 ease-in-out hover:bg-purple md:p-[25px]"
      >
      
      </div> */}
      <div
        onClick={handleOpen}
        className={clsx(
          className,
          'animated-appear cursor-pointer duration-150 ease-in-out',
        )}
      >
        <figure className="h-full overflow-hidden rounded-[12px]">
          <img
            src={link}
            className="h-full w-full object-cover"
            loading="lazy"
            alt=""
          />
        </figure>
      </div>
      <ImagePreviewModal
        link={link}
        open={open}
        onClose={() => setOpen(false)}
      />
    </Fragment>
  );
};
