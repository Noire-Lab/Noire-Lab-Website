import { FAQ } from '@/components';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <div className="relative">
        <picture>
          <source
            srcSet="/images/subscription.mobile.png"
            media="(max-width: 768px)"
            type="image/png"
          />
          <source
            srcSet="/images/subscription.png"
            media="(min-width: 769px)"
            type="image/png"
          />
          <img
            className="w-full object-cover max-h-[295px] md:max-h-[486px]"
            src="/images/subscription.mobile.png"
            loading="eager"
            alt="subscription"
          />
        </picture>
        <h2 className="absolute inset-x-0 bottom-[62px] mx-auto px-4 text-center text-xl md:leading-[50px] font-bold uppercase md:text-[40px]">
          SUBSCRIPTION: NOIRE MAX
        </h2>
        <div className="absolute right-0 bottom-[35px] left-0 mx-auto flex max-w-[1296px] items-center gap-5">
          <div className="min-h-[1px] w-full bg-[#8578AC]"></div>
          <svg
            className="shrink-0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="11.5"
              stroke="#8578AC"
            />
            <path
              d="M11.7525 15.4056C11.8892 15.5422 12.1108 15.5422 12.2475 15.4056L14.4749 13.1782C14.6116 13.0415 14.6116 12.8199 14.4749 12.6832C14.3382 12.5465 14.1166 12.5465 13.9799 12.6832L12 14.6631L10.0201 12.6832C9.88342 12.5465 9.66181 12.5465 9.52513 12.6832C9.38844 12.8199 9.38844 13.0415 9.52513 13.1782L11.7525 15.4056ZM12 8.84229L11.65 8.84229L11.65 15.1581L12 15.1581L12.35 15.1581L12.35 8.84229L12 8.84229Z"
              fill="#8578AC"
            />
          </svg>

          <div className="min-h-[1px] w-full bg-[#8578AC]"></div>
        </div>
      </div>

      <div className="mx-auto my-[35px] max-w-[1328px] px-4 text-xl md:my-[70px]">
        <div className="mb-6 space-y-6">
          <p>
            <span className="text-[#CBA2FF]">Noire MAX</span> is our flagship
            package — designed for ambitious projects and large-scale teams that
            need everything at once: video, static graphics, and landing pages —
            all in one powerful subscription. It’s the perfect choice for those
            who want maximum volume, maximum value, and no limitations on
            creative tasks.
          </p>
          <p>
            If you're building a major product, operating in a highly
            competitive niche, or simply want your visuals to match a premium
            standard — this is the package for you.
          </p>
          <p>
            Before getting started, make sure to carefully review the
            subscription terms — this is essential for maximum efficiency and a
            smooth workflow.
          </p>
          <p className="text-xs">
            *By purchasing the subscription, you automatically agree to all
            stated terms and conditions.
          </p>
        </div>

        <FAQ />

        <div className="mx-auto mt-6 text-center text-[#9990AB] hover:opacity-50">
          <Link href="/subscription" className="px-3 py-4 text-[17px]">
            BACK
          </Link>
        </div>
      </div>
    </div>
  );
}
