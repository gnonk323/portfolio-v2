import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex grow justify-between items-center">
      <Image
        src={"/images/dct/dctMOCK.png"}
        alt="Kiosk Dashboard"
        width={1000}
        height={1000}
        loading="eager"
      />
      <div className="space-y-6 px-32">
        <h3 className="font-doto font-bold text-stone-500 text-3xl">
          Overview
        </h3>
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
