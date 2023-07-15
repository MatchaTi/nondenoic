import { JetBrains_Mono } from 'next/font/google';

const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

export default function Gallery() {
  return (
    <div className='relative h-screen w-full snap-start bg-dark-base py-8'>
      <section className='mx-auto grid h-full w-full max-w-7xl items-center p-8 lg:items-stretch'>
        <div>
          <div className='mb-4 text-3xl text-dark-text sm:text-4xl lg:col-span-3 lg:col-start-7 lg:row-span-3 lg:row-start-4 lg:hidden lg:text-5xl'>
            <h2 className={`${jetBrains.className} font-bold text-dark-headings`}>{"Let's"}</h2>
            <h2 className={`${jetBrains.className} font-bold text-dark-headings`}>Explore Gallery.</h2>
          </div>
          <div className='flex h-full w-full snap-x snap-mandatory gap-1 overflow-auto lg:grid lg:snap-none lg:grid-cols-12 lg:grid-rows-12'>
            <div className='hidden items-center justify-center gap-4 text-3xl text-dark-text sm:flex-col sm:gap-0 sm:text-4xl lg:col-span-3 lg:col-start-7 lg:row-span-3 lg:row-start-4 lg:flex lg:text-5xl'>
              <h2 className={`${jetBrains.className} font-bold text-dark-headings`}>{"Let's"}</h2>
              <h2 className={`${jetBrains.className} font-bold text-dark-headings`}>Explore Gallery.</h2>
            </div>
            <div className='mb-4 flex aspect-square h-full w-4/5 max-w-sm flex-none snap-center scroll-mx-4 bg-neutral-700 lg:col-start-8 lg:row-start-1 lg:mb-0 lg:aspect-auto lg:w-full lg:max-w-none'></div>
            <div className='mb-4 flex aspect-square h-full w-4/5 max-w-sm flex-none snap-center scroll-mx-4 bg-neutral-700 lg:col-start-7 lg:row-start-1 lg:mb-0 lg:aspect-auto lg:w-full lg:max-w-none'></div>
            <div className='mb-4 flex aspect-square h-full w-4/5 max-w-sm flex-none snap-center scroll-mx-4 bg-neutral-700 lg:col-start-6 lg:row-start-1 lg:mb-0 lg:aspect-auto lg:w-full lg:max-w-none'></div>
          </div>
        </div>
      </section>
    </div>
  );
}
