'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Article } from '@/features/articles/articles.types';
import { fetchArticles } from '@/features/articles/articles.service';
import { Card } from '@/app/articles/Card';
import { getAxiosErrorMessage, getPaginationParams } from '@/utils';
import { DEFAULT_ARTICLE_TAG } from '@/constants';
import { Loading } from '@/components/Loading';
import { usePage } from '@/app/context/PageContext';
import axios from 'axios';

export default function Articles() {
  const { setTotalPages } = usePage();
  const searchParams = useSearchParams();
  const [data, setData] = useState<Article[]>([]);
  const [dataError, setDataError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const { currentPage, itemsPerPage } = getPaginationParams(searchParams);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    setLoading(true);

    (async () => {
      try {
        const response = await fetchArticles(
          {
            tags: searchParams.get('tags') || DEFAULT_ARTICLE_TAG,
            hitsPerPage: itemsPerPage,
            page: currentPage - 1,
            filters: searchParams.get('filters'),
          },
          signal,
        );

        setData(response.data.hits);
        setTotalPages(Math.ceil(response.data.nbHits / itemsPerPage));
        setDataError('');
        setLoading(false);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error(error);
          setDataError(getAxiosErrorMessage(error));
          setLoading(false);
        }
      }
    })();

    return () => {
      // Cancel the request when the component unmounts
      controller.abort();
    };
  }, [currentPage, itemsPerPage, searchParams, setTotalPages]);

  if (loading) {
    return (
      <div className="p-5 text-center">
        <Loading />
      </div>
    );
  }

  if (dataError) {
    return <div className="p-5 text-center">{dataError}</div>;
  }

  if (data.length === 0) {
    return <div className="p-5 text-center">No articles</div>;
  }

  return (
    <div className="page">
      <ul className="list">
        {data.map((article) => (
          <Card key={article.objectID} article={article} />
        ))}
      </ul>
    </div>
  );
}
