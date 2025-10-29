import { FAQ, PageHeader } from '@/components';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <PageHeader
        title="SUBSCRIPTION: NOIRE START"
        imagePath="/images/subscription.webp"
        imagePathMobile="/images/subscription.mobile.webp"
      />

      <div className="mx-auto my-[35px] max-w-[1328px] px-4 text-xl md:my-[70px]">
        <div className="mb-6 space-y-6">
          <p>
            <span className="text-[#CBA2FF]">Noire START</span> is a basic
            subscription package designed specifically for teams and projects
            that regularly require static creatives, their adaptations, and
            unique variations. It's the perfect solution for consistent graphic
            production without unnecessary bureaucracy and with a controlled
            budget.
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
