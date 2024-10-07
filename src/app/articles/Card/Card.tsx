import { Article } from '@/features/articles/articles.types';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { cssClasses, getIsClickedOnTextFreeSpace } from '@/utils';
import { NewTabLinkIcon } from '@/components/icons/NewTabLinkIcon';
import { Button } from '@/components/Button';
import { AUTHOR_DELIMITER } from '@/constants';
import styles from '@/app/articles/Card/Card.module.css';

interface CardProps {
  article: Article;
}

export const Card = ({ article }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleDelete = useCallback(
    (objectID: string) => {
      const prevFilters = searchParams.get('filters');
      const excludeObjectID = `NOT objectID:${objectID}`;
      const params = new URLSearchParams(searchParams);
      params.set('page', '1');
      params.set(
        'filters',
        prevFilters ? `${prevFilters} AND ${excludeObjectID}` : excludeObjectID,
      );
      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  const handleAuthorClick = useCallback(
    (author: string, event: React.MouseEvent<HTMLElement>) => {
      const currentTags = searchParams.get('tags');
      const authorInSearchParams = currentTags?.split(AUTHOR_DELIMITER)[1];

      if (authorInSearchParams !== author) {
        // Prevent clicking on the card and expanding it
        event.stopPropagation();

        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        params.set('tags', `${AUTHOR_DELIMITER}${author}`);
        router.push(`${pathname}?${params.toString()}`);
      }
    },
    [pathname, router, searchParams],
  );

  const handleCardClick = (event: React.MouseEvent<HTMLLIElement>) => {
    if (!isExpanded) {
      return setIsExpanded(true);
    }
    const target = event.target as HTMLElement;
    if (getIsClickedOnTextFreeSpace(target, styles.field)) {
      setIsExpanded(false);
    }
  };

  const isArticleActive = Number(article.objectID) % 2 === 0;

  const articleTitle = article.title || article.story_title;
  const articleUrl = article.url || article.story_url;

  return (
    <li className={styles.box} onClick={handleCardClick}>
      <div>
        <div
          className={cssClasses([
            styles.field,
            styles.status,
            isArticleActive && styles.active,
          ])}
        >
          {isArticleActive ? 'active' : 'not active'}
        </div>
      </div>

      <div className={styles.expandable}>
        <div className={styles.header}>
          <div className={styles.info}>
            <div
              className={`${styles.field} ${styles.author}`}
              onClick={(event: React.MouseEvent<HTMLElement>) =>
                handleAuthorClick(article.author, event)
              }
            >
              {article.author}
            </div>
            {!isExpanded && articleTitle && (
              <div className={styles.field}>{articleTitle}</div>
            )}
          </div>
          <div>
            <div className={`${styles.field} ${styles.date}`}>
              {new Date(article.created_at).toLocaleString('en-US')}
            </div>
          </div>
        </div>

        {isExpanded && (
          <>
            <div className="d-flex">
              <div className={styles.info}>
                {articleTitle && (
                  <div className={styles.field}>
                    <NewTabLinkIcon />
                    &nbsp;
                    <a
                      href={articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {articleTitle}
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className={styles.buttons}>
              <Button onClick={() => {}}>Action 1</Button>
              <Button onClick={() => {}}>Action 2</Button>
              <Button onClick={() => {}}>Action 3</Button>
              <Button onClick={() => {}}>Action 4</Button>
              <Button onClick={() => {}}>Action 5</Button>
              <Button
                variant="danger"
                onClick={() => handleDelete(article.objectID)}
              >
                Delete
              </Button>
            </div>
          </>
        )}
      </div>
    </li>
  );
};
