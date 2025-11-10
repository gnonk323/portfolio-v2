import ProjectPage from "@/components/ProjectPage";
import * as si from "simple-icons";
import Hero from "@/components/consensus/ConsensusHero";

export default function ConsensusPage() {
  const techStack: { name: string; icon?: si.SimpleIcon }[] = [
    { name: "TypeScript", icon: si.siTypescript },
    { name: "Node.js", icon: si.siNodedotjs },
    { name: "Next.js", icon: si.siNextdotjs },
    { name: "MongoDB", icon: si.siMongodb },
    { name: "Axios", icon: si.siAxios },
    { name: "Vercel", icon: si.siVercel },
    { name: "Git", icon: si.siGit },
    { name: "Jira", icon: si.siJira },
    { name: "Figma", icon: si.siFigma },
  ];

  return (
    <ProjectPage
      title="Consensus"
      techStack={techStack}
      links={[{ name: "Play", url: "https://consensus-game.vercel.app/" }]}
      heroComponent={<Hero />}
    />
  );
}
