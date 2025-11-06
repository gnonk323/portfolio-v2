import ParticlesBackground from "@/components/ParticlesBackground";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/Button";

export default function KioskPage() {
  return (
    <>
      <ParticlesBackground />
      <div className="font-sans fixed top-0 w-screen py-4 px-8 flex items-center justify-between z-20 bg-background/20 backdrop-blur-md">
        <div>
          <h1 className="font-bold font-doto text-xl">Gustave Montana</h1>
        </div>
        <div className="flex items-center gap-6">
          <Link href={"/"} className="cursor-pointer hover:underline">
            Home
          </Link>
          {/*<a className="cursor-pointer hover:underline">Adventures</a>*/}
          <a
            className="flex gap-1 items-center cursor-pointer hover:underline"
            href="/gustave-montana-resume.pdf"
            target="_blank"
          >
            Resume
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a className="py-1 px-3 rounded-full border border-foreground cursor-pointer hover:bg-foreground hover:text-background transition-colors">
            Contact
          </a>
        </div>
      </div>
      <div className="bg-background font-sans relative z-10 p-8 pt-24">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-doto font-bold text-3xl">PROJECT</h2>
            <h1 className="font-bold text-5xl">
              Kiosk for Brigham and Women&apos;s Hospital
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <a className="cursor-pointer hover:underline flex items-center gap-1">
              Report
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a className="cursor-pointer hover:underline flex items-center gap-1">
              User Manual
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="h-screen bg-background"></div>
      </div>
    </>
  );
}
