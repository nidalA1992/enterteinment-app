import type { FC } from 'react';

import { IButtonProps } from './Button.props';

export const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='w-full rounded-md bg-red py-4 text-pureWhite transition-colors hover:bg-pureWhite hover:text-semiDarkBlue'
    >
      {children}
    </button>
  );
};
