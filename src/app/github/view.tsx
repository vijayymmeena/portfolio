import Image from "next/image";
import { Suspense } from "react";

import type { IGitHubRepo, IGitHubUser } from "./api.types";
import GitHubCalendarView from "./calender";
import RepoCard from "./repo-card";
import styles from "./view.module.css";

interface Props {
  repos: IGitHubRepo[];
  user: IGitHubUser;
}

const GithubPageView: React.FC<Props> = ({ user, repos }) => {
  if (!process.env.NEXT_PUBLIC_GITHUB_USERNAME) {
    throw Error("env NEXT_PUBLIC_GITHUB_USERNAME does not exist");
  }

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className="max-lg:hidden">
        <div className={styles.contributions}>
          <Suspense>
            <GitHubCalendarView />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default GithubPageView;
