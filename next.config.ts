import type { NextConfig } from "next";
import { PROJECTS } from "./src/lib/projects";

const nextConfig: NextConfig = {
  // All site images live in /public/sources/. No external image hosts in use.
  async redirects() {
    return PROJECTS.flatMap((project) => [
      {
        source: `/projekty/${project.legacyId}`,
        destination: `/projekty/${project.id}`,
        permanent: true,
      },
      {
        source: `/subpages/projects/project-${project.legacyId}.html`,
        destination: `/projekty/${project.id}`,
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
