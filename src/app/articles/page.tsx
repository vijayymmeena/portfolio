import { GetArticles } from "./api";
import ArticleCard from "./article-card";

const ArticlesPage = async () => {
  const articles = await GetArticles();

  return (
    <>
      <h3>
        Recent Posts from{" "}
        <a
          href="https://dev.to/vijayymmeena"
          target="_blank"
          rel="noopener"
          className="underline-effect"
        >
          dev.to
        </a>
      </h3>
      <div className="mt-6 grid gap-6 md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export default ArticlesPage;
