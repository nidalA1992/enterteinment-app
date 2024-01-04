import { Navigation } from '@/components';
import { Avatar, Logo } from '@/primitives';

export const Menu = () => {
  return (
    <div className='min-h-[960px] gap-[75px] px-8 py-9 bg-semiDarkBlue rounded-[20px] flex flex-col items-center justify-between'>
      <Logo />
      <Navigation />
      <div className='mb-auto'></div>
      <Avatar src='/image-avatar.png' />
    </div>
  );
};
