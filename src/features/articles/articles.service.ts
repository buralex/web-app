import axios from 'axios';
import {
  ApiResponse,
  Article,
  ArticlesSearchParams,
} from '@/features/articles/articles.types';

export const articlesApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ARTICLES_API,
});

export const fetchArticles = (
  searchParams: ArticlesSearchParams,
  signal: AbortSignal,
) =>
  articlesApi.get<ApiResponse<Article>>('/search', {
    params: searchParams,
    signal,
  });
