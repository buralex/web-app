'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { pages } from '@/constants';

const links = [
  { name: 'Home', href: `/${pages.home}` },
  { name: 'Articles', href: `/${pages.articles}` },
  { name: 'Help center', href: `/${pages.helpCenter}` },
];

interface NavLinksProps {
  onMenuItemClick: () => void;
}

export const NavLinks = ({ onMenuItemClick }: NavLinksProps) => {
  const pathname = usePathname();

  return links.map((link) => {
    return (
      <li key={link.name}>
        <Link
          onClick={onMenuItemClick}
          href={link.href}
          className={pathname === link.href ? 'active' : ''}
        >
          {link.name}
        </Link>
      </li>
    );
  });
};
