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
      detectRetina: true,
      background: {
        color: { value: "#000" },
      },
      particles: {
        number: {
          value: 80, // desktop default
        },
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
        },
        move: {
          speed: 1.5,
        },
      },
      responsive: [
        {
          maxWidth: 1024, // tablets
          options: {
            particles: {
              number: {
                value: 50,
              },
              links: {
                distance: 120,
              },
            },
          },
        },
        {
          maxWidth: 768, // phones
          options: {
            particles: {
              number: {
                value: 30,
              },
              links: {
                distance: 100,
              },
              move: {
                speed: 1,
              },
            },
          },
        },
      ],
    }),
    [],
  );

  if (!ready) return null;

  return (
    <div className="fixed inset-0 -z-10">
      <Particles id="tsparticles" options={options} className="h-full w-full" />
    </div>
  );
}
