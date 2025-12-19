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

const scrollToCenter = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const elementTop = el.getBoundingClientRect().top + window.scrollY;
  const elementHeight = el.offsetHeight;
  const viewportHeight = window.innerHeight;

  const offset = elementTop - viewportHeight / 2 + elementHeight / 2;

  window.scrollTo({
    top: offset,
    behavior: "smooth",
  });
};

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
        <div className="flex items-center gap-2">
          <button
            className="cursor-pointer px-3 py-0.5"
            onClick={() => scrollToCenter("about")}
          >
            About
          </button>
          <button
            className="cursor-pointer px-3 py-0.5"
            onClick={() => scrollToCenter("projects")}
          >
            Projects
          </button>
          <Link className="cursor-pointer px-3 py-0.5" href={"/adventures"}>
            Adventures
          </Link>
          <Link
            className="flex gap-1 items-center cursor-pointer px-3 py-0.5"
            href={"/gustave-montana-resume.pdf"}
            target={"_blank"}
          >
            Resume
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <button
            className="cursor-pointer px-3 py-0.5"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact
          </button>
        </div>
      </div>
      <div className="font-sans relative z-10">
        <div className="h-screen flex flex-col items-center justify-center gap-4 text-center text-xl text-background">
          <div className="md:text-7xl text-3xl">
            <div className="font-light">HI, MY NAME IS</div>
            <div className="font-bold group">
              GUS
              <span className="group-hover:opacity-15 transition-opacity">TAVE</span> MONTANA
            </div>
          </div>
          <div className="font-doto">• • •</div>
          <div className="font-light">
            Full Stack Software Engineer
            {/* at <a href="https://theclubspot.com/" target="_blank" className="hover:bg-rose-600 underline decoration-dotted">Clubspot</a> */}
          </div>
          <button
            className="cursor-pointer p-3 rounded-full hover:bg-stone-200/20 mt-16 animate-bounce transition-colors"
            onClick={() => scrollToCenter("projects")}
          >
            <ArrowDown />
          </button>
        </div>
        <div id="projects" className="bg-background md:p-8 py-8 px-4">
          <div className="flex items-center justify-between">
            <h2 className="font-doto font-bold text-3xl">PROJECTS</h2>
            <a href="https://github.com/gnonk323/portfolio-v2" target="_blank">
              <Button className="md:flex hidden">
                This site is open source on GitHub!
                <ArrowUpRight size={16} />
              </Button>
            </a>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-4 my-8">
            <ProjectCard
              title="MonkeyWrench"
              description="Dual-Portal Automotive Repair Management System for an auto repair shop in Denver, CO, designed to streamline their repair process and improve transparency with the customer."
              date="2025"
              href="/monkeywrench"
            />
            <ProjectCard
              title="Hospital Kiosk for BWH"
              description="Prototype Kiosk Web App for Brigham and Women's Hospital in Boston, MA and presented to hospital stakeholders. Capable of pathfinding and so much more!"
              date="2024"
              href="/kiosk"
            />
            <ProjectCard
              title="IQP Data Collection Tool"
              description="An app for collecting various types of data in a team, designed for WPI's own IQP study abroad program. Geotagging, AI transcription, file storage, and more."
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
              href="https://monkeys.gusmontana.com"
              newTab
            />
            <ProjectCard
              title="Epic Pass Dashboard"
              description="Up-to-date information on snow conditions and weather for each of the Vail-owned ski mountains in New England."
              date="2025"
              href="https://epicdash.gusmontana.com"
              newTab
            />
            {/* <Paragraph className="lg:p-8 p-6 text-stone-500 italic align-middle">
              <span className="font-semibold">More to come!</span> If you&apos;re interested in working with me I&apos;d love to
              hear from you at gmt015@gmail.com or on{" "}
              <a href="https://www.linkedin.com/in/gustave-montana/" target="_blank" className="hover:underline text-rose-600">
                LinkedIn
              </a>
              .
            </Paragraph> */}
          </div>
          <a href="https://github.com/gnonk323/portfolio-v2" target="_blank">
            <Button className="md:hidden flex">
              This site is open source on GitHub!
              <ArrowUpRight size={16} />
            </Button>
          </a>
        </div>
        <div className="h-16" />
        <div id="about" className="bg-background md:p-8 py-8 px-4">
          <h2 className="font-doto font-bold text-3xl">ABOUT ME</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:my-12 mt-6">
            <motion.img
              onClick={handleImageClick}
              src={stache ? "/images/me/gustave-montana-stache.jpg" : "/images/me/gustave-montana.jpg"}
              alt="Me"
              className="md:mr-8 rounded mb-8 md:mb-0"
              whileTap={{ scale: 0.96 }}
            />
            <div className="max-w-3xl space-y-6">
              <Paragraph>
                Welcome to my website, I hope you like it! I graduated from{" "}
                <a
                  className="hover:underline text-rose-600 cursor-pointer"
                  href="https://www.wpi.edu/academics/departments/computer-science"
                  target="_blank"
                >
                  Worcester Polytechnic Institute (WPI)
                </a>{" "}
                in May 2025 with a BS in Computer Science and a minor in Data Science, and I&apos;m looking to start my career
                in software engineering. Through my personal and academic experience, I&apos;ve found a passion for UI/UX
                design. I find that front-end design and development falls at the intersection of art and technology, and I
                really enjoy the challenge of creating something new, unique, and beautiful while keeping it functional and
                user-friendly.
              </Paragraph>
              <Paragraph>
                I am skilled in front-end and back-end technologies; I specialize in creating solutions using TypeScript,
                Node.js, and related frameworks (React, Vue, Next). I have a strong foundation in RESTful APIs and database
                management.
              </Paragraph>
              <Paragraph>
                I also have experience with Python for machine learning and data analysis. I have worked on projects involving
                data preprocessing, feature engineering, and model training using libraries such as Pandas, NumPy, Scikit-learn,
                and TensorFlow.
              </Paragraph>
              <Paragraph>I love to ski, sail, fish, bike, play video games, write code, and learn new things.</Paragraph>
              <div>
                <Button>
                  <Link href={"/adventures"}>Browse my adventures gallery</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16" />
        <ContactFooter />
      </div>
    </>
  );
}
