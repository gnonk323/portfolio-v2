"use client";

import ParticlesBackground from "@/components/ParticlesBackground";
import { ProjectCard } from "@/components/Cards";
import Image from "next/image";
import { Mail, FileUser, ArrowUpRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <div className="font-sans fixed top-0 w-screen py-4 px-8 flex items-center justify-between z-20 mix-blend-difference text-background">
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
          {/*<a className="cursor-pointer hover:underline">Adventures</a>*/}
          <a
            className="flex gap-1 items-center cursor-pointer hover:underline"
            href="/gustave-montana-resume.pdf"
            target="_blank"
          >
            Resume
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            className="py-1 px-3 rounded-full border border-background cursor-pointer hover:bg-background hover:text-foreground transition-colors"
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
          <div className="text-7xl">
            <div className="font-light">HI, MY NAME IS</div>
            <div className="font-bold">GUSTAVE MONTANA</div>
          </div>
          <div className="font-doto">• • •</div>
          <div className="font-light">Full-Stack Software Engineer</div>
          <ArrowDown className="mt-16 animate-bounce" />
        </div>
        <div id="projects" className="bg-background p-8">
          <h2 className="font-doto font-bold text-3xl">PROJECTS</h2>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 my-12">
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
        </div>
        <div className="h-16" />
        <div id="about" className="bg-background p-8">
          <h2 className="font-doto font-bold text-3xl">ABOUT ME</h2>
          <div className="flex items-center justify-center my-12">
            <Image
              src={"/images/gustave-montana.jpg"}
              alt="Me"
              width={400}
              height={400}
              className="mr-8 rounded-xl"
            />
            <div className="max-w-3xl space-y-6">
              <p>
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
              </p>
              <p>
                I am proficient in front-end and back-end technologies, I
                specialize in creating solutions using TypeScript, React,
                Node.js, and related frameworks (Next.js). I have a strong
                foundation in RESTful APIs and database management.
              </p>
              <p>
                I also have experience with Python for machine learning and data
                analysis. I have worked on projects involving data
                preprocessing, feature engineering, and model training using
                libraries such as Pandas, NumPy, Scikit-learn, and TensorFlow.
              </p>
              <p>
                I love to ski, sail, fish, bike, play video games, write code,
                and learn new things.
              </p>
              <p className="italic">
                I live in Connecticut and am looking for opportunities in the
                Boston or New York City areas.
              </p>
            </div>
          </div>
        </div>
        <div className="h-16" />
        <div
          id="contact"
          className="bg-background p-8 flex items-center justify-between"
        >
          <h2 className="font-doto font-bold text-3xl">CONTACT</h2>
          <div className="flex items-center gap-4">
            <Link href="/gustave-montana-resume.pdf" target="_blank">
              <Button>
                <FileUser className="w-4 h-4" />
                Resume
              </Button>
            </Link>
            <Link href={"mailto:gmt015@gmail.com"} target="_blank">
              <Button>
                <Mail className="w-4 h-4" />
                Email
              </Button>
            </Link>
            <Link
              href={"https://www.linkedin.com/in/gustave-montana/"}
              target="_blank"
            >
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
                LinkedIn
              </Button>
            </Link>
            <Link href={"https://github.com/gnonk323"} target="_blank">
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
