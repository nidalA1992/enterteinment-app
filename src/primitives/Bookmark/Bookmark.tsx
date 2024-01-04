import { useId, type FC } from 'react';

import BookmarkIcon from './bookmark.svg';
import { IBookmarkProps } from './Bookmark.props';

export const Bookmark: FC<IBookmarkProps> = ({ ...props }) => {
  const id = useId();

  return (
    <span>
      <input
        id={id}
        {...props}
        className='peer appearance-none'
        type='checkbox'
      />
      <label
        htmlFor={id}
        className='peer-checked:*:hover:fill-darkBlue peer-checked:*:fill-pureWhite peer-checked:bg-darkBlue peer-checked:bg-opacity-50 hover:bg-pureWhite group w-8 h-8 flex justify-center items-center bg-darkBlue bg-opacity-50 rounded-full transition-colors cursor-pointer'>
        <BookmarkIcon className='group-hover:stroke-darkBlue transition-colors' />
      </label>
    </span>
  );
};
