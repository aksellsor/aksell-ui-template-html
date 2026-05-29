import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const bannedPackages = ['tailwindcss', 'bootstrap', 'vite', 'webpack', 'parcel'];
const problems = [];
const warnings = [];

const packageJson = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
const allDeps = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
};

for (const pkg of bannedPackages) {
  if (allDeps[pkg]) {
    problems.push(`Remove dependency that does not belong in the zero-build template: ${pkg}`);
  }
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules') continue;

    const path = join(dir, entry);
    const stat = statSync(path);
    const rel = relative(root, path);

    if (stat.isDirectory()) {
      walk(path);
      continue;
    }

    if (/Aeonik.*\.(woff2?|otf|ttf)$/i.test(entry)) {
      warnings.push(`${rel}: only commit Aeonik font files when this project owns a valid license`);
    }

    if (!/\.(html|css|js|json)$/.test(entry)) continue;

    const content = readFileSync(path, 'utf8');

    if (/@tailwind|tailwindcss|bootstrap/i.test(content)) {
      problems.push(`${rel}: do not add Tailwind, Bootstrap, or another CSS framework`);
    }

    if (/from ['"]@aksell\/ui\/src\//.test(content)) {
      problems.push(`${rel}: browser projects should use CDN URLs for @aksell/ui assets`);
    }
  }
}

walk(root);

if (problems.length > 0) {
  console.error('Aksell template check failed:');
  for (const problem of problems) {
    console.error(`- ${problem}`);
  }
  process.exit(1);
}

for (const warning of warnings) {
  console.warn(`Warning: ${warning}`);
}

console.log('Aksell template check passed.');
