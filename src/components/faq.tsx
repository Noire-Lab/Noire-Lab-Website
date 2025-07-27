'use client';
import React, { FC } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

const detailedDescriptionList = [
  {
    title: 'Static creo',
    descriptionList: [
      'Any graphic material not related to web design, including banners, posters, channel art, covers, retouching, and design for PWAs.',
      'Excluded from this category are materials such as logos, brand books, landing pages, websites, and design for custom systems (CRMs, etc.).',
    ],
  },
  {
    title: 'Static resize',
    descriptionList: [
      'Resizing or reformatting of any static graphic material.',
    ],
  },
  {
    title: 'Static geo/offer adaptation',
    descriptionList: [
      'Geo adaptation refers to replacing text and all visual elements to match a specific region — including flags, backgrounds, and national attributes.',
      'Offer adaptation refers to replacing logos, brand mentions in the text, and color schemes to align with a specific offer. For example, adapting a banner from 1xBet to VAVADA.',
      '*During adaptation, the banner’s structure remains unchanged. Any modification to the layout or structural elements is treated as an additional revision.',
    ],
  },
  {
    title: 'Static uniquization',
    descriptionList: [
      'Static creative uniquification involves minimal changes to the overall structure and design.',
      'Important: the creative is not rebuilt from scratch — it is simply “refreshed” by replacing certain elements, colors, or fonts to make it look like the original, but with a newer feel.',
    ],
  },
  {
    title: 'Video (1 lvl)',
    descriptionList: [
      'Basic-level creatives include:',
      'animated static graphics, GIFs, logos, overlays, and stream templates. Also includes video clips up to 20 seconds long without complex graphics or 3D. Voice-over and sound design are included.',
    ],
  },
  {
    title: 'Video (2 lvl)',
    descriptionList: [
      'Medium-level complexity:',
      'Versatile video creatives featuring rich graphics and animation. Includes light 3D elements, character animation, advanced visual effects, and basic tracking.',
      'Suitable for clips up to 40 seconds long with a higher level of detail than basic videos. Voice-over and sound design are included.',
    ],
  },
  {
    title: 'Video (3 lvl)',
    descriptionList: [
      'High-level complexity:',
      'Highly polished creatives with a flexible, creative approach.',
      'We utilize mid-level 3D graphics, unlimited tracking, 2D hand-drawn animation, and cutting-edge AI tools (such as Vezar, Runway, and others) to bring any idea to life.',
      'Ideal for presentations, news-style videos, and storytelling formats — up to 3 minutes in length. Voice-over and sound design are included.',
    ],
  },
  {
    title: 'Video game adaptation',
    descriptionList: [
      'Video adaptation for a different game means keeping the original structure of the creative intact while replacing all elements to match the new game or brand.',
      'Any additional changes that affect the structure are considered “extra revisions” and are billed separately.',
    ],
  },
  {
    title: 'Video geo adaptation',
    descriptionList: [
      'Video adaptation for a different region (geo) involves replacing all elements to match the target region — including text, flags, symbols, and national identity.',
      'The structure of the creative remains unchanged.',
    ],
  },
  {
    title: 'Video resize',
    descriptionList: ['Resizing or reformatting of any type of video content.'],
  },
  {
    title: 'Promo-landing',
    descriptionList: [
      'Promo landing design refers to the visual creation of a one-page website aimed at promoting a specific product, campaign, or offer. Limited to a maximum of 3 screens — anything beyond that is considered a “full landing page.”',
      'The package includes a complete design tailored to your product, with both desktop and mobile versions. Development is not included.',
    ],
  },
  {
    title: 'Promo-landing game adaptation',
    descriptionList: [
      'Adaptation of an existing promo landing page for a different game involves redesigning the landing page to match a completely new product while maintaining the same structure. Any changes to the structure are billed separately.',
      'In some cases, a simple uniquification of the landing can also be considered a game adaptation. Development is included.',
    ],
  },
  {
    title: 'Promo-landing geo adaptation',
    descriptionList: [
      'Adaptation of an existing promo landing page for a different region involves updating text, flags, and all national elements or symbols to match the target locale. Development is included.',
    ],
  },
  {
    title: 'Promo-landing developing',
    descriptionList: [
      'Responsive development of a completed landing page, optimized for all existing desktop and mobile screen formats. (We work only with our own projects.)',
      'Included: basic to intermediate animations of text elements, and scroll-based effects (e.g., wheel spins). Not included: complex slot animations, 3D graphics, or custom advanced animations — these are discussed individually.',
    ],
  },
  {
    title: 'Turnkey creo',
    descriptionList: ['Please refer to FAQ item 1'],
  },
  {
    title: 'Deadline boost',
    descriptionList: ['Please refer to FAQ item 2'],
  },
];

const DetailedDescriptionContent = () => {
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-2 gap-3 font-bold">
        <div className="rounded-[8px] bg-[#615478] px-4 py-3 text-[16px] font-normal">
          Service
        </div>
        <div className="rounded-[8px] bg-[#615478] px-4 py-3 text-[16px] font-normal">
          Description
        </div>
      </div>

      {detailedDescriptionList.map((props, key) => {
        return (
          <div key={key} className="grid grid-cols-2 gap-3 text-[14px]">
            <div className="rounded-[8px] bg-[#191520] p-4">{props.title}</div>
            <div className="flex flex-col gap-3 rounded-[8px] bg-[#191520] p-4 text-[#9990AB]">
              {props.descriptionList.map((text, key) => (
                <p key={key}>{text}</p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const data = [
  {
    title: 'Detailed description of services',
    content: <DetailedDescriptionContent />,
  },
  {
    title: 'Billing System',
    content: '',
  },
  {
    title: 'Why is this beneficial for me?',
    content: (
      <div className="py-3 text-[16px]">
        <p>
          We are for efficiency and mutually beneficial cooperation! Why is it
          convenient and profitable for you?
        </p>

        <ul className="mt-3 space-y-3">
          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <div className="flex flex-col">
              <p className="leading-[18px]">
                <span>Savings. </span>
                <span className="text-[#9990AB]">
                  You pay up to 20% less compared to per-project pricing.
                </span>
              </p>
            </div>
          </li>
        </ul>

        <ul className="mt-3 space-y-3">
          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <div className="flex flex-col">
              <p className="leading-[18px]">
                <span>Transparent budget. </span>
                <span className="text-[#9990AB]">
                  You always know exactly how much you pay and what you get.
                </span>
              </p>
            </div>
          </li>
        </ul>

        <ul className="mt-3 space-y-3">
          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <div className="flex flex-col">
              <p className="leading-[18px]">
                <span>Easy and clear budget planning. </span>
                <span className="text-[#9990AB]">
                  The subscription lets you be sure how much you’ll pay and how
                  many creatives you’ll receive. Our flexible credit system
                  allows you to choose services as needed, without rigid limits.
                </span>
              </p>
            </div>
          </li>
        </ul>

        <ul className="mt-3 space-y-3">
          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <div className="flex flex-col">
              <p className="leading-[18px]">
                <span>Priority service. </span>
                <span className="text-[#9990AB]">
                  Subscribers receive creatives faster and are prioritized in
                  the queue.
                </span>
              </p>
            </div>
          </li>
        </ul>

        <ul className="mt-3 space-y-3">
          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <div className="flex flex-col">
              <p className="leading-[18px]">
                <span>Seamless collaboration. </span>
                <span className="text-[#9990AB]">
                  Fully tailored to your needs. During our work together, we
                  deeply understand your product and style, which significantly
                  improves regular results.
                </span>
              </p>
            </div>
          </li>
        </ul>

        <ul className="mt-3 space-y-3">
          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <div className="flex flex-col">
              <p className="leading-[18px]">
                <span>Complete transparency and control system. </span>
                <span className="text-[#9990AB]">
                  You always know how many credits you have left and how much
                  work has already been completed.We send weekly reports on all
                  completed tasks, so you don’t have to spend your time tracking
                  your budget.
                </span>
              </p>
            </div>
          </li>
        </ul>

        <ul className="mt-3 space-y-3">
          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <div className="flex flex-col">
              <p className="leading-[18px]">
                <span>Renewal bonus. </span>
                <span className="text-[#9990AB]">
                  Even unused credits bring you extra value when renewing your
                  subscription.
                </span>
              </p>
            </div>
          </li>
        </ul>

        <ul className="mt-3 space-y-3">
          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <div className="flex flex-col">
              <p className="leading-[18px]">
                <span>Reliability. </span>
                <span className="text-[#9990AB]">
                  You don’t get a “random freelancer” or an “unmotivated staff
                  designer.” You get a reliable long-term partner who guarantees
                  high-quality, fast, and professional service.
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Edits',
    content: (
      <div className="py-3 text-[16px]">
        <p>
          Each creative includes 3 free revisions of light and medium
          complexity.Paid revisions apply when the number exceeds 3 or if the
          revision is considered complex.
        </p>
        <ul className="mt-3 space-y-3">
          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <span>
              Light level — minor edits that don’t affect the structure and take
              up to 3 minutes each.
            </span>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <span>
              Medium level — small structural tweaks, still quick to implement
              (up to 5 minutes each).
            </span>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <span>
              Complex level — major changes that significantly alter the
              structure or require rebuilding key elements of the creative
              (10–20 minutes each). Pricing for such revisions can be found in
              the "Billing System" section under "Additional Services."
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Working Conditions',
    content: (
      <div className="py-3 text-[16px]">
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <div className="flex flex-col">
              <p className="leading-[18px]">Working days: Mon-Fri</p>
            </div>
          </li>

          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <div className="flex flex-col">
              <p className="leading-[18px]">Receiving tasks: until 6 pm</p>
              <p className="text-[12px]">
                (tasks received later are postponed to the next working day)
              </p>
            </div>
          </li>

          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <div className="flex flex-col">
              <p className="leading-[18px]">Task delivery: by 8:00 PM</p>
              <p className="text-[12px]">
                (only for simple tasks; more complex ones are delivered
                according to an agreed schedule)
              </p>
            </div>
          </li>

          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <div className="flex flex-col">
              <p className="leading-[18px]">Maximum tasks per day: 5</p>
              <p className="text-[12px]">
                (resizes and adaptations are not counted)
              </p>
            </div>
          </li>
        </ul>
      </div>
    ),
  },

  {
    title: 'System Flexibility',
    content: (
      <div className="py-3 text-[16px]">
        You can use your credits for any services included in the package, in
        any order and combination. Want to focus on adaptations? Go ahead. Need
        only new creatives? No problem. The subscription system is fully
        adaptable to your workflow.
      </div>
    ),
  },
  {
    title: 'Unused Credits',
    content: (
      <div className="py-3 text-[16px]">
        <p>If you don't use all your credits by the end of the month:</p>
        <ul className="mt-3 space-y-3">
          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <div className="flex flex-col">
              <p className="leading-[18px]">
                They do not roll over to the next billing cycle.
              </p>
            </div>
          </li>

          <li className="flex items-center gap-2">
            <svg
              className="shrink-0"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
            >
              <rect
                width="6"
                height="6"
                transform="translate(0 0.5)"
                fill="white"
              />
            </svg>

            <div className="flex flex-col">
              <p className="leading-[18px]">
                However, when you renew your subscription, we grant you +5 bonus
                credits — these can be used for free creatives, adaptations, or
                any other services of your choice.
              </p>
            </div>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Reporting and Notifications',
    content: (
      <div className="py-3 text-[16px]">
        At the end of each week, we’ll provide you with a report on completed
        work: the number and types of creatives delivered, as well as how many
        creatives/services/credits you still have available.
      </div>
    ),
  },
  {
    title: 'FAQ',
    content: '',
  },
];

export const FAQ = () => {
  const Item: FC<{
    title: string;
    content: React.ReactNode;
  }> = ({ title, content }) => {
    return (
      <Disclosure>
        {({ open }) => (
          <div className="rounded-[8px] bg-[#0E0C12] px-4 py-3">
            <DisclosureButton className="flex w-full cursor-pointer items-center justify-between">
              <p className="text-xl">{title}</p>
              {!open && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0_972_2503)">
                    <path
                      d="M1.78125 7.99957H14.2257M8.00347 1.77734V14.2218"
                      stroke="white"
                      strokeWidth="1.77778"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_972_2503">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
              {open && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="7" width="14" height="2" rx="1" fill="white" />
                </svg>
              )}
            </DisclosureButton>
            <DisclosurePanel className="mt-3">{content}</DisclosurePanel>
          </div>
        )}
      </Disclosure>
    );
  };

  return (
    <div className="rounded-2xl bg-[#191520] p-4">
      <ul className="space-y-3">
        {data.map((props, key) => (
          <Item key={key} {...props} />
        ))}
      </ul>
    </div>
  );
};
