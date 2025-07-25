'use client';
import { FC, Fragment, useState } from 'react';
import { ImagePreviewModal } from '@/components';

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
        <ImagePreviewModal
          link={link}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </Fragment>
  );
};
