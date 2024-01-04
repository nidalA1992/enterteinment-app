import { Input } from '@/primitives';
import LoupeIcon from './loupe.svg';

export const Search = () => {
  return (
    <div className='flex gap-6 items-center last:*:w-full'>
      <LoupeIcon className='flex-shrink-0' />
      <Input
        placeholder='Search for movies or TV series'
        className='border-opacity-0 w-full focus:border-greyishBlue px-0 py-[15px] text-h-m'
      />
    </div>
  );
};
