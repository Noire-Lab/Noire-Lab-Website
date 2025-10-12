'use client';
import { Button } from '@/components';
import { check } from '@/svg';
import { yupResolver } from '@hookform/resolvers/yup';
import { clsx } from 'clsx/lite';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

type FormPayload = {
  name: string;
  email: string;
  message: string;
  price: string;
  acceptedTerms: boolean;
};

const prices = {
  entryLevel: '$25-$500',
  budget: '$500-$10K',
  standard: '$10K-$50K',
  premium: '$50K+',
};

const validationSchema = yup.object().shape({
  name: yup.string().min(2).max(100).required(),
  email: yup.string().min(2).max(100).required(),
  message: yup.string().min(2).max(1000).required(),
  price: yup.string().required(),
  acceptedTerms: yup.boolean().required(),
});

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    watch,
    setValue,
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors, isDirty, isValid },
  } = useForm<FormPayload>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
      price: prices.entryLevel,
    },
    mode: 'all',
  });

  const selectedPriceWatcher = watch('price');

  const onSubmit: SubmitHandler<FormPayload> = async (formData) => {
    setLoading(true);
    try {
      await fetch(window.location.origin + '/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
    } finally {
      reset();
      clearErrors();
      setLoading(false);
    }
  };

  return (
    <form
      id="contact-form"
      autoComplete="on"
      className="flex max-w-[825px] flex-col flex-wrap gap-[24px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-[12px]">
        <input
          type="text"
          placeholder="Your Name"
          autoComplete="name"
          className={clsx(
            !!errors.email?.message && 'border-2 border-red-500 text-red-500',
            'h-[44px] rounded-[8px] border border-[#282136] bg-[#0E0C12] px-[16px] py-[8px] text-[18px] placeholder-[#615478]',
          )}
          {...register('name')}
        />

        <input
          type="text"
          placeholder="Your Email or Messenger"
          autoComplete="email"
          className={clsx(
            !!errors.email?.message && 'border-2 border-red-500 text-red-500',
            'h-[44px] rounded-[8px] border border-[#282136] bg-[#0E0C12] px-[16px] py-[8px] text-[18px] placeholder-[#615478]',
          )}
          {...register('email')}
        />

        <textarea
          placeholder="Your Message"
          autoComplete="off"
          className={clsx(
            !!errors.message?.message && 'border-2 border-red-500 text-red-500',
            'h-[92px] min-h-[32px] rounded-[8px] border border-[#282136] bg-[#0E0C12] px-[16px] py-[8px] text-[18px] placeholder-[#615478]',
          )}
          {...register('message')}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-[12px] text-[20px] font-bold text-nowrap max-md:hidden">
        <Button
          type="button"
          variant="outline"
          onClick={() => setValue('price', prices.entryLevel)}
          className={`h-[56px] w-[176px] px-[32px] duration-150 ease-in-out hover:bg-white hover:text-[#191520] ${
            selectedPriceWatcher === prices.entryLevel &&
            'bg-white text-[#0E0C12!important]'
          }`}
        >
          {prices.entryLevel}
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() => setValue('price', prices.budget)}
          className={`h-[56px] w-[190px] px-[32px] duration-150 ease-in-out hover:bg-white hover:text-[#191520] ${
            selectedPriceWatcher === prices.budget &&
            'bg-white text-[#0E0C12!important]'
          }`}
        >
          {prices.budget}
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() => setValue('price', prices.standard)}
          className={`h-[56px] w-[190px] px-[32px] duration-150 ease-in-out hover:bg-white hover:text-[#191520] ${
            selectedPriceWatcher === prices.standard &&
            'bg-white text-[#0E0C12!important]'
          }`}
        >
          {prices.standard}
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={() => setValue('price', prices.premium)}
          className={`h-[56px] w-[132px] px-[32px] duration-150 ease-in-out hover:bg-white hover:text-[#191520] ${
            selectedPriceWatcher === prices.premium &&
            'bg-white text-[#0E0C12!important]'
          }`}
        >
          {prices.premium}
        </Button>
      </div>

      <div className="flex justify-center gap-[12px] rounded-[8px] text-[20px] font-bold text-nowrap md:hidden">
        <fieldset className="w-full">
          <legend className="mb-[12px] text-[16px]">Your budget:</legend>

          <div className="flex w-full flex-col gap-[4px]">
            <label
              htmlFor={prices.entryLevel}
              className="flex h-[44px] w-full cursor-pointer items-center justify-between rounded-[8px] border border-[#282136] bg-[#0E0C12] px-[16px] py-[12px] text-[18px] font-medium"
            >
              <p>{prices.entryLevel}</p>
              <div className="relative flex items-center justify-center">
                <input
                  id={prices.entryLevel}
                  value={prices.entryLevel}
                  name="price"
                  onClick={() => setValue('price', prices.entryLevel)}
                  className="peer h-[20px] w-[20px] appearance-none rounded-full border-2 border-[#514765] checked:border-white"
                  type="radio"
                  defaultChecked
                />
                <div className="absolute top-1/2 left-1/2 hidden h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white peer-checked:block"></div>
              </div>
            </label>

            <label
              htmlFor={prices.budget}
              className="flex h-[44px] w-full cursor-pointer items-center justify-between rounded-[8px] border border-[#282136] bg-[#0E0C12] px-[16px] py-[12px] text-[18px] font-medium"
            >
              <p>{prices.budget}</p>
              <div className="relative flex items-center justify-center">
                <input
                  id={prices.budget}
                  value={prices.budget}
                  name="price"
                  onClick={() => setValue('price', prices.budget)}
                  className="peer h-[20px] w-[20px] appearance-none rounded-full border-2 border-[#514765] checked:border-white"
                  type="radio"
                />
                <div className="absolute top-1/2 left-1/2 hidden h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white peer-checked:block"></div>
              </div>
            </label>

            <label
              htmlFor={prices.standard}
              className="flex h-[44px] w-full cursor-pointer items-center justify-between rounded-[8px] border border-[#282136] bg-[#0E0C12] px-[16px] py-[12px] text-[18px] font-medium"
            >
              <p>{prices.standard}</p>
              <div className="relative flex items-center justify-center">
                <input
                  id={prices.standard}
                  value={prices.standard}
                  name="price"
                  onClick={() => setValue('price', prices.standard)}
                  className="peer h-[20px] w-[20px] appearance-none rounded-full border-2 border-[#514765] checked:border-white"
                  type="radio"
                />
                <div className="absolute top-1/2 left-1/2 hidden h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white peer-checked:block"></div>
              </div>
            </label>

            <label
              htmlFor={prices.premium}
              className="flex h-[44px] w-full cursor-pointer items-center justify-between rounded-[8px] border border-[#282136] bg-[#0E0C12] px-[16px] py-[12px] text-[18px] font-medium"
            >
              <p>{prices.premium}</p>
              <div className="relative flex items-center justify-center">
                <input
                  id={prices.premium}
                  value={prices.premium}
                  name="price"
                  onClick={() => setValue('price', prices.premium)}
                  className="peer h-[20px] w-[20px] appearance-none rounded-full border-2 border-[#514765] checked:border-white"
                  type="radio"
                />
                <div className="absolute top-1/2 left-1/2 hidden h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white peer-checked:block"></div>
              </div>
            </label>
          </div>
        </fieldset>
      </div>

      <Button
        type="submit"
        variant="filled"
        disabled={!isDirty || !isValid}
        className={`mx-auto h-[56px] px-[60px] py-[12px] text-[20px] font-bold disabled:bg-[#563AA7] ${
          (!isDirty || !isValid) && 'text-[#D9D9D9] hover:cursor-not-allowed'
        }`}
      >
        {loading ? 'Sending...' : 'Send a message'}
      </Button>

      <div className="mx-auto flex justify-center gap-[8px]">
        <div className="relative flex items-center justify-center">
          <input
            id="privacy-checkbox"
            type="checkbox"
            className={
              'peer h-[21px] w-[21px] appearance-none rounded-[4px] border-2 border-white bg-transparent hover:cursor-pointer ' +
              `${
                !!errors.acceptedTerms?.message &&
                'border border-red-500 text-red-500'
              } `
            }
            {...register('acceptedTerms')}
          />
          <label
            htmlFor="privacy-checkbox"
            className="absolute top-[50%] left-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform peer-checked:block hover:cursor-pointer"
          >
            {check}
          </label>
        </div>

        <label
          htmlFor="privacy-checkbox"
          className="text-[16px] leading-[20px] font-normal hover:cursor-pointer"
        >
          By checking this box, I agree <br className="md:hidden" /> to the
          Noire Lab{' '}
          <Link href="/privacy-policy" className="text-[#855CFF]">
            Privacy Policy
          </Link>
        </label>
      </div>
    </form>
  );
};
