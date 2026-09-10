"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, animate, useMotionValue } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SubHeading } from "./Typography";
import { cn } from "@sglara/cn";

export interface FeatureItem {
  title: string;
  description: string;
  content: ReactNode;
}

interface FeatureSectionProps {
  heading?: string;
  features: FeatureItem[];
}

export default function FeatureSection({
  heading = "Features",
  features,
}: FeatureSectionProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [slideWidth, setSlideWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const x = useMotionValue(0);

  const gap = 24;
  const lastIndex = features.length - 1;

  useEffect(() => {
    const measure = () => {
      const slide = trackRef.current?.firstElementChild;

      if (!slide) return;

      setSlideWidth(slide.getBoundingClientRect().width);
    };

    measure();

    const observer = new ResizeObserver(measure);

    if (viewportRef.current) {
      observer.observe(viewportRef.current);
    }

    if (trackRef.current) {
      observer.observe(trackRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getPosition = (index: number) => {
    if (!slideWidth) return 0;

    return -(index * (slideWidth + gap));
  };

  const goTo = (index: number) => {
    const nextIndex = Math.max(
      0,
      Math.min(index, lastIndex),
    );

    setCurrentIndex(nextIndex);

    animate(x, getPosition(nextIndex), {
      type: "spring",
      stiffness: 400,
      damping: 40,
      mass: 0.8,
    });
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: {
      offset: { x: number };
      velocity: { x: number };
    },
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    const threshold = slideWidth * 0.15;

    const shouldGoNext =
      offset < -threshold || velocity < -500;

    const shouldGoPrevious =
      offset > threshold || velocity > 500;

    if (shouldGoNext && currentIndex < lastIndex) {
      goTo(currentIndex + 1);
      return;
    }

    if (shouldGoPrevious && currentIndex > 0) {
      goTo(currentIndex - 1);
      return;
    }

    // The ghost card is never a valid position.
    // Any drag that doesn't trigger a real slide change
    // snaps back to the current real card.
    animate(x, getPosition(currentIndex), {
      type: "spring",
      stiffness: 400,
      damping: 40,
      mass: 0.8,
    });
  };

  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < lastIndex;

  return (
    <section className="w-full space-y-4 md:space-y-6">
      <div className="mx-auto flex max-w-7xl items-end justify-between gap-4">
        <SubHeading>{heading}</SubHeading>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => goTo(currentIndex - 1)}
            disabled={!canGoLeft}
            aria-label="Previous feature"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full border border-foreground/20
              transition
              hover:bg-foreground hover:text-background
              disabled:pointer-events-none
              disabled:opacity-20
            "
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={() => goTo(currentIndex + 1)}
            disabled={!canGoRight}
            aria-label="Next feature"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full border border-foreground/20
              transition
              hover:bg-foreground hover:text-background
              disabled:pointer-events-none
              disabled:opacity-20
            "
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        className="relative w-full overflow-hidden"
      >
        {canGoLeft && (
          <>
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-background to-transparent sm:w-12 lg:w-20" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-background to-transparent sm:w-12 lg:w-20" />
          </>
        )}

        <motion.div
          ref={trackRef}
          className={cn(
            "flex w-max gap-6 touch-pan-y select-none py-2",
            canGoLeft ? "md:px-12 lg:px-16" : "",
          )}
          style={{ x }}
          drag="x"
          dragMomentum={false}
          dragElastic={0.08}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: "grabbing" }}
        >
          {features.map((feature) => (
            <article
              key={feature.title}
              className="
                w-[88vw]
                shrink-0
                rounded-xl
                border
                border-foreground/10
                bg-background
                p-5
                shadow-sm
                sm:w-[78vw]
                sm:p-7
                lg:w-[60vw]
                lg:p-10
              "
            >
              <div className="mb-4 max-w-2xl">
                <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-stone-700 opacity-65 sm:text-base">
                  {feature.description}
                </p>
              </div>

              <div className="w-full space-y-8">
                {feature.content}
              </div>
            </article>
          ))}

          {/* Ghost card: provides something to drag against,
              but is never a valid carousel position. */}
          <div
            aria-hidden="true"
            className="
              w-[88vw]
              shrink-0
              rounded-xl
              border
              border-foreground/5
              bg-foreground/[0.035]
              sm:w-[78vw]
              lg:w-[60vw]
            "
          />
        </motion.div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          {features.map((feature, index) => (
            <button
              key={feature.title}
              type="button"
              aria-label={`Go to ${feature.title}`}
              onClick={() => goTo(index)}
              className="group p-1"
            >
              <span
                className={`
                  block h-1.5 rounded-full transition-all duration-300
                  ${
                    index === currentIndex
                      ? "w-8 bg-foreground"
                      : "w-1.5 bg-foreground/20 group-hover:bg-foreground/40"
                  }
                `}
              />
            </button>
          ))}
        </div>

        <span className="text-xs tabular-nums opacity-40">
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(features.length).padStart(2, "0")}
        </span>
      </div>

      <div className="flex justify-center text-xs opacity-40 sm:hidden">
        <span>Swipe to explore</span>
      </div>
    </section>
  );
}