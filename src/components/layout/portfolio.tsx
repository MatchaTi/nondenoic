import { Source_Code_Pro } from 'next/font/google';

const sourceCode = Source_Code_Pro({ subsets: ['latin'] });

export default function Portfolio() {
  return (
    <section className='mx-auto mt-20 grid h-full w-full max-w-7xl items-center justify-between px-8 pb-20 lg:grid-cols-2'>
      <div className='w-full space-y-4 text-center md:text-left'>
        <h2 className={`${sourceCode.className} text-xl font-bold md:text-2xl xl:text-3xl`}>{"Hello, it's me"}</h2>
        <h2 className={`${sourceCode.className} text-5xl font-semibold md:text-6xl xl:text-7xl`}>AdiIfai.</h2>
        <p className='text-justify leading-relaxed text-neutral-500'>
          Saya memiliki kecintaan terhadap web design dan web styling, saya mampu untuk mengimplementasikan desain dan
          membangun antarmuka web yang konsisten dan responsif. Saya senang berkreasi dalam menggabungkan komponen
          visual yang menarik dengan interaksi yang halus dan menciptakan tampilan web yang menarik, modern, dan
          fungsional untuk meningkatkan kepuasan pengguna.
        </p>
        <p className={`${sourceCode.className} text-left font-semibold underline underline-offset-8`}>
          Scroll for more
        </p>
      </div>
      <div className='relative hidden justify-self-end pl-4 lg:block'>
        <div className='absolute left-0 top-0 -z-10 w-full pl-4'>
          <div className='grid w-fit grid-cols-16 grid-rows-16'>
            {Array.from({ length: 256 }).map((_, i) => (
              <div key={i} className='h-8 w-8 border border-neutral-100'></div>
            ))}
          </div>
        </div>
        <div className='grid w-fit grid-cols-16 grid-rows-16'>
          <div className='col-start-6 row-start-3 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-7 row-start-3 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-8 row-start-3 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-9 row-start-3 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-10 row-start-3 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-11 row-start-3 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          {/*  */}
          <div className='col-start-4 row-start-4 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-5 row-start-4 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-6 row-start-4 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-7 row-start-4 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-8 row-start-4 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-9 row-start-4 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-10 row-start-4 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-11 row-start-4 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-12 row-start-4 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-13 row-start-4 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          {/*  */}
          <div className='col-start-3 row-start-5 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-4 row-start-5 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-5 row-start-5 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-6 row-start-5 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-7 row-start-5 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-8 row-start-5 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-9 row-start-5 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-10 row-start-5 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-11 row-start-5 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-12 row-start-5 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-13 row-start-5 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-14 row-start-5 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          {/*  */}
          <div className='col-start-2 row-start-6 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-3 row-start-6 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-4 row-start-6 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-5 row-start-6 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-6 row-start-6 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-7 row-start-6 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-8 row-start-6 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-9 row-start-6 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-10 row-start-6 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-11 row-start-6 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-12 row-start-6 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-13 row-start-6 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-14 row-start-6 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-15 row-start-6 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          {/*  */}
          <div className='col-start-2 row-start-7 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-3 row-start-7 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-4 row-start-7 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-5 row-start-7 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-6 row-start-7 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-7 row-start-7 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-8 row-start-7 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-9 row-start-7 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-10 row-start-7 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-11 row-start-7 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-12 row-start-7 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-13 row-start-7 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-14 row-start-7 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-15 row-start-7 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          {/*  */}
          <div className='col-start-2 row-start-8 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-3 row-start-8 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-4 row-start-8 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-5 row-start-8 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-6 row-start-8 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-7 row-start-8 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-8 row-start-8 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-9 row-start-8 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-10 row-start-8 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-11 row-start-8 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-12 row-start-8 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-13 row-start-8 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-14 row-start-8 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-15 row-start-8 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          {/*  */}
          <div className='col-start-2 row-start-9 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-3 row-start-9 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-4 row-start-9 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-5 row-start-9 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-6 row-start-9 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-7 row-start-9 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-8 row-start-9 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-9 row-start-9 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-10 row-start-9 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-11 row-start-9 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-12 row-start-9 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-13 row-start-9 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-14 row-start-9 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-15 row-start-9 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          {/*  */}
          <div className='col-start-2 row-start-10 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-3 row-start-10 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-4 row-start-10 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-5 row-start-10 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-6 row-start-10 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-7 row-start-10 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-8 row-start-10 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-9 row-start-10 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-10 row-start-10 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-11 row-start-10 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-12 row-start-10 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-13 row-start-10 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-14 row-start-10 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-15 row-start-10 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          {/*  */}
          <div className='col-start-2 row-start-11 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-3 row-start-11 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-4 row-start-11 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-5 row-start-11 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-6 row-start-11 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-7 row-start-11 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-8 row-start-11 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-9 row-start-11 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-10 row-start-11 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-11 row-start-11 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-12 row-start-11 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-13 row-start-11 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-14 row-start-11 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-15 row-start-11 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          {/*  */}
          <div className='col-start-3 row-start-12 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-4 row-start-12 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-5 row-start-12 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-6 row-start-12 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-7 row-start-12 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-8 row-start-12 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-9 row-start-12 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-10 row-start-12 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-11 row-start-12 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-12 row-start-12 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-13 row-start-12 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-14 row-start-12 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          {/*  */}
          <div className='col-start-4 row-start-13 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-5 row-start-13 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-6 row-start-13 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-7 row-start-13 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-8 row-start-13 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-9 row-start-13 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-10 row-start-13 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-11 row-start-13 h-8 w-8 border border-neutral-600 bg-neutral-700'></div>
          <div className='col-start-12 row-start-13 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-13 row-start-13 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          {/*  */}
          <div className='col-start-6 row-start-14 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-7 row-start-14 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-8 row-start-14 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-9 row-start-14 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-10 row-start-14 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
          <div className='col-start-11 row-start-14 h-8 w-8 border border-neutral-600 bg-neutral-800'></div>
        </div>
      </div>
    </section>
  );
}
