import { Title } from '../Title';
import { Summary } from '../Summary';
import { ReadMoreLink } from '../ReadMoreLink';
import { Article } from '.';
import { PublishedDate } from '../PublishedDate';
import { ArticleImage } from '../ArticleImage/ArticleImage';

export const ArticleComponent = ({ title, summary, url, publishedAt, imageUrl }: Article) => {
  return (
    <li className="flex flex-col gap-3 border-2 p-4 bg-amber-100 hover:bg-amber-200">
      <PublishedDate publishedAt={publishedAt} />
      <Title title={title} />
      <ArticleImage src={imageUrl} alt='space-article' className='object-contain' />
      <Summary summary={summary} />
      <ReadMoreLink url={url} />
    </li>
  );
};

