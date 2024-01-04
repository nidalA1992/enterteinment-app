import type { FC } from 'react';
import Image from 'next/image';

import { IAvatarProps } from './Avatar.props';

export const Avatar: FC<IAvatarProps> = ({ src }) => {
  return (
    <Image
      src={src}
      width={40}
      height={40}
      quality={100}
      className='rounded-full border border-pureWhite'
      alt='User Avatar'
    />
  );
};
