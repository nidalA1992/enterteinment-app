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
          'border-b border-greyishBlue bg-[transparent] p-4 text-b-m caret-red transition-colors placeholder:opacity-50 focus:border-pureWhite focus:outline-none data-[error="true"]:border-red data-[error="true"]:pr-20 ' +
          className
        }
        data-error={!!errorMessage}
      />
      {errorMessage && (
        <p className='absolute right-[16px] top-[50%] translate-y-[-50%] text-b-s text-red'>
          {errorMessage}
        </p>
      )}
    </span>
  );
};
