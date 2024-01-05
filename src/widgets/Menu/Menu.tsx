import { Navigation } from '@/components';
import { Avatar, Logo } from '@/primitives';

export const Menu = () => {
  return (
    <div className='flex h-[92svh] max-h-[960px] flex-col items-center justify-between gap-[75px] rounded-[20px] bg-semiDarkBlue px-7 py-8'>
      <Logo />
      <Navigation />
      <div className='mb-auto'></div>
      <Avatar src='/image-avatar.png' />
    </div>
  );
};
