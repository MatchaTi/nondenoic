import { JetBrains_Mono } from 'next/font/google';

const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

export default function Hero() {
  return (
    <div className='h-screen w-full snap-start bg-dark-base'>
      <section className='mx-auto grid h-full w-full max-w-7xl grid-rows-3 items-center p-8'>
        <h1
          className={`${jetBrains.className} row-start-2 justify-self-center text-5xl font-bold text-dark-headings sm:text-6xl xl:text-7xl`}
        >
          Nondenoic
        </h1>
        <div className='row-start-3 self-end sm:justify-self-center sm:text-center'>
          <h2 className='text-xl font-semibold text-dark-headings'>Adi Muhammad Syifai</h2>
          <p className={`${jetBrains.className} text-dark-text`}>Portfolio</p>
        </div>
      </section>
    </div>
  );
}
