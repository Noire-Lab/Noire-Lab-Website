import { Dialog, DialogPanel } from '@headlessui/react';
import { FC } from 'react';

export const PreviewModal: FC<{
  link: string;
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose, link }) => {
  const isVideo = /\.(mp4|webm|ogg)$/i.test(link);

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="fixed top-0 right-0 bottom-0 left-0 z-50 grid place-items-center bg-[rgba(9,9,9,0.85)] px-[12px]">
        <DialogPanel className="relative overflow-hidden rounded-[24px] p-[16px] duration-150 ease-in-out max-sm:p-[8px] md:p-[32px]">
          <figure className="relative">
            <button
              onClick={onClose}
              type="button"
              className="group absolute top-[8px] right-[8px] z-1 grid h-[28px] w-[28px] place-items-center rounded-[4px] bg-[#0E0C12] duration-150 ease-in-out hover:bg-white md:top-[24px] md:right-[24px] md:h-[56px] md:w-[56px] md:rounded-[12px]"
            >
              <svg
                className="h-[30px] w-[30px] max-md:h-[15px] max-md:w-[15px]"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5002 17.0641L20.908 23.4719C21.248 23.8119 21.7091 24.0029 22.19 24.0029C22.6709 24.0029 23.132 23.8119 23.472 23.4719C23.8121 23.1319 24.0031 22.6707 24.0031 22.1898C24.0031 21.709 23.8121 21.2478 23.472 20.9078L17.0618 14.5L23.4708 8.09222C23.6391 7.92386 23.7726 7.724 23.8636 7.50406C23.9547 7.28412 24.0015 7.0484 24.0015 6.81035C24.0014 6.57231 23.9545 6.33661 23.8633 6.11671C23.7722 5.89681 23.6386 5.69702 23.4702 5.52874C23.3019 5.36046 23.102 5.22699 22.8821 5.13595C22.6621 5.0449 22.4264 4.99807 22.1884 4.99813C21.9503 4.99818 21.7146 5.04513 21.4947 5.13627C21.2748 5.22742 21.075 5.36098 20.9068 5.52934L14.5002 11.9371L8.09238 5.52934C7.92527 5.35616 7.72533 5.21798 7.50424 5.12289C7.28316 5.02779 7.04534 4.97768 6.80468 4.97548C6.56402 4.97327 6.32533 5.01902 6.10254 5.11005C5.87975 5.20108 5.67732 5.33557 5.50706 5.50567C5.3368 5.67577 5.20212 5.87807 5.11088 6.10078C5.01964 6.32348 4.97367 6.56213 4.97565 6.80279C4.97762 7.04345 5.02751 7.28131 5.1224 7.50249C5.21728 7.72367 5.35527 7.92373 5.5283 8.09101L11.9385 14.5L5.52951 20.909C5.35647 21.0763 5.21849 21.2764 5.12361 21.4975C5.02872 21.7187 4.97883 21.9566 4.97686 22.1972C4.97488 22.4379 5.02085 22.6765 5.11209 22.8992C5.20333 23.122 5.33801 23.3243 5.50827 23.4944C5.67853 23.6645 5.88096 23.7989 6.10375 23.89C6.32654 23.981 6.56523 24.0267 6.80589 24.0245C7.04655 24.0223 7.28436 23.9722 7.50545 23.8771C7.72654 23.782 7.92647 23.6439 8.09359 23.4707L14.5002 17.0641Z"
                  fill="white"
                  className="duration-150 ease-in-out group-hover:fill-[#0E0C12]"
                />
              </svg>
            </button>

            {isVideo ? (
              <video
                src={link}
                poster={link.replace(/\.(mp4|webm|ogg)$/i, '.png')} // если есть постер
                controls
                autoPlay
                loop
                className="max-h-[70vh]"
              />
            ) : (
              <img
                src={link}
                className="max-h-[70vh]"
                loading="lazy"
                alt="picture"
              />
            )}
          </figure>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
