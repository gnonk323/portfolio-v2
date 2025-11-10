import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex grow justify-between items-center">
      <Image
        src={"/images/consensus/consensusMOCK.png"}
        alt="Consensus landing"
        width={1000}
        height={1000}
        loading="eager"
      />
      <div className="space-y-8 px-32">
        <h3 className="font-doto font-bold text-stone-500 text-3xl">
          Overview
        </h3>
        <div className="space-y-6 leading-relaxed">
          <p>
            Consensus is a game where every day there are 4 words that fit into
            a common category. You get four chances to guess what the consensus
            was, calculated from the opinions of everyone that submitted their
            rankings the previous day. After each guess, you&apos;re given a
            similarity score to quantify how close your guess was to the
            consensus, but we won&apos;t tell you which words were in the right
            or wrong places. Once you finish the game, you get to submit your
            ranking for tomorrow&apos;s category and your opinion will go
            towards determining that consensus.
          </p>
          <p>
            In the archive, you can view the stats (both global and personal)
            for days you&apos;ve played, and play (try to guess the consensus)
            days you haven&apos;t.
          </p>
        </div>
        <p className="p-4 rounded border-2 border-amber-400 bg-amber-300/15">
          This was a pet project with a few of my friends! We&apos;ve had a
          great time building it, but currently the deployment is a little bit
          broken 😢. If it sounds cool, please reach out to me and I can give
          you a demo!
        </p>
      </div>
    </div>
  );
}
