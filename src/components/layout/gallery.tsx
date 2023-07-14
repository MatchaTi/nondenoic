import { JetBrains_Mono } from 'next/font/google';

const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

export default function Gallery() {
  return (
    <div className='min-h-screen w-full snap-start scroll-mb-40 bg-dark-base pb-40'>
      <section className='mx-auto h-full w-full max-w-7xl p-8'>
        <div className='grid gap-10 sm:grid-cols-2 md:grid-cols-4'>
          <h2
            className={`${jetBrains.className} col-span-full text-2xl font-bold text-dark-headings underline decoration-nondenoic-main underline-offset-8 sm:col-span-1 sm:self-center sm:justify-self-center sm:text-3xl md:col-span-2 md:row-span-2 md:text-4xl xl:text-7xl`}
          >
            Gallery
          </h2>
          <div className='clipped-container flex aspect-square items-center justify-center bg-dark-secondary md:col-start-4'>
            <div className='clipped h-full w-full duration-300 ease-in-out'>Coming Soon</div>
          </div>
          <div className='clipped-container flex aspect-square items-center justify-center bg-dark-secondary md:col-start-3'>
            <div className='clipped h-full w-full duration-300 ease-in-out'>Coming Soon</div>
          </div>
          <div className='clipped-container flex aspect-square items-center justify-center bg-dark-secondary'>
            <div className='clipped h-full w-full duration-300 ease-in-out'>Coming Soon</div>
          </div>
          <div className='clipped-container flex aspect-square items-center justify-center bg-dark-secondary md:col-start-2'>
            <div className='clipped h-full w-full duration-300 ease-in-out'>Coming Soon</div>
          </div>
          <div className='clipped-container flex aspect-square items-center justify-center bg-dark-secondary'>
            <div className='clipped h-full w-full duration-300 ease-in-out'>Coming Soon</div>
          </div>
          <div className='clipped-container flex aspect-square items-center justify-center bg-dark-secondary'>
            <div className='clipped h-full w-full duration-300 ease-in-out'>Coming Soon</div>
          </div>
          <div className='clipped-container flex aspect-square items-center justify-center bg-dark-secondary'>
            <div className='clipped h-full w-full duration-300 ease-in-out'>Coming Soon</div>
          </div>
          <div className='clipped-container flex aspect-square items-center justify-center bg-dark-secondary'>
            <div className='clipped h-full w-full duration-300 ease-in-out'>Coming Soon</div>
          </div>
          <div className='clipped-container flex aspect-square items-center justify-center bg-dark-secondary'>
            <div className='clipped h-full w-full duration-300 ease-in-out'>Coming Soon</div>
          </div>
        </div>
      </section>
    </div>
  );
}
