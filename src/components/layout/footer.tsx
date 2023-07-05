import Image from 'next/image';
import NondenoicIcon from '../../../public/images/nondenoic-icon.svg';

export default function Footer() {
  return (
    <footer className='bg-base-secondary relative -z-20 w-full border-t border-dark-accent/10 dark:border-light-accent/5'>
      <div className='mx-auto w-full max-w-7xl px-4'>
        <div className='flex w-full flex-wrap items-center justify-between px-4 py-6'>
          <div className='h-10 w-10 rounded'>
            <Image src={NondenoicIcon} alt='Nondenoic Icon' />
          </div>
          <div className='opacity-80'>&copy; 2023 Nondenoic by AdiIfai</div>
        </div>
      </div>
    </footer>
  );
}
