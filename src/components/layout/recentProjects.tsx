import { JetBrains_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import KalkulatorKesehatan from '../../../public/images/kalkulator-kesehatan-project.png';
import Nondenoic from '../../../public/images/nondenoic-project.png';
import Roselia from '../../../public/images/roselia-theme-project.png';

const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

export default function RecentProjects() {
  return (
    <div className='h-screen w-full snap-start bg-light-base py-8'>
      <section className='mx-auto grid h-full w-full max-w-7xl items-center p-8'>
        <div>
          <div className='mb-4 space-y-4 text-3xl text-light-headings sm:text-4xl md:hidden md:text-5xl'>
            <h2 className={`${jetBrains.className} font-bold`}>Recent</h2>
            <h2 className={`${jetBrains.className} font-bold`}>Projects.</h2>
          </div>
          <div className='flex h-full w-full snap-x snap-mandatory items-center gap-4 overflow-auto text-light-text md:grid md:snap-none md:grid-cols-2 md:grid-rows-3'>
            <div className='hidden space-y-4 text-3xl text-light-headings sm:text-4xl md:block md:self-end md:text-5xl'>
              <h2 className={`${jetBrains.className} font-bold`}>Recent</h2>
              <h2 className={`${jetBrains.className} font-bold`}>Projects.</h2>
            </div>
            <Link
              href={'/'}
              className='clipped-container mb-4 aspect-square h-full w-4/5 max-w-sm flex-none snap-center scroll-mx-4 rounded-lg bg-light-secondary md:aspect-auto md:h-[275px] md:w-full md:max-w-none md:translate-y-[166px] md:snap-align-none md:scroll-mx-0'
            >
              <div
                className={`${jetBrains.className} clipped bg-dark-base/25 text-xl font-semibold text-dark-headings duration-300 ease-in-out`}
              >
                Nondenoic
              </div>
              <div className='aspect-square h-full overflow-hidden rounded-lg md:aspect-auto md:h-[275px]'>
                <Image src={Nondenoic} alt='Nondenoic' className='h-full w-full object-cover' />
              </div>
            </Link>
            <a
              href='https://kalkulator-kesehatan.netlify.app/'
              target={'_blank'}
              className='clipped-container mb-4 w-4/5 max-w-sm flex-none snap-center scroll-mx-4 overflow-hidden bg-light-secondary md:w-full md:max-w-none md:snap-align-none md:scroll-mx-0'
            >
              <div
                className={`${jetBrains.className} clipped bg-dark-base/25 text-xl font-semibold text-dark-headings duration-300 ease-in-out`}
              >
                Kalkulator Kesehatan
              </div>
              <div className='aspect-square h-full overflow-hidden rounded-lg md:aspect-auto md:h-[275px]'>
                <Image src={KalkulatorKesehatan} alt='Kalkulator Kesehatan' className='h-full w-full object-cover' />
              </div>
            </a>
            <a
              href='https://marketplace.visualstudio.com/items?itemName=TehMatcha.roselia-theme'
              target={'_blank'}
              className='clipped-container mb-4 aspect-square h-full w-4/5 max-w-sm flex-none snap-center scroll-mx-4 rounded-lg bg-light-secondary md:aspect-auto md:h-[275px] md:w-full md:max-w-none md:translate-y-[153px] md:snap-align-none md:scroll-mx-0'
            >
              <div
                className={`${jetBrains.className} clipped bg-dark-base/25 text-xl font-semibold text-dark-headings duration-300 ease-in-out`}
              >
                Roselia Theme
              </div>
              <div className='aspect-square h-full overflow-hidden rounded-lg md:aspect-auto md:h-[275px]'>
                <Image src={Roselia} alt='Roselia Theme' className='h-full w-full object-cover' />
              </div>
            </a>
            <div
              className={`${jetBrains.className} hidden font-semibold text-light-headings underline underline-offset-8 md:block md:self-start`}
            >
              2023 - now
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
