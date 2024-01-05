import type { FC } from 'react';

import PlayIcon from './play.svg';
import { IPlayButtonProps } from './PlayButton.props';

export const PlayButton: FC<IPlayButtonProps> = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={
        'flex items-center gap-[19px] rounded-full bg-pureWhite bg-opacity-25 p-[9px] pr-6 ' +
        className
      }
    >
      <PlayIcon />
      Play
    </button>
  );
};
