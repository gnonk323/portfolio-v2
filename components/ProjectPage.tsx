"use client";

import * as si from "simple-icons";
import { useState, useEffect } from "react";
import React from "react";
import NavBar from "./NavBar";
import { ArrowUpRight } from "lucide-react";
import { TechStackBadge } from "./Cards";
import { MainHeading, SubHeading } from "./Typography";
import ContactFooter from "./ContactFooter";

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
  const [showProjectTitle, setShowProjectTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowProjectTitle(window.scrollY > 80);
    };
  
    window.addEventListener("scroll", handleScroll, { passive: true });
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar projectTitle={title} showProjectTitle={showProjectTitle} />

      <div>
        <section className="lg:max-h-screen bg-background font-sans relative z-10 mt-18 pt-8 px-8 pb-16">
          <div className="space-y-6">
            <SubHeading className="m-0">PROJECT</SubHeading>
            <div className="flex md:items-center md:justify-between flex-col md:flex-row">
              <MainHeading>{title}</MainHeading>
              <div className="flex items-center gap-4 md:text-base text-sm md:m-0 mt-2">
                {links.map((link, i) => (
                  <a
                    key={`project-link-${i}`}
                    className="cursor-pointer hover:underline flex items-center gap-1 text-right"
                    href={link.url}
                    target="_blank"
                  >
                    {link.name}
                    <ArrowUpRight className="shrink-0" size={16} />
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
            className="flex items-center justify-center bg-background border-t border-stone-300 border-dotted font-sans relative z-10 px-8 py-16"
          >
            {child}
          </section>
        ))}

        <div className="border-t border-dashed border-stone-300">
          <ContactFooter />
        </div>
      </div>
    </>
  );
}
