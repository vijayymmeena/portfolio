import ForkIcon from "@/icons/ForkIcon";
import GithubIcon from "@/icons/GithubIcon";
import LinkIcon from "@/icons/LinkIcon";
import StarIcon from "@/icons/StarIcon";
import WatchIcon from "@/icons/WatchIcon";

import type { IGitHubRepo } from "./api.types";

interface Props {
  repo: IGitHubRepo;
}

const RepoCard: React.FC<Props> = ({ repo }) => {
  return (
    <div className="flex flex-col justify-between rounded bg-[var(--article-bg)] p-4 hover:shadow hover:shadow-black">
      <div>
        <h3 className="mb-4 text-[var(--accent-color)]">{repo.name}</h3>
        <p className="mb-5">{repo.description}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center [&>*]:mr-1 [&>span]:mr-4">
          <>
            <WatchIcon className="text-[var(--accent-color)]" />
            <span>{repo.watchers}</span>
          </>
          <>
            <ForkIcon className="text-[var(--accent-color)]" />
            <span>{repo.forks}</span>
          </>
          <>
            <StarIcon className="text-[var(--accent-color)]" />
            <span>{repo.stargazers_count}</span>
          </>
        </div>
        <div className="flex items-center space-x-2">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <GithubIcon
              height={20}
              width={20}
              className="text-[var(--accent-color)]"
            />
          </a>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
              <LinkIcon
                height={20}
                width={20}
                className="text-[var(--accent-color)]"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
