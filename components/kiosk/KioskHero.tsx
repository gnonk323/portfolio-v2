import { Paragraph, SubHeading } from "../Typography";

export default function Hero() {
  return (
    <div className="flex grow lg:justify-between lg:items-center flex-col lg:flex-row">
      <img
        src={"/images/kiosk/bwhMOCK.png"}
        alt="Kiosk Dashboard"
        className="max-w-5xl"
        loading="eager"
      />
      <div className="lg:space-y-8 space-y-6 lg:px-32 lg:pt-0 pt-8">
        <SubHeading>Overview</SubHeading>
        <Paragraph>
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
        </Paragraph>
      </div>
    </div>
  );
}
