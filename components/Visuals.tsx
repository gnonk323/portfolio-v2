"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export interface ImageTile {
  src: string;
  alt: string;
  location: string;
  locationHref: string;
  caption: string;
}

function useCanHover(): boolean {
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const query = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateHover = (e: MediaQueryListEvent) => {
      setCanHover(e.matches);
    };

    requestAnimationFrame(() => setCanHover(query.matches));

    query.addEventListener("change", updateHover);

    return () => {
      query.removeEventListener("change", updateHover);
    };
  }, []);

  return canHover;
}

export function AdventureImage({
  src,
  alt,
  location,
  locationHref,
  caption,
}: ImageTile) {
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const canHover = useCanHover();

  const maxAngle = 3;

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const distances = {
      top: y,
      bottom: rect.height - y,
      left: x,
      right: rect.width - x,
    };

    const closestSide = Object.entries(distances).reduce((a, b) =>
      a[1] < b[1] ? a : b,
    )[0];

    let rotateDirection = 1;
    let distanceFromCenter = 0;

    if (closestSide === "top" || closestSide === "bottom") {
      const offset = x - centerX;
      distanceFromCenter = Math.abs(offset) / centerX;
      const isRight = offset > 0;
      rotateDirection =
        (closestSide === "top" && isRight) ||
        (closestSide === "bottom" && !isRight)
          ? 1
          : -1;
    } else {
      const offset = y - centerY;
      distanceFromCenter = Math.abs(offset) / centerY;
      const isBelow = offset > 0;
      rotateDirection =
        (closestSide === "right" && isBelow) ||
        (closestSide === "left" && !isBelow)
          ? 1
          : -1;
    }

    const finalRotation = rotateDirection * distanceFromCenter * maxAngle;
    setRotation(finalRotation);
    setIsHovering(true);
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative overflow-hidden rounded"
      whileHover={
        canHover
          ? {
              scale: 1.05,
              rotate: rotation,
              boxShadow: "0 0 25px 10px rgba(0, 0, 0, 0.25)",
              zIndex: 15,
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
      onMouseEnter={canHover ? handleMouseEnter : undefined}
      onMouseLeave={canHover ? () => setIsHovering(false) : undefined}
    >
      <img src={src} alt={alt} />
      <AnimatePresence>
        {isHovering && canHover && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full bottom-0 bg-linear-to-t from-black/75 to-transparent text-background leading-3 p-4"
          >
            <p>
              📍{" "}
              <a
                href={locationHref}
                target="_blank"
                className="font-bold cursor-pointer hover:underline"
              >
                {location}
              </a>
            </p>
            <p className="text-xs mt-2">{caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function DemoVideo({ src }: { src: string }) {
  return (
    <div className="bg-stone-300 rounded p-2">
      <video autoPlay loop muted className="w-full rounded">
        <source src={src} />
      </video>
    </div>
  );
}

export function DemoImage({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className="p-2 rounded bg-stone-300">
      <img src={src} alt={alt} className="w-full" />
    </div>
  );
}

interface HoverImageProps {
  src: string;
  message: string;
  className?: string;
}

export function HoverImage({ src, message, className }: HoverImageProps) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPos({ x: e.clientX + 12, y: e.clientY + 12 });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative"
    >
      <img src={src} alt={message} className={className} />

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="pointer-events-none fixed z-50 rounded-md bg-stone-800/75 px-3 py-1.5 text-background text-sm whitespace-nowrap"
            style={{ top: pos.y, left: pos.x }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
