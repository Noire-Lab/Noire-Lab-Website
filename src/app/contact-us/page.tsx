"use client";
import { Button } from "@/components/Button";
import { check, logo } from "@/svg";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

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
      <header className="hidden md:block max-w-[1440px] min-h-[244px] relative h-[308px] overflow-hidden mx-auto">
        <Link
          href="/"
          className="absolute z-10 mx-auto left-[calc(50%-90px)] top-[40px]"
        >
          {logo}
        </Link>

        <img
          src="/bg2.webp"
          loading="eager"
          className="absolute top-[-290px] object-center w-full "
          alt="background"
        />
      </header>
      <section className="py-[35px] md:py-[70px] px-[16px] w-full mx-auto">
        <h1 className=" md:text-[40px] text-center md:leading-[50px] font-bold">
          <span className="text-[50px] leading-[28px] md:leading-normal md:text-[40px] text-purple md:text-white">
            Hello!
          </span>
          <br className="md:hidden" />{" "}
          <span className="text-[24px] md:text-[40px]">
            Tell us how we can help you
          </span>
        </h1>
        <h2 className="text-[16px] md:text-[24px] text-center md:leading-[50px] font-normal">
          and we`ll write you back as fast as we can
        </h2>

        <form
          autoComplete="on"
          className="mt-[30px] md:mt-0 max-w-[825px] px-[16px] py-[35px] md:p-[50px] mx-auto flex flex-wrap flex-col gap-[24px] bg-[#191520] rounded-[32px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-[12px]">
            <input
              type="text"
              placeholder="Your Name"
              autoComplete="name"
              className={`h-[32px] bg-[#0E0C12] rounded-[4px] py-[8px] px-[16px] text-[18px] placeholder-current ${
                !!errors.name?.message && "text-red-500 border-red-500 border"
              } `}
              {...register("name")}
            />

            <input
              type="text"
              placeholder="Your Email or Messenger"
              autoComplete="email"
              className={`h-[32px] bg-[#0E0C12] rounded-[4px] py-[8px] px-[16px] text-[18px] placeholder-current ${
                !!errors.email?.message && "text-red-500 border-red-500 border"
              } `}
              {...register("email")}
            />

            <textarea
              placeholder="Your Message"
              autoComplete="off"
              className={`bg-[#0E0C12] min-h-[32px] h-[92px] rounded-[4px] py-[8px] leading-[20px] px-[16px] text-[18px] placeholder-current ${
                !!errors.message?.message &&
                "text-red-500 border-red-500 border"
              } `}
              {...register("message")}
            />
          </div>

          <p className="text-[16px] text-center font-[500] md:hidden block">Your budget</p>

          <div className="flex flex-wrap justify-center gap-[12px] text-[20px] text-nowrap font-bold">
            <Button
              type="button"
              variant="outline"
              onClick={() => setValue("price", prices.entryLevel)}
              className={`w-[176px] h-[56px] px-[32px] ${
                selectedPriceWatcher === prices.entryLevel &&
                "bg-white text-[#0E0C12!important]"
              }`}
            >
              {prices.entryLevel}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => setValue("price", prices.budget)}
              className={`w-[190px] h-[56px] px-[32px] ${
                selectedPriceWatcher === prices.budget &&
                "bg-white text-[#0E0C12!important]"
              }`}
            >
              {prices.budget}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => setValue("price", prices.standard)}
              className={`w-[190px] h-[56px] px-[32px] ${
                selectedPriceWatcher === prices.standard &&
                "bg-white text-[#0E0C12!important]"
              }`}
            >
              {prices.standard}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => setValue("price", prices.premium)}
              className={`w-[132px] h-[56px] px-[32px] ${
                selectedPriceWatcher === prices.premium &&
                "bg-white text-[#0E0C12!important]"
              }`}
            >
              {prices.premium}
            </Button>
          </div>

          <Button
            type="submit"
            variant="filled"
            disabled={!isDirty || !isValid}
            className={`h-[56px] px-[60px] py-[12px] mx-auto text-[20px] font-bold disabled:bg-[#563AA7] ${
              (!isDirty || !isValid) &&
              "text-[#D9D9D9] hover:cursor-not-allowed"
            }`}
          >
            {loading ? "Sending..." : "Send a message"}
          </Button>

          <div className="flex justify-center gap-[8px] mx-auto">
            <div className="relative flex items-center justify-center">
              <input
                id="privacy-checkbox"
                type="checkbox"
                className={
                  "hover:cursor-pointer peer appearance-none w-[21px] h-[21px] border-2 border-white rounded-[4px] bg-transparent " +
                  `${
                    !!errors.acceptedTerms?.message &&
                    "text-red-500 border-red-500 border"
                  } `
                }
                {...register("acceptedTerms")}
              />
              <label
                htmlFor="privacy-checkbox"
                className="hover:cursor-pointer hidden peer-checked:block absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                {check}
              </label>
            </div>

            <label
              htmlFor="privacy-checkbox"
              className="hover:cursor-pointer text-[16px] font-normal leading-[20px]"
            >
              By checking this box, I agree <br className="md:hidden" /> to the Noire Lab{" "}
              <Link href="/privacy-policy" className="text-[#855CFF]">
                Privacy Policy
              </Link>
            </label>
          </div>
        </form>
      </section>
    </div>
  );
}
