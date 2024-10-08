import CommentIcon from "@/icons/CommentIcon";
import EyeIcon from "@/icons/EyeIcon";
import HeartIcon from "@/icons/HeartIcon";

import type { IArticle } from "./api.types";

const ArticleCard = ({ article }: { article: IArticle }) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded bg-[var(--article-bg)] p-3 text-white no-underline transition-all duration-300 hover:shadow hover:shadow-black"
    >
      <div className="px-0 py-4">
        <h3 className="mb-4 text-lg text-[color:var(--accent-color)]">
          {article.title}
        </h3>
        <p>{article.description}</p>
      </div>
      <div className="mt-auto flex text-[1]">
        <div className="mr-4 flex items-center">
          <EyeIcon className="mr-1 h-4 w-6 text-[color:var(--accent-color)]" />{" "}
          {article.page_views_count}
        </div>
        <div className="mr-4 flex items-center">
          <HeartIcon className="mr-1 h-4 w-6 text-[color:var(--accent-color)]" />{" "}
          {article.public_reactions_count}
        </div>
        <div className="mr-4 flex items-center">
          <CommentIcon className="mr-1 h-4 w-6 text-[color:var(--accent-color)]" />{" "}
          {article.comments_count}
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
