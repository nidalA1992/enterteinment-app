'use client';

import Link from 'next/link';

import BookmarkIcon from './icons/icon-nav-bookmark.svg';
import HomeIcon from './icons/icon-nav-home.svg';
import MoviesIcon from './icons/icon-nav-movies.svg';
import SeriesIcon from './icons/icon-nav-tv-series.svg';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className='flex flex-col items-center justify-center gap-10'>
      <Link href='' className='hover:*:fill-red'>
        <HomeIcon className='transition-colors' />
      </Link>
      <Link href='' className='hover:*:fill-red'>
        <MoviesIcon className='transition-colors' />
      </Link>
      <Link href='' className='hover:*:fill-red'>
        <SeriesIcon className='transition-colors' />
      </Link>
      <Link href='' className='hover:*:fill-red'>
        <BookmarkIcon className='transition-colors' />
      </Link>
    </nav>
  );
};
