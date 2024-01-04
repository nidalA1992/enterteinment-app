import type { FC } from 'react';

import { ITitleProps } from './Title.props';

export const Title: FC<ITitleProps> = ({ children, ...props }) => {
  return (
    <h2 {...props} className='text-h-l col-span-full'>
      {children}
    </h2>
  );
};
