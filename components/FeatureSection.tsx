"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { FeatureCard } from "./Cards";

export interface FeatureItem {
  title: string;
  description: string;
  content: ReactNode;
}

interface FeatureSectionProps {
  heading?: string;
  features: FeatureItem[];
  columns?: number;
}

export default function FeatureSection({
  heading = "Features",
  features,
  columns = 2,
}: FeatureSectionProps) {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(
    null,
  );

  return (
    <AnimatePresence mode="wait">
      {!selectedFeature ? (
        <motion.div
          key="features"
          className="max-w-7xl w-full space-y-12"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <h3 className="font-doto font-bold text-stone-500 text-3xl">
            {heading}
          </h3>
          <div className={`grid grid-cols-${columns} gap-8`}>
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                onClickAction={() => setSelectedFeature(feature)}
              />
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="selected"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 200, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full max-w-5xl"
        >
          <FeatureSelected
            feature={selectedFeature}
            back={() => setSelectedFeature(null)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FeatureSelected({
  feature,
  back,
}: {
  feature: FeatureItem;
  back: () => void;
}) {
  return (
    <div className="space-y-6">
      <button
        onClick={back}
        className="flex gap-2 items-center px-3 py-1 rounded-full hover:bg-stone-300 cursor-pointer border border-stone-500 transition-colors"
      >
        <ArrowLeft size={16} />
        All Features
      </button>
      <div>
        <h2 className="font-doto font-bold text-2xl text-stone-500">Feature</h2>
        <h3 className="text-3xl font-bold">{feature.title}</h3>
      </div>
      {feature.content}
    </div>
  );
}
