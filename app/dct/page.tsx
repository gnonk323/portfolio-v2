"use client";

import * as si from "simple-icons";
import ProjectPage from "@/components/ProjectPage";
import Hero from "@/components/dct/DCTHero";
import DCTFeatureSection from "@/components/dct/DCTFeatureSection";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { NextProjectButton } from "@/components/Button";
import { Paragraph, SubHeading } from "@/components/Typography";
import Separator from "@/components/Separator";

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

  const imageGrid = [
    { title: "Manage Team", src: "/images/dct/manage-team.png" },
    { title: "Project Overview", src: "/images/dct/project-overview.png" },
    { title: "Dashboard", src: "/images/dct/dashboard.png" },
    { title: "Help Modal", src: "/images/dct/help-modal.png" },
  ];
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

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
      <div className="max-w-7xl w-full lg:space-y-12 space-y-6">
        <img
          src={"/images/dct/monteverde.jpeg"}
          alt="Monteverde, Costa Rica"
          className="rounded w-full h-96 object-cover mb-8"
        />
        <SubHeading>What is the IQP?</SubHeading>
        <div className="flex lg:gap-8 gap-4">
          <div>
            <p className="text-8xl font-serif">&quot;</p>
          </div>
          <div>
            <Paragraph className="lg:text-left text-right">
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
            </Paragraph>
            <Paragraph className="text-right italic mt-2">
              - WPI Website
            </Paragraph>
          </div>
        </div>
        <div className="flex items-center justify-around text-center lg:mx-32">
          <div>
            <p className="font-bold lg:text-5xl text-2xl">1,200</p>
            <Paragraph>Students/Year</Paragraph>
          </div>
          <div>
            <p className="font-bold lg:text-5xl text-2xl">50+</p>
            <Paragraph>Global Project Centers</Paragraph>
          </div>
          <div>
            <p className="font-bold lg:text-5xl text-2xl">31</p>
            <Paragraph>Countries</Paragraph>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full">
        <Separator className="lg:hidden block mb-8" />
        <div className="lg:space-y-8 space-y-6 lg:mb-16 mb-8">
          <SubHeading>The Problem</SubHeading>
          <Paragraph>
            The IQP is a research project, and so it requires students to
            collect qualitative and quantitative data, conduct interviews, and
            distribute surveys to complete their reports. However, each project
            varies greatly, in terms of geographical location, subject matter,
            objective, and of course, research methods. During my IQP in
            Monteverde, Costa Rica, my group used an array of softwares and
            websites to conduct our research. This proved complicated and
            frustrating at times.
          </Paragraph>
        </div>
        <div className="lg:space-y-8 space-y-6">
          <SubHeading>UX Research</SubHeading>
          <div className="lg:space-y-6 space-y-4 leading-relaxed">
            <Paragraph>
              Before jumping into writing code, we had to conduct some research
              of our own. As a group, we reviewed 20 previous IQP reports to
              quantify which research methods were most commonly used, so we
              would be able to focus our app on the best areas. To minimize
              error, we peer reviewed each other&apos;s work to ensure accuracy
              of our findings.
            </Paragraph>
            <Paragraph>
              We also researched other existing data collection apps, to see
              what features they had and didn&apos;t have. We found that
              existing apps lacked features important to IQP students, while
              having extraneous features geared towards other types of users.
            </Paragraph>
          </div>
        </div>
        <Separator className="lg:hidden block mt-8" />
      </div>

      <DCTFeatureSection />

      <div className="max-w-7xl w-full lg:space-y-8 space-y-6">
        <Separator className="lg:hidden block" />
        <SubHeading>
          <AnimatePresence mode="wait">
            <motion.span
              key={selectedImageIndex ?? "default"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="inline-block"
            >
              {selectedImageIndex === null
                ? "More Screenshots"
                : imageGrid[selectedImageIndex].title}
            </motion.span>
          </AnimatePresence>
        </SubHeading>

        <AnimatePresence mode="wait">
          {selectedImageIndex !== null ? (
            <motion.div
              key="expanded"
              className="rounded bg-stone-300 p-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <img
                src={imageGrid[selectedImageIndex].src}
                alt={imageGrid[selectedImageIndex].title}
                className="rounded cursor-pointer"
                onClick={() => setSelectedImageIndex(null)}
              />
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              className="grid grid-cols-2 gap-2 bg-stone-300 rounded p-2"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
            >
              {imageGrid.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.title}
                  className="rounded hover:drop-shadow-md transition-all cursor-pointer"
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-7xl w-full lg:space-y-12 space-y-8 lg:m-0 mb-6">
        <Separator className="lg:hidden block" />
        <div className="lg:space-y-8 space-y-6">
          <SubHeading>Closing Notes</SubHeading>
          <Paragraph>
            This project was a great stepping stone for my full stack
            development skills. I took on a large workload of varying tasks,
            which gave me a deeper understanding across the stack. It was also a
            great learning experience for development in a remote team, as the
            main development window was the summer of 2024. Not only did I have
            to balance time between this project and my internship, but the
            importance of a robust continuous integration plan is emphasized
            when the team can&apos;t meet in person.
          </Paragraph>
        </div>
        <Separator className="lg:hidden block" />

        <NextProjectButton name="Consensus" href={"/consensus"} />
      </div>
    </ProjectPage>
  );
}
