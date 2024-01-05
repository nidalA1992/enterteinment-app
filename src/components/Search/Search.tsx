'use client';

import { usePathname } from 'next/navigation';

import { Input } from '@/primitives';
import LoupeIcon from './loupe.svg';

export const Search = () => {
  const pathname = usePathname();
  let textContent = '';

  switch (pathname) {
    case '/bookmarked': {
      textContent = 'Search for bookmarked shows';
      break;
    }
    case '/tv-series': {
      textContent = 'Search for TV series';
      break;
    }
    case '/movies': {
      textContent = 'Search for movies';
      break;
    }
    default: {
      textContent = 'Search for movies or TV series';
    }
  }

  return (
    <div className='flex items-center gap-6 last:*:w-full'>
      <LoupeIcon className='flex-shrink-0' />
      <Input
        placeholder={textContent}
        className='w-full border-opacity-0 px-0 py-[15px] text-h-m focus:border-greyishBlue'
      />
    </div>
  );
};
