import { ArticleImageProps } from '.';

export const ArticleImage = ({ src, alt = '', className = '' }:ArticleImageProps) => {
  return <img src={src} alt={alt} className={className} />;
};

