'use client';
import { ContactForm } from '@/components';
import { logo } from '@/svg';
import { yupResolver } from '@hookform/resolvers/yup';
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
  entryLevel: '$25 - $500',
  budget: '$500 - $10K',
  standard: '$10K - $50K',
  premium: '$50K+',
};

const validationSchema = yup.object().shape({
  name: yup.string().min(2).max(100).required(),
  email: yup.string().min(2).max(100).required(),
  message: yup.string().min(10).max(1000).required(),
  price: yup.string().required(),
  acceptedTerms: yup.boolean().required(),
});

export default function Page() {
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
    <div className="bg-[#0E0C12]">
      <header className="relative">
        <Link
          href="/"
          className="absolute top-[45%] left-1/2 z-10 mx-auto -translate-x-1/2 -translate-y-1/2 md:top-[40px] md:left-[calc(50%-90px)] md:translate-x-0 md:translate-y-0"
        >
          {logo}
        </Link>

        <picture>
          <source
            srcSet="/images/contact-mobile.webp"
            media="(max-width: 768px)"
            type="image/png"
          />
          <source
            srcSet="/images/contact.webp"
            media="(min-width: 769px)"
            type="image/png"
          />
          <img src="/images/contact.webp" loading="eager" alt="contact" />
        </picture>
      </header>

      <section className="mx-auto w-full bg-[#0E0C12] px-[16px] py-[35px] md:py-[70px]">
        <h1 className="text-center font-bold md:text-[40px] md:leading-[50px]">
          <span className="text-[50px] leading-[28px] text-purple md:text-[40px] md:leading-normal md:text-white">
            Hello!
          </span>
          <br className="md:hidden" />{' '}
          <span className="text-[24px] md:text-[40px]">
            Tell us how we can help you
          </span>
        </h1>
        <h2 className="mb-[12px] text-center text-[16px] font-normal md:text-[24px] md:leading-[50px]">
          and we`ll write you back as fast as we can
        </h2>
        <div className="mx-auto max-w-[825px] rounded-[32px] bg-[#191520] px-[16px] py-[24px]">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
