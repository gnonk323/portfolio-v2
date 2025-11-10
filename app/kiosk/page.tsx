"use client";

import {
  ArrowRight,
  Lightbulb,
  ChevronRight,
  CircleQuestionMark,
  PencilLine,
  CodeXml,
  MessageCircle,
  Laptop,
  Crown,
} from "lucide-react";
import * as si from "simple-icons";
import FeatureSection from "@/components/kiosk/FeatureSection";
import Link from "next/link";

import ProjectPage from "@/components/ProjectPage";
import Hero from "@/components/kiosk/Hero";

export default function KioskPage() {
  const techStack: { name: string; icon?: si.SimpleIcon }[] = [
    { name: "TypeScript", icon: si.siTypescript },
    { name: "React.js", icon: si.siReact },
    { name: "Node.js", icon: si.siNodedotjs },
    { name: "Material UI", icon: si.siGoogle },
    { name: "Prisma", icon: si.siPrisma },
    { name: "PostgreSQL", icon: si.siPostgresql },
    { name: "Express", icon: si.siExpress },
    { name: "Axios", icon: si.siAxios },
    { name: "AWS" },
    { name: "Docker", icon: si.siDocker },
    { name: "Git", icon: si.siGit },
    { name: "Jira", icon: si.siJira },
    { name: "Figma", icon: si.siFigma },
  ];

  return (
    <ProjectPage
      title="Kiosk for Brigham and Women's Hospital"
      techStack={techStack}
      links={[
        { name: "Report", url: "/documents/kiosk/bwh-report.pdf" },
        { name: "User Manual", url: "/documents/kiosk/bwh-user-manual.pdf" },
      ]}
      heroComponent={<Hero />}
    >
      <div className="max-w-7xl w-full space-y-12">
        <h3 className="font-doto font-bold text-stone-500 text-3xl">
          Approach
        </h3>
        <p className="leading-relaxed">
          Each team used the <span className="font-semibold">Agile</span>{" "}
          software development approach, with{" "}
          <span className="font-semibold">weekly sprints</span>. Upon receiving
          the application requirements for the week, our team met to convert the
          requirements into epics, which were then broken down into user
          stories. We used planning poker to weight each story, breaking them
          down into sub-tasks if necessary. The team met daily for a scrum
          meeting, led by our scrum master. The team was loosely broken up into
          front-end, back-end, and algorithms developers, where over time I
          became one of the lead engineers for the front-end team. At the end of
          each sprint, we held a retrospective meeting where we discussed what
          went well, what went wrong, what we could have done better, and gave
          shout-outs to team members that went the extra mile.
        </p>
        <div className="flex items-center gap-4 text-lg justify-between">
          <div className="p-4 rounded-full font-semibold border border-stone-300 w-[20%] shadow-inner flex items-center justify-center gap-3">
            <CircleQuestionMark size={16} />
            Requirements
          </div>
          <ChevronRight size={16} />
          <div className="p-4 rounded-full font-semibold border border-stone-300 w-[20%] shadow-inner flex items-center justify-center gap-3">
            <PencilLine size={16} />
            Planning
          </div>
          <ChevronRight size={16} />
          <div className="p-4 rounded-full font-semibold border border-stone-300 w-[20%] shadow-inner flex items-center justify-center gap-3">
            <CodeXml size={16} />
            Development
          </div>
          <ChevronRight size={16} />
          <div className="p-4 rounded-full font-semibold border border-stone-300 w-[20%] shadow-inner flex items-center justify-center gap-3">
            <MessageCircle size={16} />
            Retrospective
          </div>
        </div>
      </div>

      <FeatureSection />

      <div className="max-w-7xl w-full space-y-12">
        <h3 className="font-doto font-bold text-stone-500 text-3xl">
          Key Takeaways
        </h3>
        <div className="space-y-6">
          <div className="flex items-start gap-6">
            <Laptop className="w-8 h-8 text-stone-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold mb-2">Full-Stack Development</h4>
              <p>
                Although I focused on front-end, I spent time interacting with
                the back-end and I got a lot of valuable experience with
                creating full-stack features.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <Crown className="w-8 h-8 text-stone-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold mb-2">Leadership</h4>
              <p>
                I didn&apos;t start out a lead developer, but by the end of the
                term I had taken a leadership role. Team members came to me with
                questions, and I was able to develop my leadership skills.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <Lightbulb className="w-8 h-8 text-stone-400 hrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold mb-2">Agile/Scrum</h4>
              <p>
                This was my first time using the Agile methodology for software
                development, and the fast paced nature of 1-week sprints was
                overwhelming at times, but effective.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="leading-relaxed">
            All in all, this project was an incredible learning experience for
            me! It was the first time I took on a large full-stack application
            like this, and working in a team this large on a software
            development project was a first too. I got the chance to take on a
            leadership role, and I learned a lot about the Agile software
            development process. I also learned a lot about the importance of
            communication in a team, and how to work with people who have
            different skill sets and backgrounds than me. I&apos;ve known I have
            a passion for front-end development for a while, and this was a
            great opportunity to throw myself into a large UI undertaking.
            Overall, I’m really proud of the work we did!
          </p>
        </div>
        <Link href={"/dct"}>
          <div className="rounded border border-stone-300 p-6 mt-16 flex items-center justify-between hover:-rotate-2 transition-all cursor-pointer hover:bg-stone-200">
            <div>
              <p className="font-semibold text-lg">Next Project</p>
              <p>IQP Data Collection Tool</p>
            </div>
            <div className="text-sky-600 font-semibold flex items-center gap-2">
              Keep Going
              <ArrowRight size={16} />
            </div>
          </div>
        </Link>
      </div>
    </ProjectPage>
  );
}
