export default function Page() {
  return (
    <section className="flex flex-col pt-[40px]">
      <div className="flex flex-col gap-[40px] max-w-[1024px] mx-auto">
        <figure>
          <img
            loading="lazy"
            src="/games/game4.png"
            alt="Screenshot of Game 4"
          />
        </figure>
        <figure>
          <img
            loading="lazy"
            src="/games/game5.png"
            alt="Screenshot of Game 5"
          />
        </figure>
        <figure>
          <img
            loading="lazy"
            src="/games/game6.png"
            alt="Screenshot of Game 6"
          />
        </figure>
      </div>
    </section>
  );
}
