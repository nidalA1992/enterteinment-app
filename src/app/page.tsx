import { Navigation } from '@/components';
import { Avatar, Bookmark, Button, Input, Logo } from '@/primitives';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center gap-5'>
      <Avatar src='/image-avatar.png' />
      <Logo />
      <Navigation />
      <Bookmark />
      <p className='text-h-l'>Lorem ipsum dolor sit amet</p>
      <p className='text-h-m'>Lorem ipsum dolor sit amet</p>
      <p className='text-h-s'>Lorem ipsum dolor sit amet</p>
      <p className='text-h-xs'>Lorem ipsum dolor sit amet</p>

      <p className='text-b-m'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius
        commodi facilis quis obcaecati non dolore adipisci tempore reprehenderit
        facere accusantium esse beatae consequatur, perferendis, tenetur iusto
        laborum, nobis animi!
      </p>
      <p className='text-b-s'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius
        commodi facilis quis obcaecati non dolore adipisci tempore reprehenderit
        facere accusantium esse beatae consequatur, perferendis, tenetur iusto
        laborum, nobis animi!
      </p>
      <Input placeholder='test' errorMessage='huinya' />
      <Button>Login to your account</Button>
    </div>
  );
}
