import { JetBrains_Mono } from 'next/font/google';

const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

export default function Gallery() {
  return (
    <div className='relative min-h-screen w-full snap-start bg-dark-base py-8 lg:h-screen'>
      <section className='mx-auto h-full w-full max-w-7xl p-8'>
        <div className='grid h-full gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-12'>
          <div className='w-full space-y-4 text-center sm:text-left lg:col-span-4 lg:col-start-5 lg:row-span-4 lg:row-start-5'>
            <h2 className={`${jetBrains.className} text-xl font-bold text-dark-headings lg:text-3xl`}>{"Let's"}</h2>
            <h2 className={`${jetBrains.className} text-5xl font-semibold text-dark-headings lg:text-7xl`}>
              Explore Gallery.
            </h2>
          </div>
          <div className='clipped-container flex h-52 items-center justify-center bg-dark-secondary lg:col-span-3 lg:col-start-2 lg:row-span-3 lg:row-start-2 lg:h-auto'>
            <div className={`${jetBrains.className} clipped font-semibold duration-300 ease-in-out`}>Comming Soon.</div>
          </div>
          <div className='clipped-container flex h-52 items-center justify-center bg-dark-secondary lg:col-span-3 lg:col-start-5 lg:row-span-3 lg:row-start-1 lg:h-auto'>
            <div className={`${jetBrains.className} clipped font-semibold duration-300 ease-in-out`}>Comming Soon.</div>
          </div>
          <div className='clipped-container flex h-52 items-center justify-center bg-dark-secondary lg:col-span-3 lg:col-start-9 lg:row-span-3 lg:row-start-2 lg:h-auto'>
            <div className={`${jetBrains.className} clipped font-semibold duration-300 ease-in-out`}>Comming Soon.</div>
          </div>
          <div className='clipped-container flex h-52 items-center justify-center bg-dark-secondary lg:col-span-3 lg:col-start-10 lg:row-span-3 lg:row-start-5 lg:h-auto'>
            <div className={`${jetBrains.className} clipped font-semibold duration-300 ease-in-out`}>Comming Soon.</div>
          </div>
          <div className='clipped-container flex h-52 items-center justify-center bg-dark-secondary lg:col-span-3 lg:col-start-2 lg:row-span-3 lg:row-start-9 lg:h-auto'>
            <div className={`${jetBrains.className} clipped font-semibold duration-300 ease-in-out`}>Comming Soon.</div>
          </div>
          <div className='clipped-container flex h-52 items-center justify-center bg-dark-secondary lg:col-span-3 lg:col-start-1 lg:row-span-3 lg:row-start-6 lg:h-auto'>
            <div className={`${jetBrains.className} clipped font-semibold duration-300 ease-in-out`}>Comming Soon.</div>
          </div>
          <div className='clipped-container flex h-52 items-center justify-center bg-dark-secondary lg:col-span-3 lg:col-start-9 lg:row-span-3 lg:row-start-9 lg:h-auto'>
            <div className={`${jetBrains.className} clipped font-semibold duration-300 ease-in-out`}>Comming Soon.</div>
          </div>
          <div className='clipped-container flex h-52 items-center justify-center bg-dark-secondary lg:col-span-3 lg:col-start-6 lg:row-span-3 lg:row-start-10 lg:h-auto'>
            <div className={`${jetBrains.className} clipped font-semibold duration-300 ease-in-out`}>Comming Soon.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
