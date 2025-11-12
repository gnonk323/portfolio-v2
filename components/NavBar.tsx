"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "./Button";
import ContactDialog from "./ContactDialog";

export default function NavBar({
  projectTitle,
  showProjectTitle,
}: {
  projectTitle?: string;
  showProjectTitle?: boolean;
}) {
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
              className="flex gap-4"
            >
              <div className="text-stone-400">|</div>
              <div className="font-semibold opacity-90">{projectTitle}</div>
            </motion.div>
          )}
        </div>

        {/* Desktop navigation */}
        <div className="items-center gap-6 hidden sm:flex">
          <Link className="cursor-pointer hover:underline" href={"/"}>
            Home
          </Link>
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
          <Button
            className="py-1 px-3 rounded-full border border-foreground cursor-pointer hover:bg-foreground hover:text-background transition-colors"
            onClick={() => setShowContactDialog(true)}
          >
            Contact
          </Button>
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
