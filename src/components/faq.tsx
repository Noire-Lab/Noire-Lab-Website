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
    content: '',
  },

  {
    title: 'Edits',
    content: '',
  },
  {
    title: 'Working Conditions',
    content: '',
  },

  {
    title: 'System Flexibility',
    content: '',
  },

  {
    title: 'Unused Credits',
    content: '',
  },
  {
    title: 'Reporting and Notifications',
    content: '',
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
