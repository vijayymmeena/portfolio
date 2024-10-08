import GetGitHub from "./api";
import GithubPageView from "./view";

const GithubPage: React.FC = async () => {
  const { user, repos } = await GetGitHub();
  return <GithubPageView user={user} repos={repos} />;
};

export default GithubPage;
