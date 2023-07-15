import { JetBrains_Mono } from 'next/font/google';

const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

export default function Portfolio() {
  return (
    <div className='h-screen w-full snap-start bg-light-base py-8'>
      <section className='mx-auto grid h-full w-full max-w-7xl items-center justify-center p-8 md:grid-cols-2'>
        <div className='w-full space-y-4 text-center md:text-left'>
          <h2 className={`${jetBrains.className} text-xl font-bold text-light-headings md:text-2xl xl:text-3xl`}>
            {"Hello, it's me"}
          </h2>
          <h2 className={`${jetBrains.className} text-5xl font-semibold text-light-headings md:text-6xl xl:text-7xl`}>
            AdiIfai.
          </h2>
          <p className='text-justify text-light-text'>
            Saya memiliki kecintaan terhadap web design dan web styling, saya mampu untuk mengimplementasikan desain dan
            membangun antarmuka web yang konsisten dan responsif. Saya senang berkreasi dalam menggabungkan komponen
            visual yang menarik dengan interaksi yang halus dan menciptakan tampilan web yang menarik, modern, dan
            fungsional untuk meningkatkan kepuasan pengguna.
          </p>
          <p
            className={`${jetBrains.className} text-left font-semibold text-light-headings underline underline-offset-8`}
          >
            Scroll for more
          </p>
        </div>
      </section>
    </div>
  );
}
