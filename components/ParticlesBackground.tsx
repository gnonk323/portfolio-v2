"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadLinksPreset } from "@tsparticles/preset-links";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      preset: "links",
      background: {
        color: { value: "#000" }, // or transparent if you prefer
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
        },
      },
    }),
    [],
  );

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // stays behind other elements
      }}
    />
  );
}
