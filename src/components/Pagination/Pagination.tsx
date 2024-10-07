'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { generatePagination } from '@/components/Pagination/generatePagination';
import { getPaginationParams } from '@/utils';
import { usePage } from '@/app/context/PageContext';
import { Button } from '@/components/Button';
import { pages } from '@/constants';
import styles from '@/components/Pagination/Pagination.module.css';
import { ArrowRightShortIcon } from '@/components/icons/ArrowRightShortIcon';
import { ArrowLeftShortIcon } from '@/components/icons/ArrowLeftShortIcon';

const perPageOptions = [1, 2, 5, 10, 15, 20];

const pathsWithPagination = new Set<string>([`/${pages.articles}`]);

export const Pagination = () => {
  const { totalPages } = usePage();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { currentPage, itemsPerPage } = getPaginationParams(searchParams);
  const pageNumbers = generatePagination(currentPage, totalPages);

  const handlePageChange = useCallback(
    (page: number | string) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', String(page));
      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  const handlePerPageChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', '1');
      params.set('hitsPerPage', event.target.value);
      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams],
  );

  const showPagination = pathsWithPagination.has(pathname);

  if (!showPagination) {
    return null;
  }

  return (
    <div className={styles.pagination}>
      <div className="d-flex">
        <Button
          className={styles.prev}
          variant="info"
          size="small"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowLeftShortIcon />
        </Button>

        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return <span key={index}>{page}</span>;
          }
          return (
            <Button
              key={index}
              className={styles.pageNum}
              variant="info"
              size="small"
              onClick={() => handlePageChange(page)}
              disabled={page === currentPage}
            >
              {page}
            </Button>
          );
        })}

        <Button
          className={styles.next}
          variant="info"
          size="small"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          <ArrowRightShortIcon />
        </Button>
      </div>

      <div className={styles.perPage}>
        <label htmlFor="perPage">Per page:</label>

        <select
          className={styles.select}
          id="perPage"
          value={itemsPerPage}
          onChange={handlePerPageChange}
        >
          {perPageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
