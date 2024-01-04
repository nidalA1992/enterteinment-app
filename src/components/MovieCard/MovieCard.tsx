import type { FC } from 'react';
import Image from 'next/image';

import MoviesIcon from '@/icons/icon-nav-movies.svg';
import TvSeriesIcon from '@/icons/icon-nav-tv-series.svg';

import { IMovieCardProps } from './MovieCard.props';
import { Bookmark } from '@/primitives';

const icons: Record<string, JSX.Element> = {
  'Movie': <MoviesIcon viewBox='0 0 20 20' />,
  'TV Series': <TvSeriesIcon viewBox='0 0 20 20' />,
};

export const MovieCard: FC<IMovieCardProps> = props => {
  return (
    <article
      className='relative cursor-pointer hover:first:*:brightness-50'
      data-type={props.type}>
      <Image
        width={470}
        height={230}
        src={props.thumbnail?.trending?.large || ''}
        alt={`Image ${props.title}`}
        className='rounded-lg transition-all'
      />

      <h3
        className='data-[type=m]:text-h-s data-[type=s]:text-h-xs data-[type=m]:absolute data-[type=m]:bottom-6 data-[type=m]:left-6'
        data-type={props.type}>
        {props.title}
      </h3>

      {/* STATS */}
      <div
        className='flex items-center gap-2 text-pureWhite opacity-75 data-[type=m]:text-b-m data-[type=s]:text-b-s data-[type=m]:absolute data-[type=m]:bottom-[57px] data-[type=m]:left-6'
        data-type={props.type}>
        {props.year}
        <div className='w-[4px] h-[4px] bg-pureWhite bg-opacity-50 rounded-full flex-shrink-0' />
        <span className='inline-flex items-center gap-1.5 *:w-[12px] *:h-[12px] *:fill-pureWhite'>
          {icons[props?.category || '']}
          {props.category}
        </span>
        <div className='w-[4px] h-[4px] bg-pureWhite bg-opacity-50 rounded-full flex-shrink-0' />
        {props.rating}
      </div>
      {/* STATS */}

      <div className='absolute top-4 right-6'>
        <Bookmark />
      </div>
    </article>
  );
};
