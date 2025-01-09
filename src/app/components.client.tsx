"use client";
import { Button } from "@/app/components";
import { useAppStore } from "@/store";
import { bag, burgerMenu, check, close, house, phone } from "@/svg";
import { Dialog, DialogPanel } from "@headlessui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { clsx } from "clsx/lite";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FC,
  Fragment,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

export const NavigateProducts = () => {
  const path = usePathname();

  const isActive = (match: string, currentPath = path) => {
    return currentPath.includes(match);
  };

  const isBetting = useMemo(() => isActive("betting", path), [path]);
  const isGambling = useMemo(() => isActive("gambling", path), [path]);
  const isLanding = useMemo(() => isActive("landing", path), [path]);
  const isGames = useMemo(() => isActive("games", path), [path]);
  const isProduct = useMemo(() => isActive("product", path), [path]);

  return (
    <section className="mx-auto w-full md:w-max flex flex-col gap-[21px] md:gap-[30px]">
      <div className="max-w-[320px] md:max-w-max mx-auto flex flex-wrap justify-center md:justify-normal gap-[8px] md:gap-[12px] font-bold text-[14px] md:text-[24px]">
        <Link href="/cases/landing-betting">
          <Button
            variant="outline"
            className={`hover:bg-[#855CFF33] h-[41px] md:h-[53px] px-[36px] border-[#855CFF!important] border-[2px!important] ${
              isLanding ? " bg-[#855CFF] border-[#855CFF!important]" : ""
            }`}
            aria-label="Landings | Sites"
          >
            Landings | Sites
          </Button>
        </Link>

        <Link href="/cases/games">
          <Button
            disabled
            variant="outline"
            className={`hover:bg-[#855CFF33] hover:cursor-not-allowed h-[41px] md:h-[53px] px-[36px] text-[#2F293C] border-[#2F293C!important] border-[2px!important] ${
              isGames ? " bg-[#2F293C] border-[#855CFF!important]" : ""
            }`}
            aria-label="Games"
          >
            Games
          </Button>
        </Link>

        <Link href="/cases/products-betting">
          <Button
            variant="outline"
            className={`hover:bg-[#855CFF33] h-[41px] md:h-[53px] px-[36px] border-[#855CFF!important] border-[2px!important] ${
              isProduct ? " bg-[#855CFF] border-[#855CFF!important]" : ""
            }`}
            aria-label="Products"
          >
            Products
          </Button>
        </Link>
      </div>

      {!isGames && (
        <div className="flex gap-[18px] justify-center text-[14px] md:text-[20px]">
          <Link
            href={path.split("-")[0] + "-gambling"}
            className={`group hover:text-white duration-150 ease-in-out flex flex-col gap-[12px] ${
              isGambling ? "" : "text-[#6C6C6C]"
            }`}
          >
            <span
              className={`${
                isGambling ? "decoration-purple" : "decoration-[#6C6C6C]"
              } group-hover:decoration-[#855CFF80] underline underline-offset-[16px]`}
            >
              Gambling
            </span>
          </Link>
          <Link
            href={path.split("-")[0] + "-betting"}
            className={`group hover:text-white duration-150 ease-in-out flex flex-col gap-[12px] ${
              isBetting ? "" : "text-[#6C6C6C]"
            }`}
          >
            <span
              className={`${
                isBetting ? "decoration-purple" : "decoration-[#6C6C6C]"
              } group-hover:decoration-[#855CFF80] underline underline-offset-[16px]`}
            >
              Betting
            </span>
          </Link>
        </div>
      )}
    </section>
  );
};

export const Navigation = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (match: string, currentPath = path) => {
    return currentPath.includes(match);
  };

  const isHome = useMemo(() => "/" === path, [path]);
  const isContacts = useMemo(() => isActive("contact-us", path), [path]);
  const isProjects = useMemo(() => isActive("cases", path), [path]);

  return (
    <Fragment>
      <nav className="bg-white hidden md:flex rounded-[500px] h-[48px] w-[426px] py-[4px] px-[4px] text-[#0E0C12] text-[21px] font-[500] fixed z-50 bottom-10 left-1/2 -translate-x-1/2 justify-around items-center gap-x-1 ">
        <Link
          href="/"
          className={`flex items-center gap-[8px] px-[16px] rounded-[500px] h-full ${
            isHome ? "bg-[#0E0C12]" : ""
          }`}
        >
          {house(isHome ? "#A863FF" : undefined)}
          <span className={isHome ? "text-white" : ""}>Home</span>
        </Link>
        <Link
          href="/cases/landing-betting"
          className={`flex items-center gap-[8px] px-[16px] rounded-[500px] h-full ${
            isProjects ? "bg-[#0E0C12]" : ""
          }`}
        >
          {bag(isProjects ? "#A863FF" : undefined)}
          <span className={isProjects ? "text-white" : ""}>Projects</span>
        </Link>
        <Link
          href="/contact-us"
          className={`flex items-center gap-[8px] px-[16px] rounded-[500px] h-full ${
            isContacts ? "bg-[#0E0C12]" : ""
          }`}
        >
          {phone(isContacts ? "#A863FF" : undefined)}
          <span className={isContacts ? "text-white" : ""}>Contacts</span>
        </Link>
      </nav>

      <div
        className={clsx(
          open ? "bottom-0" : "bottom-3",
          "block md:hidden py-[4px] px-[4px] fixed z-50 left-1/2 -translate-x-1/2"
        )}
      >
        <nav
          className={clsx(
            open ? "hidden" : "flex",
            "bg-white rounded-[500px] w-[169px] h-[48px] px-[24px] py-[4px] cursor-pointer"
          )}
        >
          <div
            onClick={() => setOpen((o) => !o)}
            className={`flex items-center justify-between gap-[12px] h-full bg-white text-[#0E0C12] text-[21px] font-[500]`}
          >
            <div className="flex gap-[10px] items-center">
              <div>{house()}</div>
              <p>Menu</p>
            </div>
            <div>{burgerMenu()}</div>
          </div>
        </nav>

        <nav
          className={clsx(
            open ? "flex flex-col gap-[12px]" : "hidden",
            "p-[12px] bg-[#0E0C12] w-[365px] border border-purple rounded-[31px] duration-300 ease-in-out"
          )}
        >
          <div className="py-[18px] px-[24px] flex flex-col gap-[24px] text-[16px] font-[500]">
            <div className="flex flex-col gap-[16px]">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-[10px] h-[16px]"
              >
                <div>{house("#A863FF")}</div>
                <p>Home</p>
              </Link>
              <Link
                href="/cases/landing-betting"
                onClick={() => setOpen(false)}
                className="flex items-center gap-[10px] h-[16px]"
              >
                <div>{bag("#A863FF")}</div>
                <p>Projects</p>
              </Link>
            </div>
            <hr className="border-t border-[#FFFFFF26] w-full" />
            <div>
              <ul className="flex flex-col gap-[8px] justify-start">
                <li className="min-w-[66px] h-[16px]">
                  <a
                    href="https://www.instagram.com/noire_lab?igsh=MXFvZWE1eHNubXVjaQ%3D%3D&utm_source=qr"
                    target="_blank"
                  >
                    <img
                      src="/instagram.svg"
                      className="h-[16px]"
                      loading="eager"
                      alt="instagram"
                    />
                  </a>
                </li>
                <li className="min-w-[66px] h-[16px]">
                  <a href="https://www.behance.net/noirelab" target="_blank">
                    <img
                      src="/behance.svg"
                      className="h-[16px]"
                      loading="eager"
                      alt="behance"
                    />
                  </a>
                </li>
                <li className="min-w-[66px] h-[16px]">
                  <a href="https://dribbble.com/NoireLab" target="_blank">
                    <img
                      src="/dribble.webp"
                      className="h-[16px]"
                      loading="eager"
                      alt="dribble"
                    />
                  </a>
                </li>
                <li className="min-w-[66px] h-[16px]">
                  <a
                    href="https://www.linkedin.com/in/noire-lab-73a9b4344/"
                    target="_blank"
                  >
                    <img
                      src="/linkedin.svg"
                      className="h-[16px]"
                      loading="eager"
                      alt="linkedin"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-[12px] font-[500] text-[21px]">
            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="bg-[#A863FF] rounded-[500px] text-[16px] flex items-center justify-center h-[48px] hover:bg-[#563AA7]"
            >
              <p>Contact us</p>
            </Link>
            <div
              onClick={() => setOpen(false)}
              className="flex bg-white rounded-[500px] items-center justify-between px-[24px] h-[48px] cursor-pointer"
            >
              <div className="flex items-center gap-[10px]">
                <div>{house()}</div>
                <p className="text-[#191520]">Menu</p>
              </div>
              <div>{close}</div>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export const useIntersectionObserver = () => {
  useEffect(() => {
    const options = {
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("open");
        } else {
          entry.target.classList.remove("open");
        }
      });
    }, options);

    const elements = document.querySelectorAll(".animated-appear");

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);
};

export const IntersectionObserverWrapper = () => {
  useIntersectionObserver();
  return null;
};

export interface ProductItemProps {
  title?: string;
  description?: string;
  link: string;
  type?: "video" | "image";
  poster?: string
}
export const ProductItem: FC<ProductItemProps> = ({
  link,
  type = "image",
  description,
  title,
  poster
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <Fragment>
      <div
        onClick={handleOpen}
        className="animated-appear p-[10px] md:p-[25px] bg-[#191520] h-max rounded-[8px] hover:bg-purple group duration-150 ease-in-out cursor-pointer"
      >
        {type === "image" && (
          <figure>
            <img
              alt="Screenshot of Game"
              className="w-full rounded-[8px]"
              src={link}
              loading="lazy"
            />
          </figure>
        )}
        {type === "video" && (
          <video controls loop muted preload="auto" poster={poster}>
            <source className="w-full rounded-[8px]" src={link} />
          </video>
        )}

        {title && (
          <p className="font-bold text-[16px] md:text-[30px] md:leading-[36px] mt-[10px] md:mt-[35px]">
            {title}
          </p>
        )}

        {description && (
          <p className="text-[#8D8D8D] max-md:mt-[4px] md:mt-[8px] text-[14px] md:text-[25px] md:leading-[30px] group-hover:text-white duration-150 ease-in-out">
            {description}
          </p>
        )}
      </div>
      {type === "image" && (
        <ImagePreviewModal
          link={link}
          open={open}
          onClose={() => setOpen(false)}
        />
      )}
    </Fragment>
  );
};

export const ImagePreviewModal: FC<{
  open: boolean;
  onClose: () => void;
  link: string;
}> = ({ open, onClose, link }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="fixed z-50 top-0 left-0 right-0 bottom-0 grid place-items-center bg-[rgba(0,0,0,0.5)] px-[12px]">
        <DialogPanel className="relative duration-150 ease-in-out rounded-[24px] p-[32px] max-sm:p-[8px] overflow-hidden">
          <figure className="relative">
            <button
              onClick={onClose}
              type="button"
              className=" group absolute grid place-items-center z-1 w-[56px] h-[56px] top-[24px] right-[24px] bg-[#0E0C12] rounded-[12px] hover:bg-white duration-150 ease-in-out"
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.5002 17.0641L20.908 23.4719C21.248 23.8119 21.7091 24.0029 22.19 24.0029C22.6709 24.0029 23.132 23.8119 23.472 23.4719C23.8121 23.1319 24.0031 22.6707 24.0031 22.1898C24.0031 21.709 23.8121 21.2478 23.472 20.9078L17.0618 14.5L23.4708 8.09222C23.6391 7.92386 23.7726 7.724 23.8636 7.50406C23.9547 7.28412 24.0015 7.0484 24.0015 6.81035C24.0014 6.57231 23.9545 6.33661 23.8633 6.11671C23.7722 5.89681 23.6386 5.69702 23.4702 5.52874C23.3019 5.36046 23.102 5.22699 22.8821 5.13595C22.6621 5.0449 22.4264 4.99807 22.1884 4.99813C21.9503 4.99818 21.7146 5.04513 21.4947 5.13627C21.2748 5.22742 21.075 5.36098 20.9068 5.52934L14.5002 11.9371L8.09238 5.52934C7.92527 5.35616 7.72533 5.21798 7.50424 5.12289C7.28316 5.02779 7.04534 4.97768 6.80468 4.97548C6.56402 4.97327 6.32533 5.01902 6.10254 5.11005C5.87975 5.20108 5.67732 5.33557 5.50706 5.50567C5.3368 5.67577 5.20212 5.87807 5.11088 6.10078C5.01964 6.32348 4.97367 6.56213 4.97565 6.80279C4.97762 7.04345 5.02751 7.28131 5.1224 7.50249C5.21728 7.72367 5.35527 7.92373 5.5283 8.09101L11.9385 14.5L5.52951 20.909C5.35647 21.0763 5.21849 21.2764 5.12361 21.4975C5.02872 21.7187 4.97883 21.9566 4.97686 22.1972C4.97488 22.4379 5.02085 22.6765 5.11209 22.8992C5.20333 23.122 5.33801 23.3243 5.50827 23.4944C5.67853 23.6645 5.88096 23.7989 6.10375 23.89C6.32654 23.981 6.56523 24.0267 6.80589 24.0245C7.04655 24.0223 7.28436 23.9722 7.50545 23.8771C7.72654 23.782 7.92647 23.6439 8.09359 23.4707L14.5002 17.0641Z"
                  fill="white"
                  className="group-hover:fill-[#0E0C12] duration-150 ease-in-out"
                />
              </svg>
            </button>
            <img
              src={link}
              className="max-h-[65vh] max-sm:w-full"
              loading="lazy"
              alt="picture"
            />
          </figure>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

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

export const ConctactForm = () => {
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
    <form
      id="contact-form"
      autoComplete="on"
      className="max-w-[825px] flex flex-wrap flex-col gap-[24px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-[12px]">
        <input
          type="text"
          placeholder="Your Name"
          autoComplete="name"
          className={clsx(
            !!errors.email?.message && "text-red-500 border-red-500 border-2",
            "h-[32px] bg-[#0E0C12] rounded-[8px] py-[8px] px-[16px] text-[18px] placeholder-[#352D43]"
          )}
          {...register("name")}
        />

        <input
          type="text"
          placeholder="Your Email or Messenger"
          autoComplete="email"
          className={clsx(
            !!errors.email?.message && "text-red-500 border-red-500 border-2",
            "h-[32px] bg-[#0E0C12] rounded-[8px] py-[8px] px-[16px] text-[18px] placeholder-[#352D43]"
          )}
          {...register("email")}
        />

        <textarea
          placeholder="Your Message"
          autoComplete="off"
          className={clsx(
            !!errors.message?.message && "text-red-500 border-red-500 border-2",
            "bg-[#0E0C12] min-h-[32px] h-[92px] rounded-[8px] py-[8px] leading-[20px] px-[16px] text-[18px] placeholder-[#352D43]"
          )}
          {...register("message")}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-[12px] text-[20px] text-nowrap font-bold">
        <Button
          type="button"
          variant="outline"
          onClick={() => setValue("price", prices.entryLevel)}
          className={`w-[176px] h-[56px] px-[32px] hover:bg-white hover:text-[#191520] ease-in-out duration-150 ${
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
          className={`w-[190px] h-[56px] px-[32px] hover:bg-white hover:text-[#191520] ease-in-out duration-150 ${
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
          className={`w-[190px] h-[56px] px-[32px] hover:bg-white hover:text-[#191520] ease-in-out duration-150 ${
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
          className={`w-[132px] h-[56px] px-[32px] hover:bg-white hover:text-[#191520] ease-in-out duration-150 ${
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
          (!isDirty || !isValid) && "text-[#D9D9D9] hover:cursor-not-allowed"
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
            className="hover:cursor-pointer hidden peer-checked:block absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            {check}
          </label>
        </div>

        <label
          htmlFor="privacy-checkbox"
          className="hover:cursor-pointer text-[16px] font-normal leading-[20px]"
        >
          By checking this box, I agree <br className="md:hidden" /> to the
          Noire Lab{" "}
          <Link href="/privacy-policy" className="text-[#855CFF]">
            Privacy Policy
          </Link>
        </label>
      </div>
    </form>
  );
};

export const MakeOrderButton = () => {
  const setOpen = useAppStore((s) => s.setOpen);
  const handleClick = () => setOpen(true);

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleClick}
      className="font-bold text-[16px] md:text-[20px] h-[51px] md:h-[56px] w-[236px] md:w-auto hover:bg-white hover:text-[#191520] ease-in-out duration-150"
      aria-label="Make an order"
    >
      Make an order
    </Button>
  );
};

export const ContactForm: FC = () => {
  const open = useAppStore((s) => s.open);
  const setOpen = useAppStore((s) => s.setOpen);
  const onClose = () => setOpen(false);

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="fixed z-50 top-0 left-0 right-0 bottom-0 grid place-items-center bg-[rgba(0,0,0,0.5)] px-[12px]">
        <DialogPanel className="bg-[#191520] p-[16px] md:p-[50px] rounded-[32px] relative duration-150 ease-in-out overflow-hidden">
          <h1 className="text-center text-[16px] font-bold mb-[24px] md:text-[40px] md:leading-[50px]">
            <div className="text-nowrap">
              Hello!{" "}
              <span className="text-purple">Tell us how we can help you</span>{" "}
              and
            </div>
            <span className="">we`ll write you back as fast as we can</span>
          </h1>
          <ConctactForm />
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export const LoadingModal = () => {
  useLayoutEffect(() => {
    document.body.classList.toggle("overflow-hidden");
    document.documentElement.classList.toggle("overflow-hidden");
  }, []);
  // const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // const handleVideoLoaded = () => {
  //   setIsVideoLoaded(true);
  // };

  return (
    <div
      id="loading-modal"
      className="absolute inset-0 h-full w-full flex justify-center items-center z-[100000] bg-[#0E0C12]"
    >
      {/* <img
          src="/favicon-96x96.png"
          loading="eager"
          className="w-[100px] h-[100px]"
          alt="loading..."
        /> */}
      <video
        playsInline
        autoPlay
        loop
        muted
        controls={false}
        preload="auto"
        className="w-[100px] h-[100px]"
      >
        <source src="/videos/logo.mov" type="video/quicktime;" />
      </video>
    </div>
  );
};
