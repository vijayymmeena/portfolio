"use server";

import type { IGitHubRepo, IGitHubUser } from "./api.types";

export default async function GetGitHub() {
  if (!process.env.NEXT_PUBLIC_GITHUB_USERNAME) {
    throw Error("Missing environment variable: NEXT_PUBLIC_GITHUB_USERNAME");
  }

  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
  );

  const user = (await userRes.json()) as IGitHubUser;

  const personalRepoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
  );

  const personalRepo = (await personalRepoRes.json()) as IGitHubRepo[];

  const discordxRepoRes = await fetch(
    `https://api.github.com/users/discordx-ts/repos?per_page=100`,
  );

  const discordxRepo = (await discordxRepoRes.json()) as IGitHubRepo[];

  let repos = personalRepo.concat(discordxRepo);
  repos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return { user, repos };
}
