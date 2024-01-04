import type { FC } from 'react';

import PlayIcon from './play.svg';
import { IPlayButtonProps } from './PlayButton.props';

export const PlayButton: FC<IPlayButtonProps> = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={
        'bg-pureWhite bg-opacity-25 rounded-full p-[9px] pr-6 flex items-center gap-[19px] ' +
        className
      }>
      <PlayIcon />
      Play
    </button>
  );
};
