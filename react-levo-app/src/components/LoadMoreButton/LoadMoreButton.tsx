import { LoadMoreButtonProps } from ".";


export const LoadMoreButton = ({ onClick }:LoadMoreButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-amber-100 hover:bg-amber-200  font-bold py-2 px-4 rounded border-2 border-black focus:outline-none focus:shadow-outline"
    >
      Load More
    </button>
  );
};

