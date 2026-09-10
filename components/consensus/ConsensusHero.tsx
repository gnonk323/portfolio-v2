import { Paragraph, SubHeading } from "../Typography";

export default function Hero() {
  return (
    <section className="flex grow flex-col items-center justify-center gap-10 sm:gap-12 lg:flex-row lg:items-center lg:justify-around lg:gap-12 lg:py-0">
      <div className="flex w-full justify-center lg:w-[55%]">
        <img
          src={"/images/consensus/consensusMOCK.png"}
          alt="Consensus landing"
          className="h-auto max-h-[55vh] w-auto max-w-[80%] object-contain sm:max-h-[60vh] sm:max-w-[85%] lg:max-h-[50vh] lg:max-w-full"
          loading="eager"
        />
      </div>

      <div className="w-full max-w-2xl space-y-6 px-0 lg:w-[45%] lg:max-w-xl lg:space-y-8 lg:px-8 xl:px-12">
      <SubHeading>Overview</SubHeading>
        <div className="space-y-6">
          <Paragraph>
            Consensus is a game where every day there are 4 words that fit into
            a common category. You get four chances to guess what the consensus
            was, calculated from the opinions of everyone that submitted their
            rankings the previous day. After each guess, you&apos;re given a
            similarity score to quantify how close your guess was to the
            consensus, but we won&apos;t tell you which words were in the right
            or wrong places. Once you finish the game, you get to submit your
            ranking for tomorrow&apos;s category and your opinion will go
            towards determining that consensus.
          </Paragraph>
          <Paragraph>
            In the archive, you can view the stats (both global and personal)
            for days you&apos;ve played, and play (try to guess the consensus)
            days you haven&apos;t.
          </Paragraph>
        </div>
        <Paragraph className="p-4 rounded border-2 border-amber-400 bg-amber-300/15">
          This was a pet project with a few of my friends! We&apos;ve had a
          great time building it, but the deployment is a little bit broken at
          the moment 😢. If it sounds cool, please reach out to me and I can
          give you a demo!
        </Paragraph>
      </div>
    </section>
  );
}
