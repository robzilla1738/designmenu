import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Always pin to this package directory (not a parent monorepo root).
// process.cwd() can be wrong depending on how the CLI is invoked;
// a parent pnpm-lock.yaml was making Turbopack resolve modules as
// [project]/Code/designmenu/... and break the RSC client manifest.
const packageRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: packageRoot,
  },
};

export default nextConfig;
