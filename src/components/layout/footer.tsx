import Image from 'next/image';
import NondenoicIcon from '../../../public/images/nondenoic-icon.png';

export default function Footer() {
  return (
    <footer className='relative -z-20 w-full border-t border-neutral-200'>
      <div className='mx-auto w-full max-w-7xl px-8'>
        <div className='flex w-full flex-wrap items-center justify-between gap-4 py-6 sm:gap-0 lg:px-4'>
          <div className='h-10 w-10 rounded'>
            <Image src={NondenoicIcon} alt='Nondenoic Icon' className='rounded' />
          </div>
          <div className='opacity-80'>&copy; 2023 Nondenoic by AdiIfai</div>
        </div>
      </div>
    </footer>
  );
}
