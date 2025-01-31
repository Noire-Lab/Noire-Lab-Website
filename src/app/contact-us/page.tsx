"use client";
import { Button } from "@/app/components";
import { check, logo } from "@/svg";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { ContactForm } from "../components.client";

type FormPayload = {
  name: string;
  email: string;
  message: string;
  price: string;
  acceptedTerms: boolean;
};

const prices = {
  entryLevel: "$25 - $500",
  budget: "$500 - $10K",
  standard: "$10K - $50K",
  premium: "$50K+",
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
      email: "",
      name: "",
      message: "",
      price: prices.entryLevel,
    },
    mode: "all",
  });

  const selectedPriceWatcher = watch("price");

  const onSubmit: SubmitHandler<FormPayload> = async (formData) => {
    setLoading(true);
    try {
      await fetch(window.location.origin + "/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
          className="absolute z-10 mx-auto left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0  md:left-[calc(50%-90px)] md:top-[40px]"
        >
          {logo}
        </Link>

        <picture>
          <source
            srcSet="/contact-mobile.webp"
            media="(max-width: 768px)"
            type="image/png"
          />
          <source
            srcSet="/contact.webp"
            media="(min-width: 769px)"
            type="image/png"
          />
          <img src="/contact.webp" loading="eager" alt="contact" />
        </picture>
      </header>

      <section className="py-[35px] md:py-[70px] px-[16px] w-full mx-auto bg-[#0E0C12]">
        <h1 className=" md:text-[40px] text-center md:leading-[50px] font-bold">
          <span className="text-[50px] leading-[28px] md:leading-normal md:text-[40px] text-purple md:text-white">
            Hello!
          </span>
          <br className="md:hidden" />{" "}
          <span className="text-[24px] md:text-[40px]">
            Tell us how we can help you
          </span>
        </h1>
        <h2 className="text-[16px] md:text-[24px] text-center md:leading-[50px] font-normal mb-[12px]">
          and we`ll write you back as fast as we can
        </h2>
        <div className="bg-[#191520] rounded-[32px] px-[16px] py-[24px] max-w-[825px] mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
