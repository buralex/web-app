'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { Button } from '@/components/Button';
import { AUTHOR_DELIMITER, DEFAULT_ARTICLE_TAG } from '@/constants';
import { ToggleButton } from '@/components/Header/ToggleButton';
import { ClearIcon } from '@/components/icons/ClearIcon';
import { RestoreIcon } from '@/components/icons/RestoreIcon';
import { PersonIcon } from '@/components/icons/PersonIcon';

import styles from '@/components/Header/Header.module.css';

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header = (props: HeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentTags = searchParams.get('tags');
  const currentFilters = searchParams.get('filters');

  const currentAuthor = currentTags?.split(AUTHOR_DELIMITER)[1];
  const deletedArticles = currentFilters?.split(' AND ');

  const handleClearAuthor = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    params.set('tags', DEFAULT_ARTICLE_TAG);
    router.push(`${pathname}?${params.toString()}`);
  }, [pathname, router, searchParams]);

  const handleRestoreDeletedArticles = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    params.delete('filters');
    router.push(`${pathname}?${params.toString()}`);
  }, [pathname, router, searchParams]);

  return (
    <header className={styles.header}>
      <ToggleButton className={styles.toggle} onClick={props.toggleSidebar} />

      {currentAuthor && (
        <Button
          hint="Clear the author from search tags"
          variant="secondary"
          onClick={() => handleClearAuthor()}
        >
          <ClearIcon />
          <span className={styles.shortOnSmall}>&nbsp;{currentAuthor}</span>
        </Button>
      )}

      {deletedArticles?.length && (
        <Button
          hint="Restore deleted articles"
          variant="secondary"
          onClick={() => handleRestoreDeletedArticles()}
        >
          <RestoreIcon />
          <span className={styles.hideOnSmall}>
            &nbsp;Restore deleted articles
          </span>
        </Button>
      )}

      <Button className="margin-left-auto" variant="secondary">
        <PersonIcon />
        <span className={styles.hideOnSmall}>&nbsp;Profile</span>
      </Button>
    </header>
  );
};
