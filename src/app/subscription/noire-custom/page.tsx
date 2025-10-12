import { FAQ, PageHeader } from '@/components';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <PageHeader
        title="SUBSCRIPTION: NOIRE CUSTOM"
        imagePath="/images/subscription.webp"
        imagePathMobile="/images/subscription.mobile.webp"
      />

      <div className="mx-auto my-[35px] max-w-[1328px] px-4 text-xl md:my-[70px]">
        <div className="mb-6 space-y-6">
          <p>
            <span className="text-[#CBA2FF]">Noire CUSTOM</span> is a fully
            personalized subscription package designed to adapt to you — your
            workflow, your volume, and your priorities. Whether you're a large
            company with high-frequency needs or a smaller team looking for
            consistent support, this package is the ideal flexible solution.
          </p>
          <p>
            Noire CUSTOM is not just for big budgets or massive campaigns — it’s
            for anyone who values a tailor-made approach. From 5 tasks a month
            to full-scale production — we build your package based on your
            actual goals and resources. We’re open to long-term collaboration at
            any scale and ready to shape our service around your unique business
            model.
          </p>
          <p>
            This package is fully centered around your needs — not the other way
            around. Let’s create a workflow that fits you perfectly.
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
