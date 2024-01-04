import Link from 'next/link';

import LogoIcon from './logo.svg';

export const Logo = () => {
  return (
    <Link href='/'>
      <LogoIcon />
    </Link>
  );
};
