'use client';
import { FC, Fragment, useState } from 'react';
import { PreviewModal } from '@/components';
import clsx from 'clsx';

export interface ProductItemProps {
  title?: string;
  description?: string;
  link: string;
  type?: 'video' | 'image';
  poster?: string;
}

export const ProductItem: FC<ProductItemProps> = ({
  link,
  type = 'image',
  description,
  title,
  poster,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <Fragment>
      <div
        onClick={handleOpen}
        className="animated-appear group h-max cursor-pointer rounded-[8px] bg-[#191520] p-[10px] duration-150 ease-in-out hover:bg-purple md:p-[25px]"
      >
        {type === 'image' && (
          <figure>
            <img
              alt="Screenshot of Game"
              className="w-full rounded-[8px]"
              src={link}
              loading="lazy"
            />
          </figure>
        )}

        {type === 'video' && (
          <video controls loop muted preload="auto" poster={poster}>
            <source className="w-full rounded-[8px]" src={link} />
          </video>
        )}

        {title && (
          <p className="mt-[10px] text-[16px] font-bold md:mt-[35px] md:text-[30px] md:leading-[36px]">
            {title}
          </p>
        )}

        {description && (
          <p className="text-[14px] text-[#8D8D8D] duration-150 ease-in-out group-hover:text-white max-md:mt-[4px] md:mt-[8px] md:text-[25px] md:leading-[30px]">
            {description}
          </p>
        )}
      </div>
      {type === 'image' && (
        <PreviewModal link={link} open={open} onClose={() => setOpen(false)} />
      )}
    </Fragment>
  );
};

export interface ProductItem2Props {
  link: string;
  videoLink?: string;
  className?: string;
}

export const Product2Item: FC<ProductItem2Props> = ({
  link,
  videoLink,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <Fragment>
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
      <PreviewModal
        link={videoLink ? videoLink : link}
        open={open}
        onClose={() => setOpen(false)}
      />
    </Fragment>
  );
};
