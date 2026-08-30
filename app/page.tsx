"use client";

import { ProjectCard } from "@/components/Cards";
import { ArrowUpRight, ArrowDown, ArrowRight, User } from "lucide-react";
import ContactFooter from "@/components/ContactFooter";
import NavBar from "@/components/NavBar";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Paragraph } from "@/components/Typography";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const elementTop = el.getBoundingClientRect().top + window.scrollY - 100;

  window.scrollTo({
    top: elementTop,
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
      <NavBar />
      <div className="font-sans relative z-10">
        <section className="relative overflow-hidden">

          <div
            className="absolute -z-10 inset-0 opacity-60
                  bg-[radial-gradient(circle,#e11d48_1px,transparent_1px)]
                  bg-size-[24px_24px]"
          ></div>

          <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-6 px-6 pt-20 pb-16 text-center">

            <h1 className="font-doto font-bold tracking-tight text-4xl sm:text-6xl md:text-7xl">
              Gustave Montana
            </h1>

            <p className="max-w-lg text-balance text-base text-stone-600 sm:text-lg">
              Building AI-native, powerful club management software at{" "}
              <a
                href="https://theclubspot.com/"
                target="_blank"
                className="font-medium hover:underline text-rose-600"
              >
                Clubspot
              </a>. Based in SF, WPI computer science class of &apos;25.
            </p>

            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              <Button
                className="border-foreground bg-foreground px-5 py-2.5 text-base text-background hover:bg-foreground/90"
                onClick={() => scrollToSection("about")}
              >
                About Me
                <ArrowRight size={16} />
              </Button>
              <Link href="/gustave-montana-resume.pdf" target="_blank">
                <Button className="px-5 py-2.5 text-base">
                  <User size={16} />
                  Resume
                </Button>
              </Link>
            </div>

            <button
              className="mt-10 cursor-pointer rounded-full p-3 text-stone-400 transition-colors hover:bg-stone-200/60 hover:text-foreground animate-bounce"
              onClick={() => scrollToSection("about")}
              aria-label="Scroll to projects"
            >
              <ArrowDown size={20} />
            </button>
          </div>
        </section>
        <div id="about" className="p-8 py-8 border-t border-t-stone-300 bg-background">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:my-12 mt-6 mx-auto max-w-7xl">
            <div className="relative flex items-center justify-center shrink-0 md:mr-12 mb-8 md:mb-0 overflow-hidden">
              <motion.img
                onClick={handleImageClick}
                src={stache ? "/images/me/gustave-montana-stache.jpg" : "/images/me/gustave-montana.jpg"}
                alt="Me"
                className="relative rounded-2xl z-10 scale-85 drop-shadow-lg hover:drop-shadow-xl transition-shadow"
                whileTap={{ scale: 0.96 }}
                whileHover={{
                  scale: 1.04,
                  rotate: 2,
                }}
              />
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 fill-current text-rose-600 w-full h-full z-0 scale-150 mt-4">
                <path fill="#FF0066" d="M63,-20.5C71.2,4.7,60.2,36.2,40.2,49.3C20.2,62.4,-8.8,57.2,-31.7,41.1C-54.6,25,-71.5,-1.8,-65.2,-24.5C-58.9,-47.1,-29.5,-65.4,-1,-65.1C27.4,-64.7,54.8,-45.7,63,-20.5Z" transform="translate(100 100)" />
              </svg>
            </div>
            <div className="max-w-3xl space-y-6">
              <h2 className="font-doto font-bold text-3xl">ABOUT ME</h2>
              <Paragraph>
                Welcome to my website, I hope you like it! I graduated from{" "}
                <a
                  className="hover:underline text-rose-600 cursor-pointer"
                  href="https://www.wpi.edu/academics/departments/computer-science"
                  target="_blank"
                >
                  Worcester Polytechnic Institute (WPI)
                </a>
                {" "}in May 2025 with a B.S. in Computer Science and a minor in Data Science.
                Now I&apos;m a full stack software engineer at{" "}
                <a
                  className="hover:underline text-rose-600 cursor-pointer"
                  href="https://theclubspot.com"
                  target="_blank"
                >
                  Clubspot
                </a>
                {" "}in San Francisco, working on cloud-native enterprise 
                infrastructure and next-gen club management software.
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
              <Paragraph>In my free time I love to ski, sail, bike, play video games, write code, and learn new things.</Paragraph>
              <button>
                <Link href={"/adventures"} className="font-semibold text-rose-600 flex items-center gap-2 hover:translate-x-1 transition">
                  Browse my adventures gallery
                  <ArrowRight size={16} className=""></ArrowRight>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div id="projects" className="p-8 py-8 border-y border-dashed border-stone-300">
          <div className="flex items-center justify-between">
            <h2 className="font-doto font-bold text-3xl">(some) PROJECTS</h2>
            <a href="https://github.com/gnonk323/portfolio-v2" target="_blank">
              <Button className="md:flex hidden">
                This site is open source on GitHub!
                <ArrowUpRight size={16} />
              </Button>
            </a>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-4 my-8">
            <ProjectCard
              title="Hospital Kiosk for BWH"
              description="Prototype Kiosk Web App for Brigham and Women's Hospital in Boston, MA and presented to hospital stakeholders. Capable of pathfinding and so much more!"
              date="2024"
              href="/kiosk"
            />
            <ProjectCard
              title="Random Monkeys"
              description="Shuffle monkey pictures (courtesy of Unsplash) and save your favorites to your monkey library."
              date="2025"
              href="https://monkeys.gusmontana.com"
              newTab
            />
            <ProjectCard
              title="IQP Data Collection Tool"
              description="An app for collecting various types of data in a team, designed for WPI's own IQP study abroad program. Geotagging, AI transcription, file storage, and more."
              date="2024"
              href="/dct"
            />
          </div>
          <a href="https://github.com/gnonk323/portfolio-v2" target="_blank">
            <Button className="md:hidden flex">
              This site is open source on GitHub!
              <ArrowUpRight size={16} />
            </Button>
          </a>
        </div>
        <ContactFooter />
      </div>
    </>
  );
}