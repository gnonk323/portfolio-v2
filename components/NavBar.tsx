"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./Button";
import ContactDialog from "./ContactDialog";
import { usePathname } from "next/navigation";
import { cn } from "@sglara/cn";

function ProjectDropDownItem({
  name,
  href,
  newTab = false,
  isActive,
}: {
  name: string;
  href: string;
  newTab?: boolean;
  isActive: boolean;
}) {
  return (
    <Link
      className={cn(
        "px-2 py-1 hover:bg-stone-200 cursor-pointer rounded whitespace-nowrap flex items-center gap-1",
        isActive && "font-medium bg-stone-200 text-rose-600"
      )}
      href={href}
      target={newTab ? "_blank" : "_self"}
    >
      {name}
      {newTab && <ArrowUpRight size={12} className="shrink-0" />}
    </Link>
  );
}

function ProjectDropDown({ open, pathname }: { open: boolean; pathname: string }) {
  const links: { name: string; href: string; newTab?: boolean }[] = [
    { name: "MonkeyWrench", href: "/monkeywrench" },
    { name: "Hospital Kiosk", href: "/kiosk" },
    { name: "Data Collection Tool", href: "/dct" },
    { name: "Consensus", href: "/consensus" },
    { name: "Random Monkeys", href: "https://monkeys.gusmontana.com/", newTab: true },
    { name: "Epic Pass Dashboard", href: "https://epicdash.gusmontana.com/", newTab: true },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute left-0 mt-2 w-max rounded bg-background shadow-md border border-stone-300 p-1.5 space-y-1 text-sm flex flex-col"
        >
          {links.map((link, index) => (
            <ProjectDropDownItem
              key={index}
              name={link.name}
              href={link.href}
              newTab={link.newTab}
              isActive={pathname === link.href}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

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

  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const openProjectMenu = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setProjectMenuOpen(true);
  };

  const closeProjectMenu = () => {
    closeTimeout.current = setTimeout(() => {
      setProjectMenuOpen(false);
    }, 120);
  };

  return (
    <>
      <div className="font-sans fixed top-0 w-screen py-4 sm:px-8 px-4 flex items-center justify-between z-20 bg-background backdrop-blur-md border-b border-stone-300">
        <div className="flex items-center gap-4">
          <Link className="font-bold font-doto md:text-xl sm:text-base" href="/">
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
          <Link className="cursor-pointer px-3 py-0.5" href="/">
            Home
          </Link>

          {/* Projects dropdown */}
          <div
            className="relative"
            onMouseEnter={openProjectMenu}
            onMouseLeave={closeProjectMenu}
          >
            <div className="flex gap-2 items-center cursor-pointer px-3 py-0.5">
              Projects
              <ChevronDown size={16} />
            </div>

            <ProjectDropDown open={projectMenuOpen} pathname={pathname} />
          </div>

          <Link
            className="cursor-pointer px-3 py-0.5"
            href="/adventures"
          >
            Adventures
          </Link>

          <Link
            className="flex gap-1 items-center cursor-pointer px-3 py-0.5"
            href="/gustave-montana-resume.pdf"
            target="_blank"
          >
            Resume
            <ArrowUpRight size={16} />
          </Link>

          <Button className="py-0.5 px-3 cursor-pointer" onClick={() => setShowContactDialog(true)}>
            Contact
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          aria-label="Toggle menu"
          className="sm:hidden"
        >
          {showMenu ? <X size={20} /> : <Menu size={20} />}
        </button>
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
          <Link href="/" className="hover:underline" onClick={() => setShowMenu(false)}>
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
            className="flex gap-1 items-center hover:underline m-0"
            onClick={() => setShowMenu(false)}
          >
            Resume
            <ArrowUpRight size={12} className="shrink-0" />
          </Link>

          <div className="h-px bg-stone-300 my-3" />

          <Button
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
