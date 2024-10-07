export interface Article {
  objectID: string;
  author: string;
  created_at: string;
  title?: string;
  url: string;
  story_title?: string;
  story_url: string;
}

export interface ArticlesSearchParams {
  tags: string;
  hitsPerPage: number;
  page: number;
  filters?: string | null;
}

export interface ApiResponse<T> {
  hits: T[];
  nbHits: number;
}
