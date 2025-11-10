"use client";

import * as si from "simple-icons";
import { useState, useEffect, useRef } from "react";
import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import NavBar from "./NavBar";
import { ArrowUpRight } from "lucide-react";
import { TechStackBadge } from "./Cards";

interface ProjectPageProps {
  title: string;
  techStack: { name: string; icon?: si.SimpleIcon }[];
  links?: { name: string; url: string }[];
  heroComponent: React.ReactNode;
  children?: React.ReactNode;
}

export default function ProjectPage({
  title,
  techStack,
  links = [],
  heroComponent,
  children,
}: ProjectPageProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const [showProjectTitle, setShowProjectTitle] = useState(false);

  useEffect(() => {
    const root = containerRef.current;
    const hero = heroRef.current;
    if (!root || !hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // When the hero is no longer intersecting the scroll container, show the project title
        setShowProjectTitle(!entry.isIntersecting);
      },
      { root, threshold: 0.1 },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ParticlesBackground />
      <NavBar projectTitle={title} showProjectTitle={showProjectTitle} />

      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
      >
        <section
          ref={heroRef}
          className="min-h-screen snap-start bg-background font-sans relative z-10 p-8 pt-20"
        >
          <div className="space-y-6">
            <h2 className="font-doto font-bold text-stone-500 text-3xl m-0">
              PROJECT
            </h2>
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-5xl">
                Kiosk for Brigham and Women&apos;s Hospital
              </h1>
              <div className="flex items-center gap-4">
                {links.map((link, i) => (
                  <a
                    key={`project-link-${i}`}
                    className="cursor-pointer hover:underline flex items-center gap-1"
                    href={link.url}
                    target="_blank"
                  >
                    {link.name}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <TechStackBadge
                  key={i}
                  name={tech.name}
                  svgPath={tech.icon ? tech.icon.path : ""}
                />
              ))}
            </div>
            {heroComponent}
          </div>
        </section>

        {React.Children.map(children, (child, i) => (
          <section
            key={`section-${i}`}
            className="min-h-screen snap-start flex items-center justify-center bg-background font-sans relative z-10 p-8"
          >
            {child}
          </section>
        ))}
      </div>
    </>
  );
}
