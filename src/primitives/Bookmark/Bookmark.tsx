import { useId, type FC } from 'react';

import BookmarkIcon from './bookmark.svg';
import { IBookmarkProps } from './Bookmark.props';

export const Bookmark: FC<IBookmarkProps> = ({ className, ...props }) => {
  const id = useId();

  return (
    <span>
      <input
        id={id}
        {...props}
        className='peer absolute  appearance-none'
        type='checkbox'
      />
      <label
        htmlFor={id}
        className={
          'group flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-darkBlue bg-opacity-50 transition-colors hover:bg-pureWhite peer-checked:bg-darkBlue peer-checked:bg-opacity-50 peer-checked:*:fill-pureWhite peer-checked:*:hover:fill-red peer-checked:*:hover:stroke-red ' +
          className
        }
      >
        <BookmarkIcon className='transition-colors group-hover:stroke-darkBlue' />
      </label>
    </span>
  );
};
