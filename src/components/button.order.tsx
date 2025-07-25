'use client';
import { Button } from '@/components';
import { useAppStore } from '@/store';

export const OrderButton = () => {
  const setOpen = useAppStore((s) => s.setOpen);
  const handleClick = () => setOpen(true);

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleClick}
      className="h-[51px] w-[236px] text-[16px] font-bold duration-150 ease-in-out hover:bg-white hover:text-[#191520] md:h-[56px] md:w-auto md:text-[20px]"
      aria-label="Make an order"
    >
      Make an order
    </Button>
  );
};
