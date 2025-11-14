"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./Button";
import ContactDialog from "./ContactDialog";
import { usePathname } from "next/navigation";
import { cn } from "@sglara/cn";

export default function NavBar({
  projectTitle,
  showProjectTitle,
}: {
  projectTitle?: string;
  showProjectTitle?: boolean;
}) {
  const pathname = usePathname();

  const [showContactDialog, setShowContactDialog] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [projectMenuOpen, setProjectMenuOpen] = useState(false);

  return (
    <>
      <div className="font-sans fixed top-0 w-screen py-4 sm:px-8 px-4 flex items-center justify-between z-20 bg-background/30 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Link
            className="font-bold font-doto md:text-xl sm:text-base"
            href="/"
          >
            Gustave Montana
          </Link>
          {showProjectTitle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:flex gap-4 hidden"
            >
              <div className="text-stone-400">|</div>
              <div className="font-semibold opacity-90">{projectTitle}</div>
            </motion.div>
          )}
        </div>

        {/* Desktop navigation */}
        <div className="items-center gap-2 hidden sm:flex">
          <Link
            className="cursor-pointer px-3 py-0.5 rounded-full hover:bg-stone-300 transition-colors"
            href={"/"}
          >
            Home
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setProjectMenuOpen(true)}
            onMouseLeave={() => setProjectMenuOpen(false)}
          >
            <div className="flex gap-2 items-center cursor-pointer px-3 py-0.5 rounded-full group-hover:bg-stone-300 transition-colors">
              Projects
              <ChevronDown size={16} />
            </div>

            <AnimatePresence>
              {projectMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-0 mt-2 w-40 rounded bg-background shadow-md border border-stone-300 p-1.5 space-y-1 text-sm"
                >
                  <Link
                    className={cn(
                      "px-2 py-1 hover:bg-stone-300 cursor-pointer rounded block",
                      pathname === "/kiosk" && "font-bold bg-stone-300",
                    )}
                    href={"/kiosk"}
                  >
                    BWH App
                  </Link>
                  <Link
                    className={cn(
                      "px-2 py-1 hover:bg-stone-300 cursor-pointer rounded block",
                      pathname === "/dct" && "font-bold bg-stone-300",
                    )}
                    href={"/dct"}
                  >
                    Data Collection Tool
                  </Link>
                  <Link
                    className={cn(
                      "px-2 py-1 hover:bg-stone-300 cursor-pointer rounded block",
                      pathname === "/consensus" && "font-bold bg-stone-300",
                    )}
                    href={"/consensus"}
                  >
                    Consensus
                  </Link>
                  <Link
                    className="px-2 py-1 hover:bg-stone-300 cursor-pointer rounded block"
                    href={""}
                  >
                    Random Monkeys
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            className="cursor-pointer px-3 py-0.5 rounded-full hover:bg-stone-300 transition-colors"
            href={"/adventures"}
          >
            Adventures
          </Link>
          <Link
            className="flex gap-1 items-center cursor-pointer px-3 py-0.5 rounded-full hover:bg-stone-300 transition-colors"
            href={"/gustave-montana-resume.pdf"}
            target={"_blank"}
          >
            Resume
            <ArrowUpRight size={16} />
          </Link>
          <button
            className="py-0.5 px-3 rounded-full border border-foreground cursor-pointer hover:bg-foreground hover:text-background transition-colors"
            onClick={() => setShowContactDialog(true)}
          >
            Contact
          </button>
        </div>

        {/* Mobile menu toggle */}
        {/*<div className="sm:hidden">*/}
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          aria-label="Toggle menu"
          className="sm:hidden"
        >
          {showMenu ? <X size={20} /> : <Menu size={20} />}
        </button>
        {/*</div>*/}
      </div>

      {/* Mobile Popover Menu */}
      {showMenu && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="sm:hidden fixed top-14 right-4 bg-background border border-stone-300 shadow-md rounded p-4 z-30 flex flex-col space-y-2 text-sm"
        >
          <Link
            href="/"
            className="hover:underline"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            href="/adventures"
            className="hover:underline"
            onClick={() => setShowMenu(false)}
          >
            Adventures
          </Link>
          <Link
            href="/gustave-montana-resume.pdf"
            target="_blank"
            className="flex gap-1 items-center hover:underline"
            onClick={() => setShowMenu(false)}
          >
            Resume
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Button
            className="py-1 px-3 rounded-full border border-foreground hover:bg-foreground hover:text-background transition-colors mt-2"
            onClick={() => {
              setShowContactDialog(true);
              setShowMenu(false);
            }}
          >
            Contact
          </Button>
        </motion.div>
      )}

      {/* Contact Dialog */}
      {showContactDialog && (
        <ContactDialog setShowContactDialogAction={setShowContactDialog} />
      )}
    </>
  );
}
