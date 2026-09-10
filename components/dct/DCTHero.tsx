import { SubHeading, Paragraph } from "../Typography";

export default function Hero() {
  return (
    <section className="flex grow flex-col items-center justify-center gap-10 sm:gap-12 lg:flex-row lg:items-center lg:justify-around lg:gap-12 lg:py-0">
      <div className="flex w-full justify-center lg:w-[55%]">
        <img
          src={"/images/dct/dctMOCK.png"}
          alt="DCT Dashboard"
          className="h-auto max-h-[55vh] w-auto max-w-[80%] object-contain sm:max-h-[60vh] sm:max-w-[85%] lg:max-h-[70vh] lg:max-w-full"
          loading="eager"
        />
      </div>

      <div className="w-full max-w-2xl space-y-6 px-0 lg:w-[45%] lg:max-w-xl lg:space-y-8 lg:px-8 xl:px-12">
        <SubHeading>Overview</SubHeading>

        <Paragraph>
          This project is my capstone, or Major Qualifying Project (MQP) for my
          Computer Science BS degree. It is a comprehensive data collecton
          application built for the WPI study abroad research project program,
          called the Interactive Qualifying Project (IQP). It was developed
          during the summer of 2024, into the first term of the fall semester. I
          worked on a team of 5, using the Agile methodology for software
          development.
        </Paragraph>
      </div>
    </section>
  );
}
