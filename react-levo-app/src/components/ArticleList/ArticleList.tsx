import { useState, useEffect } from 'react';
import { fetchArticles, Article } from '../../client/api';
import { ArticleComponent } from '../ArticleComponent';
import { LoadMoreButton } from '../LoadMoreButton';
import { Spinner } from '../Spinner';

export const ArticleList = ( ) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [displayedArticles, setDisplayedArticles] = useState<number>(6);
  useEffect(() => {
    const fetchData = async () => {
      const articlesData = await fetchArticles();
      setArticles(articlesData);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log("articles",articles);
  
  const handleLoadMore = () => {
    setDisplayedArticles(displayedArticles + 6);
  };
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">Spaceflight News Articles</h1>
      {loading ? (
        <Spinner/>
      ) : (
        <>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-12">
          {Array.isArray(articles) && articles?.slice(0, displayedArticles)?.map((article) => (
            <ArticleComponent
            key={article.id}
            title={article.title}
            summary={article.summary}
            url={article.url}
            publishedAt={article.published_at}
            imageUrl={article?.image_url && article?.image_url || ''}
          />
          ))}
           
        </ul>
        {articles.length > displayedArticles && (
            <div className="flex justify-center pb-8">
              <LoadMoreButton onClick={handleLoadMore} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

