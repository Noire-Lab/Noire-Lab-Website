import { Slot } from "../components";

export default function Page() {
  return (
    <div>
      <picture>
        <source
          srcSet="/roadmap-mobile.webp"
          media="(max-width: 768px)"
          type="image/png"
        />
        <source
          srcSet="/roadmap.webp"
          media="(min-width: 769px)"
          type="image/png"
        />
        <img src="/roadmap.webp" loading="eager" alt="roadmap" />
      </picture>
      
      <section className="py-[35px] px-[16px] md:py-[70px] mx-auto max-w-[846px] grid md:grid-cols-2 gap-y-[16px] md:gap-y-0 md:gap-x-[12px]">
        <div className="hidden md:flex items-center justify-center">
          <h3 className="uppercase font-bold text-[100px] scale-x-90">
            step 1
          </h3>
        </div>
        <Slot
          header={
            <svg
              className="md:hidden mx-auto"
              width="115"
              height="37"
              viewBox="0 0 115 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5236 36.35C7.97363 36.35 4.17363 35.15 0.723633 31.7L4.72363 26.5C6.17363 27.95 8.52363 30.15 11.4236 30.15C13.8736 30.15 15.3236 28.55 15.3236 26.55V26.5C15.3236 25.1 14.5736 23.7 10.5736 21.45C5.27363 18.3 2.17363 15.6 2.17363 10.65V10.55C2.17363 4.7 6.47363 0.649999 12.7236 0.649999C15.7236 0.649999 19.3736 1.7 22.1736 4.7L18.0736 9.85C16.8236 8.5 14.8736 6.85 12.4236 6.85C10.4236 6.85 8.92363 8.05 8.92363 9.9V9.95C8.92363 11.5 9.72363 12.8 14.5736 15.75C19.4736 18.8 22.0736 21.5 22.0736 26.15V26.25C22.0736 32.25 17.3736 36.35 11.5236 36.35ZM30.1533 36V7.3H23.5033V0.999998H43.5033V7.3H36.8533V36H30.1533ZM47.3201 36V0.999998H65.5201V7.2H53.9701V15.3H64.1701V21.5H53.9701V29.8H65.7201V36H47.3201ZM70.1229 36V0.999998H78.8229C86.1229 0.999998 90.9229 5.15 90.9229 12.9V13C90.9229 21 85.8229 24.95 79.0229 25.2H76.8229V36H70.1229ZM76.8229 19.1H78.5729C82.3229 19.1 84.1729 16.75 84.1729 13.15V13.1C84.1729 9.3 82.4229 7.1 78.6229 7.15H76.8229V19.1ZM107.456 36V7.85L102.956 9.15L102.356 2.95L109.456 0.749998H114.156V36H107.456Z"
                fill="white"
              />
            </svg>
          }
          color="#A863FF"
          descriptionList={[
            "Determining client goals and pains",
            "Creating budgets",
            "Setting campaign dates",
            "Agreeing on target audience demographics",
          ]}
        />
        <Slot
          header={
            <svg
              className="md:hidden mx-auto"
              width="123"
              height="37"
              viewBox="0 0 123 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9836 36.35C7.43359 36.35 3.63359 35.15 0.183594 31.7L4.18359 26.5C5.63359 27.95 7.98359 30.15 10.8836 30.15C13.3336 30.15 14.7836 28.55 14.7836 26.55V26.5C14.7836 25.1 14.0336 23.7 10.0336 21.45C4.73359 18.3 1.63359 15.6 1.63359 10.65V10.55C1.63359 4.7 5.93359 0.649999 12.1836 0.649999C15.1836 0.649999 18.8336 1.7 21.6336 4.7L17.5336 9.85C16.2836 8.5 14.3336 6.85 11.8836 6.85C9.88359 6.85 8.38359 8.05 8.38359 9.9V9.95C8.38359 11.5 9.18359 12.8 14.0336 15.75C18.9336 18.8 21.5336 21.5 21.5336 26.15V26.25C21.5336 32.25 16.8336 36.35 10.9836 36.35ZM29.6133 36V7.3H22.9633V0.999998H42.9633V7.3H36.3133V36H29.6133ZM46.7801 36V0.999998H64.9801V7.2H53.4301V15.3H63.6301V21.5H53.4301V29.8H65.1801V36H46.7801ZM69.5828 36V0.999998H78.2828C85.5828 0.999998 90.3828 5.15 90.3828 12.9V13C90.3828 21 85.2828 24.95 78.4828 25.2H76.2828V36H69.5828ZM76.2828 19.1H78.0328C81.7828 19.1 83.6328 16.75 83.6328 13.15V13.1C83.6328 9.3 81.8828 7.1 78.0828 7.15H76.2828V19.1ZM102.816 36V30.45L111.616 18.65C114.566 14.6 115.566 12.8 115.566 10.6C115.566 8.25 113.866 6.85 111.866 6.85C109.716 6.85 108.266 8.2 106.316 10.45L102.416 5.8C105.066 2.35 108.766 0.449999 112.516 0.449999C118.016 0.449999 122.316 3.85 122.316 10V10.1C122.316 14 120.966 16.6 116.816 21.95L110.816 29.7H122.016V36H102.816Z"
                fill="white"
              />
            </svg>
          }
          color="#9847FF"
          descriptionList={[
            "Analyzing the market in real time to determine the best strategy",
            "Preparing a proposal in line with the client's objectives",
            "Alignment of the company's main goals",
            "Finalization of the proposal based on the client's wishes",
          ]}
        />
        <div className="hidden md:flex items-center justify-center">
          <h3 className="uppercase font-bold text-[100px] scale-x-90">
            step 2
          </h3>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <h3 className="uppercase font-bold text-[100px] scale-x-90">
            step 3
          </h3>
        </div>
        <Slot
          header={
            <svg
              className="md:hidden mx-auto"
              width="122"
              height="37"
              viewBox="0 0 122 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2277 36.35C7.67773 36.35 3.87773 35.15 0.427734 31.7L4.42773 26.5C5.87773 27.95 8.22773 30.15 11.1277 30.15C13.5777 30.15 15.0277 28.55 15.0277 26.55V26.5C15.0277 25.1 14.2777 23.7 10.2777 21.45C4.97773 18.3 1.87773 15.6 1.87773 10.65V10.55C1.87773 4.7 6.17773 0.649999 12.4277 0.649999C15.4277 0.649999 19.0777 1.7 21.8777 4.7L17.7777 9.85C16.5277 8.5 14.5777 6.85 12.1277 6.85C10.1277 6.85 8.62773 8.05 8.62773 9.9V9.95C8.62773 11.5 9.42773 12.8 14.2777 15.75C19.1777 18.8 21.7777 21.5 21.7777 26.15V26.25C21.7777 32.25 17.0777 36.35 11.2277 36.35ZM29.8574 36V7.3H23.2074V0.999998H43.2074V7.3H36.5574V36H29.8574ZM47.0242 36V0.999998H65.2242V7.2H53.6742V15.3H63.8742V21.5H53.6742V29.8H65.4242V36H47.0242ZM69.827 36V0.999998H78.527C85.827 0.999998 90.627 5.15 90.627 12.9V13C90.627 21 85.527 24.95 78.727 25.2H76.527V36H69.827ZM76.527 19.1H78.277C82.027 19.1 83.877 16.75 83.877 13.15V13.1C83.877 9.3 82.127 7.1 78.327 7.15H76.527V19.1ZM110.96 36.55C107.21 36.55 104.16 35.2 101.81 33.05L105.06 27.85C106.21 28.85 107.96 30.35 110.56 30.35C113.31 30.35 115.31 28.5 115.31 25.5V25.4C115.31 22.2 112.86 20.3 108.06 20.3H107.26L106.81 15.95L113.71 7.25H103.36V0.999998H121.56V6.65L114.11 15.5C118.26 16.55 121.96 19.6 121.96 25.2V25.4C121.96 32.2 117.26 36.55 110.96 36.55Z"
                fill="white"
              />
            </svg>
          }
          color="#8A2EFF"
          descriptionList={[
            "Payment by the client",
            "Allocation of resources according to the assigned tasks",
            "Pro-briefing of sources",
            "Preparation of accounts and consumables for digital advertising",
          ]}
        />
        <Slot
          header={
            <svg
              className="md:hidden mx-auto"
              width="126"
              height="37"
              viewBox="0 0 126 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7141 36.35C8.16406 36.35 4.36406 35.15 0.914062 31.7L4.91406 26.5C6.36406 27.95 8.71406 30.15 11.6141 30.15C14.0641 30.15 15.5141 28.55 15.5141 26.55V26.5C15.5141 25.1 14.7641 23.7 10.7641 21.45C5.46406 18.3 2.36406 15.6 2.36406 10.65V10.55C2.36406 4.7 6.66406 0.649999 12.9141 0.649999C15.9141 0.649999 19.5641 1.7 22.3641 4.7L18.2641 9.85C17.0141 8.5 15.0641 6.85 12.6141 6.85C10.6141 6.85 9.11406 8.05 9.11406 9.9V9.95C9.11406 11.5 9.91406 12.8 14.7641 15.75C19.6641 18.8 22.2641 21.5 22.2641 26.15V26.25C22.2641 32.25 17.5641 36.35 11.7141 36.35ZM30.3438 36V7.3H23.6938V0.999998H43.6938V7.3H37.0438V36H30.3438ZM47.5105 36V0.999998H65.7105V7.2H54.1605V15.3H64.3605V21.5H54.1605V29.8H65.9105V36H47.5105ZM70.3133 36V0.999998H79.0133C86.3133 0.999998 91.1133 5.15 91.1133 12.9V13C91.1133 21 86.0133 24.95 79.2133 25.2H77.0133V36H70.3133ZM77.0133 19.1H78.7633C82.5133 19.1 84.3633 16.75 84.3633 13.15V13.1C84.3633 9.3 82.6133 7.1 78.8133 7.15H77.0133V19.1ZM115.946 36V29.15H103.146L102.646 24.2L115.996 0.85H122.246V23.4H125.896V29.15H122.246V36H115.946ZM109.346 23.4H115.946V11.6L109.346 23.4Z"
                fill="white"
              />
            </svg>
          }
          color="#7D16FF"
          descriptionList={[
            "Strategy implementation",
            "Tracking the volume and quality of new users brought in",
            "Tracking the volume and quality of new users brought in",
            "Generating weekly detailed campaign reports",
          ]}
        />
        <div className="hidden md:flex items-center justify-center">
          <h3 className="uppercase font-bold text-[100px] scale-x-90">
            step 4
          </h3>
        </div>
      </section>
    </div>
  );
}
