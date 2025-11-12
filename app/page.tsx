"use client";

import ParticlesBackground from "@/components/ParticlesBackground";
import { ProjectCard } from "@/components/Cards";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import ContactFooter from "@/components/ContactFooter";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Paragraph } from "@/components/Typography";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [stache, setStache] = useState(false);

  const handleImageClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setStache(true);
      }
      return newCount;
    });
  };

  useEffect(() => {
    if (clickCount > 0 && clickCount < 5) {
      const timer = setTimeout(() => {
        setClickCount(0);
      }, 2000);
      return () => clearTimeout(timer); // Cleanup the timer on unmount or when clickCount changes
    }
  }, [clickCount]);

  return (
    <>
      <ParticlesBackground />
      <div className="font-sans fixed top-0 w-full py-4 px-8 md:flex items-center justify-between z-20 mix-blend-difference text-background hidden">
        <div>
          <h1 className="font-bold font-doto text-xl">Gustave Montana</h1>
        </div>
        <div className="flex items-center gap-6">
          <button
            className="cursor-pointer hover:underline"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </button>
          <button
            className="cursor-pointer hover:underline"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </button>
          <Link className="cursor-pointer hover:underline" href={"/adventures"}>
            Adventures
          </Link>
          <Link
            className="flex gap-1 items-center cursor-pointer hover:underline"
            href={"/gustave-montana-resume.pdf"}
            target={"_blank"}
          >
            Resume
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <button
            className="cursor-pointer hover:underline"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </button>
        </div>
      </div>
      <div className="font-sans relative z-10">
        <div className="h-screen flex flex-col items-center justify-center gap-4 text-center text-xl text-background">
          <div className="md:text-7xl text-3xl">
            <div className="font-light">HI, MY NAME IS</div>
            <div className="font-bold">GUSTAVE MONTANA</div>
          </div>
          <div className="font-doto">• • •</div>
          <div className="font-light">Full Stack Software Engineer</div>
          <ArrowDown className="mt-16 animate-bounce" />
        </div>
        <div id="projects" className="bg-background md:p-8 py-8 px-4">
          <div className="flex items-center justify-between">
            <h2 className="font-doto font-bold text-3xl">PROJECTS</h2>
            <a href="https://github.com/gnonk323/portfolio-v2" target="_blank">
              <button className="md:flex hidden items-center gap-2 cursor-pointer px-3 py-1 hover:bg-stone-300 transition-colors rounded-full border border-stone-300">
                This site is open source on GitHub!
                <ArrowUpRight size={16} />
              </button>
            </a>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-4 my-12">
            {/*<ProjectCard
              title="Dual-Portal Automotive Repair Management System"
              description="App for an auto repair shop in Denver, CO, designed to streamline their repair process and improve transparency with the customer."
              date="2025"
              href=""
            />*/}
            <ProjectCard
              title="Hospital Kiosk for BWH"
              description="Kiosk Web App for Brigham and Women's Hospital in Boston, MA. Capable of hospital pathfinding and so much more!"
              date="2024"
              href="/kiosk"
            />
            <ProjectCard
              title="IQP Data Collection Tool"
              description="An app for collecting various types of data in a team, designed for WPI's own IQP study abroad program."
              date="2024"
              href="/dct"
            />
            <ProjectCard
              title="Consensus"
              description="Daily game where you rank 4 things and see if you can guess the most common answer."
              date="2025"
              href="/consensus"
            />
            <ProjectCard
              title="Random Monkeys"
              description="Shuffle monkey pictures (courtesy of Unsplash) and save your favorites to your monkey library."
              date="2025"
              href="https://random-monkeys.vercel.app/"
              newTab
            />
          </div>
          <a href="https://github.com/gnonk323/portfolio-v2" target="_blank">
            <button className="md:hidden flex items-center gap-2 cursor-pointer px-3 py-1 hover:bg-stone-300 transition-colors rounded-full border border-stone-300">
              This site is open source on GitHub!
              <ArrowUpRight size={16} />
            </button>
          </a>
        </div>
        <div className="h-16" />
        <div id="about" className="bg-background md:p-8 py-8 px-4">
          <h2 className="font-doto font-bold text-3xl">ABOUT ME</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:my-12 mt-6">
            <motion.img
              onClick={handleImageClick}
              src={
                stache
                  ? "/images/gustave-montana-stache.jpg"
                  : "/images/gustave-montana.jpg"
              }
              alt="Me"
              className="md:mr-8 rounded mb-8 md:mb-0"
              whileTap={{ scale: 0.96 }}
            />
            <div className="max-w-3xl space-y-6">
              <Paragraph>
                Welcome to my website, I hope you like it! I graduated from{" "}
                <a
                  className="hover:underline text-sky-600 cursor-pointer"
                  href="https://www.wpi.edu/academics/departments/computer-science"
                >
                  Worcester Polytechnic Institute (WPI)
                </a>{" "}
                in May 2025 with a BS in Computer Science and a minor in Data
                Science, and I&apos;m looking to start my career in software
                engineering. Through my personal and academic experience,
                I&apos;ve found a passion for UI/UX design. I find that
                front-end design and development falls at the intersection of
                art and technology, and I really enjoy the challenge of creating
                something new, unique, and beautiful while keeping it functional
                and user-friendly.
              </Paragraph>
              <Paragraph>
                I am proficient in front-end and back-end technologies, I
                specialize in creating solutions using TypeScript, React,
                Node.js, and related frameworks (Next.js). I have a strong
                foundation in RESTful APIs and database management.
              </Paragraph>
              <Paragraph>
                I also have experience with Python for machine learning and data
                analysis. I have worked on projects involving data
                preprocessing, feature engineering, and model training using
                libraries such as Pandas, NumPy, Scikit-learn, and TensorFlow.
              </Paragraph>
              <Paragraph>
                I love to ski, sail, fish, bike, play video games, write code,
                and learn new things.
              </Paragraph>
              <div>
                <Link href={"/adventures"}>
                  <Button>Browse my adventures gallery</Button>
                </Link>
              </div>
              <Paragraph className="italic">
                I live in Connecticut and am looking for opportunities in the
                Boston or New York City areas.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="h-16" />
        <ContactFooter />
      </div>
    </>
  );
}
