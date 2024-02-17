import { ReadMoreLinkProps } from '.';

export const ReadMoreLink = ({ url }:ReadMoreLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="border-2 border-black py-2 px-3 w-fit mt-auto">
      Read more
    </a>
  );
};

