import { Paragraph, SubHeading } from "../Typography";

export default function Hero() {
  return (
    <section className="flex grow flex-col items-center justify-center gap-10 sm:gap-12 lg:flex-row lg:items-center lg:justify-around lg:gap-12 lg:py-0">
      <div className="flex w-full justify-center lg:w-[55%]">
        <img
          src="/images/kiosk/bwhMOCK.png"
          alt="Kiosk Dashboard"
          className="h-auto max-h-[55vh] w-auto max-w-[80%] object-contain sm:max-h-[60vh] sm:max-w-[85%] lg:max-h-[70vh] lg:max-w-full"
          loading="eager"
        />
      </div>

      <div className="w-full max-w-2xl space-y-6 px-0 lg:w-[45%] lg:max-w-xl lg:space-y-8 lg:px-8 xl:px-12">
        <SubHeading>Overview</SubHeading>

        <Paragraph>
          This project was developed during the Software Engineering course
          (CS3733) at WPI taught by Professor Wilson Wong, in collaboration
          with Brigham and Women&apos;s Hospital in Boston, MA. Software
          Engineering is a rigorous 7-week course, during which development
          teams of 10 students meet week-to-week application requirements,
          presenting their progress each week, resulting in a finished
          hospital kiosk application by term&apos;s end. Students take on
          various roles, such as Product Owner, Project Manager, Scrum Master,
          and more. The goal of the course is to provide students with as close
          to real-world development experience as possible. At the end of the
          term, our final presentations were watched by representatives from
          BWH, to take ideas in UI/UX design, functionality, and features.
        </Paragraph>
      </div>
    </section>
  );
}