import { FAQ, PageHeader } from '@/components';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <PageHeader
        title="SUBSCRIPTION: NOIRE MAX"
        imagePath="/images/subscription.webp"
        imagePathMobile="/images/subscription.mobile.webp"
      />

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
