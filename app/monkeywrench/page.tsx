import * as si from "simple-icons";
import ProjectPage from "@/components/ProjectPage";
import Hero from "@/components/monkeywrench/MonkeyWrenchHero";

export default function MonkeyWrenchPage() {
  const techStack: { name: string; icon?: si.SimpleIcon }[] = [
    { name: "TypeScript", icon: si.siTypescript },
    { name: "Python", icon: si.siPython },
    { name: "Node.js", icon: si.siNodedotjs },
    { name: "Axios", icon: si.siAxios },
    { name: "React", icon: si.siReact },
    { name: "React Native", icon: si.siReact },
    { name: "Shadcn", icon: si.siShadcnui },
    { name: "Tailwind CSS", icon: si.siTailwindcss },
    { name: "TanStack Query" },
    { name: "TanStack Router" },
    { name: "Django", icon: si.siDjango },
    { name: "Supabase", icon: si.siSupabase },
    { name: "Git", icon: si.siGit },
    { name: "Jira", icon: si.siJira },
    { name: "Figma", icon: si.siFigma },
    { name: "Docker", icon: si.siDocker },
    { name: "Render", icon: si.siRender },
  ];

  return (
    <ProjectPage
      title="MonkeyWrench — an End-to-End Auto Repair Shop Manager"
      techStack={techStack}
      links={[{ name: "5280 Auto Hail Repair", url: "https://5280autohailrepair.com/" }]}
      heroComponent={<Hero />}
    />
  );
}
