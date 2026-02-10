import { useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        color: { value: ["#7c3aed", "#3b82f6", "#06b6d4"] },
        links: {
          color: "#7c3aed",
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none" as const,
          outModes: { default: "bounce" as const },
        },
        number: {
          density: { enable: true, width: 1920, height: 1080 },
          value: 60,
        },
        opacity: { value: { min: 0.1, max: 0.4 } },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.4 } },
        },
      },
      detectRetina: true,
    }),
    []
  );

  // Preload particles engine
  loadSlim(undefined as any).catch(() => {});

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={options as any}
    />
  );
};

export default ParticleBackground;
