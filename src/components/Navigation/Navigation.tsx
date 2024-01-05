'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ROUTES } from '@/routes';

import HomeIcon from '@/icons/icon-nav-home.svg';
import MoviesIcon from '@/icons/icon-nav-movies.svg';
import SeriesIcon from '@/icons/icon-nav-tv-series.svg';
import BookmarkIcon from '@/icons/icon-nav-bookmark.svg';

const menuItems = [
  { route: ROUTES.HOME, icon: <HomeIcon /> },
  { route: ROUTES.MOVIES, icon: <MoviesIcon /> },
  { route: ROUTES.TV_SERIES, icon: <SeriesIcon /> },
  { route: ROUTES.BOOKMARKED, icon: <BookmarkIcon /> },
];

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className='flex flex-col items-center justify-center gap-10'>
      {menuItems.map(({ route, icon }) => (
        <Link
          key={route}
          href={route}
          data-active={pathname === String(route)}
          className='*:transition-colors hover:*:fill-red *:data-[active=true]:fill-pureWhite'
        >
          {icon}
        </Link>
      ))}
    </nav>
  );
};
