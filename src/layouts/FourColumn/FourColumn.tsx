import type { FC } from 'react';

import { IFourColumnProps } from './FourColumn.props';

export const FourColumn: FC<IFourColumnProps> = ({ children, ...props }) => {
  return (
    <div {...props} className='grid grid-cols-4 gap-x-10 gap-y-8'>
      {children}
    </div>
  );
};
