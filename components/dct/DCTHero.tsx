import Image from "next/image";
import { SubHeading } from "../Typography";

export default function Hero() {
  return (
    <div className="flex grow justify-between items-center">
      <Image
        src={"/images/dct/dctMOCK.png"}
        alt="DCT Dashboard"
        width={1000}
        height={1000}
        loading="eager"
      />
      <div className="space-y-8 px-32">
        <SubHeading>Overview</SubHeading>
        <p className="leading-relaxed">
          This project is my capstone, or Major Qualifying Project (MQP) for my
          Computer Science BS degree. It is a comprehensive data collecton
          application built for the WPI study abroad research project program,
          called the Interactive Qualifying Project (IQP). It was developed
          during the summer of 2024, into the first term of the fall semester. I
          worked on a team of 5, using the Agile methodology for software
          development.
        </p>
      </div>
    </div>
  );
}
