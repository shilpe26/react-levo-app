import { PublishedDateProps } from ".";
import { format } from 'date-fns';
export const PublishedDate = ({ publishedAt }:PublishedDateProps) => {
    return <h1>{format(new Date(publishedAt),'dd/MM/yyyy')}</h1>;
  };