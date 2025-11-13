import { SubHeading, Paragraph } from "../Typography";

export default function Hero() {
  return (
    <div className="flex grow lg:justify-between lg:items-center flex-col lg:flex-row">
      <img
        src={"/images/dct/dctMOCK.png"}
        alt="DCT Dashboard"
        className="max-h-[70vh] w-auto"
        loading="eager"
      />
      <div className="lg:space-y-8 space-y-6 lg:px-32 lg:pt-0 pt-8">
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
    </div>
  );
}
