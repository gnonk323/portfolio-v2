import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex grow justify-between items-center">
      <Image
        src={"/images/kiosk/bwhMOCK.png"}
        alt="Kiosk Dashboard"
        width={1000}
        height={1000}
      />
      <div className="space-y-6 px-32">
        <h3 className="font-doto font-bold text-stone-500 text-3xl">
          Overview
        </h3>
        <p className="leading-relaxed">
          This project was developed during the Software Engineering course
          (CS3733) at WPI taught by Professor Wilson Wong, in collaboration with
          Brigham and Women&apos;s Hospital in Boston, MA. Software Engineering
          is a rigorous 7-week course, during which development teams of 10
          students meet week-to-week application requirements, presenting their
          progress each week, resulting in a finished hospital kiosk application
          by term&apos;s end. Students take on various roles, such as Product
          Owner, Project Manager, Scrum Master, and more. The goal of the course
          is to provide students with as close to real-world development
          experience as possible. At the end of the term, our final
          presentations were watched by representatives from BWH, to take ideas
          in UI/UX design, functionality, and features.
        </p>
      </div>
    </div>
  );
}
