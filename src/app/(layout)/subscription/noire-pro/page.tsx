import { FAQ, PageHeader } from '@/components';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <PageHeader
        title="SUBSCRIPTION: NOIRE PRO"
        imagePath="/images/subscription.webp"
        imagePathMobile="/images/subscription.mobile.webp"
      />

      <div className="mx-auto my-[35px] max-w-[1328px] px-4 text-xl md:my-[70px]">
        <div className="mb-6 space-y-6">
          <p>
            <span className="text-[#CBA2FF]">Noire PRO</span> is the ultimate
            solution for teams of any level — from early-stage marketing
            projects to established businesses with mature creative workflows.
            This package combines both static creatives and full-fledged video
            content, offering flexibility, scalability, and maximum value from
            your subscription.
          </p>
          <p>
            It’s the best choice for those who need a balanced approach to
            design, video production, and adaptations — all without unnecessary
            bureaucracy and with a predictable budget.
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
