"use client";

import * as si from "simple-icons";
import ProjectPage from "@/components/ProjectPage";
import Hero from "@/components/dct/Hero";

export default function DCTPage() {
  const techStack: { name: string; icon?: si.SimpleIcon }[] = [
    { name: "TypeScript", icon: si.siTypescript },
    { name: "Node.js", icon: si.siNodedotjs },
    { name: "React.js", icon: si.siReact },
    { name: "Express", icon: si.siExpress },
    { name: "PostgreSQL", icon: si.siPostgresql },
    { name: "TypeORM", icon: si.siTypeorm },
    { name: "AssemblyAI" },
    { name: "Shadcn", icon: si.siShadcnui },
    { name: "OpenStreetMap", icon: si.siOpenstreetmap },
    { name: "Nominatim" },
    { name: "AWS" },
    { name: "Docker", icon: si.siDocker },
    { name: "Git", icon: si.siGit },
    { name: "Jira", icon: si.siJira },
    { name: "Figma", icon: si.siFigma },
  ];

  return (
    <ProjectPage
      title="WPI IQP Data Collection Tool"
      techStack={techStack}
      links={[
        {
          name: "Report",
          url: "https://digital.wpi.edu/concern/student_works/m613n290d?locale=en",
        },
      ]}
      heroComponent={<Hero />}
    >
      <div className="max-w-7xl w-full space-y-12">
        <img
          src={"/images/dct/monteverde.jpeg"}
          alt="Monteverde, Costa Rica"
          className="rounded w-full h-96 object-cover"
        />
        <h3 className="font-doto font-bold text-stone-500 text-3xl">
          What is the IQP?
        </h3>
        <div className="flex gap-4">
          <div>
            <p className="text-8xl font-doto">&quot;</p>
          </div>
          <div>
            <p className="leading-relaxed">
              The{" "}
              <a
                href="https://www.wpi.edu/project-based-learning/project-based-education/interactive-qualifying-project"
                target="_blank"
                className="text-sky-600 hover:underline"
              >
                Interactive Qualifying Project (IQP)
              </a>{" "}
              is one of the most distinctive elements of the WPI Plan and
              WPI&apos;s signature project-based curriculum, giving every WPI
              student the experience of working in interdisciplinary teams to
              solve a problem or need that lies at the intersection of science
              and society. Unlike an academic course, this nine-credit-hour
              requirement involves students working in teams, with students not
              in their major, to tackle an issue that relates science,
              engineering, and technology to society.
            </p>
            <p className="text-right">- WPI Website</p>
            <div className="flex items-center justify-around text-center mt-16">
              <div>
                <p className="font-bold text-5xl">1,200</p>
                <p>Students/Year</p>
              </div>
              <div>
                <p className="font-bold text-5xl">50+</p>
                <p>Global Project Centers</p>
              </div>
              <div>
                <p className="font-bold text-5xl">31</p>
                <p>Countries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full space-y-12">
        <h3 className="font-doto font-bold text-stone-500 text-3xl">
          Problem and Solution
        </h3>
        <div className="space-y-6 leading-relaxed">
          <p>
            The IQP is a research project, and so it requires students to
            collect qualitative and quantitative data, conduct interviews, and
            distribute surveys to complete their reports. However, each project
            varies greatly, in terms of geographical location, subject matter,
            objective, and of course, research methods. During my IQP in
            Monteverde, Costa Rica, my group used an array of softwares and
            websites to conduct our research. This proved complicated and
            frustrating at times.
          </p>
          <p>So, our goal was to...</p>
          <p className="text-2xl font-bold">
            Design and build an app versatile enough to consolidate most, if not
            all, of any IQP group's research needs into one application.
          </p>
        </div>
      </div>

      <div className="max-w-7xl w-full space-y-12">
        <h3 className="font-doto font-bold text-stone-500 text-3xl">
          UX Research
        </h3>
        <div className="flex gap-16">
          <div className="space-y-6 leading-relaxed">
            <p>
              Before jumping into writing code, we had to conduct some research
              of our own. As a group, we reviewed 20 previous IQP reports to
              quantify which research methods were most commonly used, so we
              would be able to focus our app on the best areas. To minimize
              error, we peer reviewed each other's work to ensure accuracy of
              our findings.
            </p>
            <p>
              We also researched other existing data collection apps, to see
              what features they had and didn&apos;t have. We found that
              existing apps lacked features important to IQP students, while
              having extraneous features geared towards other types of users.
            </p>
            <p className="font-doto">---</p>
            <p className="font-bold text-2xl">
              Our app is designed specifically for the WPI IQP experience!
            </p>
          </div>
          <div className="flex flex-col gap-6 text-center w-xl">
            <div className="rounded-full border border-stone-300 px-6 py-4 shadow-inner">
              <p>Interviews</p>
              <p className="text-5xl font-bold">95%</p>
            </div>
            <div className="rounded-full border border-stone-300 px-6 py-4 shadow-inner">
              <p>Qualitative Data</p>
              <p className="text-5xl font-bold">95%</p>
            </div>
            <div className="rounded-full border border-stone-300 px-6 py-4 shadow-inner">
              <p>Quantitative Data</p>
              <p className="text-5xl font-bold">55%</p>
            </div>
          </div>
        </div>
      </div>
    </ProjectPage>
  );
}
