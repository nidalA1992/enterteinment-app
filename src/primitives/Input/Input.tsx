import type { FC } from 'react';

import { IInputProps } from './Input.props';

export const Input: FC<IInputProps> = ({
  errorMessage,
  className,
  ...props
}) => {
  return (
    <span className='relative'>
      <input
        type='text'
        {...props}
        className={
          'border-greyishBlue caret-red text-b-m focus:border-pureWhite border-b bg-[transparent] p-4 transition-colors placeholder:opacity-50 focus:outline-none data-[error="true"]:border-red ' +
          className
        }
        data-error={!!errorMessage}
      />
      {errorMessage && (
        <p className='text-red text-b-s absolute top-[50%] right-[16px] translate-y-[-50%]'>
          {errorMessage}
        </p>
      )}
    </span>
  );
};
