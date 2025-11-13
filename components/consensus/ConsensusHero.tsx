import { Paragraph, SubHeading } from "../Typography";

export default function Hero() {
  return (
    <div className="flex grow lg:justify-between lg:items-center flex-col lg:flex-row lg:m-0 mb-6">
      <img
        src={"/images/consensus/consensusMOCK.png"}
        alt="Consensus landing"
        className="max-h-[70vh] w-auto"
        loading="eager"
      />
      <div className="lg:space-y-8 space-y-6 lg:px-32 lg:pt-0 pt-8">
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
    </div>
  );
}
