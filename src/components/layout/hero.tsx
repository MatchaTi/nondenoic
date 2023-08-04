import { Source_Code_Pro } from 'next/font/google';

const sourceCode = Source_Code_Pro({ subsets: ['latin'] });

export default function Hero() {
  return (
    <section className='mt-52 flex w-full items-center justify-center gap-20 lg:mt-0 lg:h-screen'>
      <div className='grid grid-cols-3 gap-4 px-8 text-center'>
        <h1
          className={`${sourceCode.className} col-span-3 text-4xl font-bold leading-relaxed text-neutral-700 lg:text-6xl xl:text-7xl`}
        >
          Adi Muhammad Syifai
        </h1>
        <h1
          className={`${sourceCode.className} col-span-3 self-center text-4xl font-bold text-neutral-800 sm:col-span-1 lg:text-6xl xl:text-7xl`}
        >
          Portfolio
        </h1>
        <h1
          className={`${sourceCode.className} col-span-3 row-start-3 text-4xl font-bold text-neutral-900 lg:text-6xl xl:text-7xl`}
        >
          Nondenoic.
        </h1>
        <h1 className='text-balance col-span-3 max-w-xl self-center justify-self-center leading-relaxed text-neutral-500 sm:col-span-2 sm:row-start-2'>
          Ngide aja dulu. Kreativitas tidak mengenal batas, dan begitulah saya menemukan kebahagiaan dalam mengembara di
          dunia desain dan koding. Saya percaya bahwa setiap proyek adalah panggung untuk menyuarakan ide-ide yang luar
          biasa dan merangkai karya-karya yang tak terlupakan.
        </h1>
      </div>
    </section>
  );
}
