import type { FC } from 'react';
import Image from 'next/image';

import MoviesIcon from '@/icons/icon-nav-movies.svg';
import TvSeriesIcon from '@/icons/icon-nav-tv-series.svg';
import { Bookmark } from '@/primitives';

import { IMovieCardProps } from './MovieCard.props';
import { PlayButton } from '@/primitives/PlayButton/PlayButton';

const icons: Record<string, JSX.Element> = {
  'Movie': <MoviesIcon viewBox='0 0 20 20' />,
  'TV Series': <TvSeriesIcon viewBox='0 0 20 20' />,
};

export const MovieCard: FC<IMovieCardProps> = props => {
  return (
    <article className='relative cursor-pointer' data-type={props.type}>
      <div className='transition-opacity relative group'>
        <Image
          width={props.type === 'm' ? 470 : 280}
          height={props.type === 'm' ? 230 : 174}
          src={
            props.type === 'm'
              ? props.thumbnail?.trending?.large || ''
              : props.thumbnail?.regular.large || ''
          }
          alt={`Image ${props.title}`}
          className='rounded-lg transition-all group-hover:brightness-50'
        />
        <PlayButton className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-opacity opacity-0 group-hover:opacity-100' />
      </div>

      <div
        className='absolute top-4 data-[type=m]:right-6 data-[type=s]:right-4 z-10'
        data-type={props.type}>
        <Bookmark defaultChecked={props.isBookmarked} />
      </div>

      {/* STATS */}
      <div
        className='flex items-center gap-2 text-pureWhite opacity-75 data-[type=m]:text-b-m data-[type=s]:text-b-s data-[type=m]:absolute data-[type=m]:bottom-[57px] data-[type=m]:left-6 data-[type=s]:pt-2 data-[type=s]:pb-[5px]'
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

      {/* TITLE */}
      <h3
        className='data-[type=m]:text-h-s data-[type=s]:text-h-xs data-[type=m]:absolute data-[type=m]:bottom-6 data-[type=m]:left-6'
        data-type={props.type}>
        {props.title}
      </h3>
      {/* TITLE */}
    </article>
  );
};
