#!/usr/bin/env node
import { execSync } from "child_process";
import fs from "fs";

const from = "kayooliveira";

const repos = [
  "template-react-kowind-v2",
  "template-react-ts-kowind-v2",
  "template-vanilla-kowind-v2",
  "template-vue-kowind-v2",
  "template-vue-ts-kowind-v2",
]


repos.forEach((repo) => {
  if (fs.existsSync(repo)) {
    fs.rmSync(repo, { recursive: true, force: true });
    console.log(`removed repo '${repo}'`);
  }
  console.log(`sync repo '${repo}' ...`);

  const clearGit = `cd ${repo}\nrm -rf .git`;

  execSync(
    [
      `git clone https://github.com/${from}/${repo}.git`,
      clearGit,
    ]
      .filter((e) => e)
      .join("\n")
  );
});
