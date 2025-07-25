'use client';
import { ContactForm } from '@/components';
import { useAppStore } from '@/store';
import { Dialog, DialogPanel } from '@headlessui/react';
import { FC } from 'react';

export const ContactFormModal: FC = () => {
  const open = useAppStore((s) => s.open);
  const setOpen = useAppStore((s) => s.setOpen);
  const onClose = () => setOpen(false);

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="fixed top-0 right-0 bottom-0 left-0 z-50 grid place-items-center bg-[rgba(9,9,9,0.85)] px-[16px]">
        <DialogPanel className="relative overflow-hidden rounded-[32px] bg-[#191520] p-[16px] duration-150 ease-in-out md:p-[50px]">
          <h1 className="mb-[24px] text-center text-[16px] font-bold md:text-[40px] md:leading-[50px]">
            <div className="text-nowrap">
              Hello!{' '}
              <span className="text-purple">Tell us how we can help you</span>{' '}
              and
            </div>
            <span className="">we`ll write you back as fast as we can</span>
          </h1>
          <ContactForm />
        </DialogPanel>
      </div>
    </Dialog>
  );
};
