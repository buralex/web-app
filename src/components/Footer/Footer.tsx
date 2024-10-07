import Link from 'next/link';
import { Pagination } from '@/components/Pagination';
import { pages } from '@/constants';
import { Button } from '@/components/Button';
import styles from '@/components/Footer/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Link href={`/${pages.helpCenter}`}>
          <Button variant="info">Help center</Button>
        </Link>
      </div>

      <Pagination />
    </footer>
  );
};
