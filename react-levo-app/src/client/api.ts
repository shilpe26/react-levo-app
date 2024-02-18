import axios from 'axios';

export interface Article {
  id: string;
  title: string;
  summary: string;
  url: string;
  published_at: string
  image_url: string
}

export const fetchArticles = async (limit: number, offset: number): Promise<Article[]> => {
  try {
    const response = await axios.get<{ results: Article[] }>(`https://api.spaceflightnewsapi.net/v4/articles/?limit=${limit}&offset=${offset}`);
    return response.data?.results || [];
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};
