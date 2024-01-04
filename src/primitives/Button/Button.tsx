import type { FC } from 'react';

import { IButtonProps } from './Button.props';

export const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='py-4 bg-red text-pureWhite rounded-md hover:bg-pureWhite hover:text-darkBlue transition-colors w-full'>
      {children}
    </button>
  );
};
