import { Source_Code_Pro } from 'next/font/google';
import {
  BiLogoFigma,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVisualStudio
} from 'react-icons/bi';
import { SiAdobephotoshop, SiAdobepremierepro, SiNeovim } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const sourceCode = Source_Code_Pro({ subsets: ['latin'] });

export default function SkillsAndTools() {
  return (
    <section className='mx-auto mt-20 grid h-full w-full max-w-7xl items-center justify-between gap-y-4 px-8 pb-20 lg:grid-cols-2'>
      <div className='w-full space-y-4 text-center md:text-left lg:order-2 lg:pl-4'>
        <h2 className={`${sourceCode.className} text-5xl font-semibold md:text-6xl xl:text-7xl`}>Skills & Tools</h2>
        <p className='text-justify text-neutral-500 leading-relaxed'>
          Saya selalu bersemangat untuk beradaptasi dengan teknologi baru dan siap untuk menghadapi tantangan baru dalam
          proyek-proyek mendatang. Saya percaya bahwa kombinasi keterampilan dan tools yang saya miliki dan kuasai dapat
          memberikan kontribusi yang berarti dalam mencapai tujuan proyek dan membantu menciptakan solusi yang inovatif
          dan efektif.
        </p>
      </div>
      <div className='relative mx-auto pl-4 lg:order-1 lg:mx-0'>
        <div className='absolute left-0 top-0 -z-10 hidden w-full pl-4 lg:block'>
          <div className='grid w-fit grid-cols-12 grid-rows-12'>
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className='h-10 w-10 border border-neutral-100'></div>
            ))}
          </div>
        </div>
        <div className='grid w-fit grid-cols-5 gap-4 lg:grid-cols-12 lg:grid-rows-12 lg:gap-0'>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-700 lg:col-start-8 lg:row-start-1 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-700 lg:col-start-7 lg:row-start-1 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-700 lg:col-start-6 lg:row-start-1 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-700 lg:col-start-5 lg:row-start-1 lg:flex'></div>

          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-700 lg:col-start-9 lg:row-start-2 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-700 lg:col-start-8 lg:row-start-2 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-700 lg:col-start-7 lg:row-start-2 lg:flex'></div>
          <div className='bg-dark-secondary hover:bg-light-secondary hover:text-light-headings flex items-center justify-center duration-300 ease-in-out lg:col-span-2 lg:col-start-5 lg:row-start-2 lg:bg-transparent'>
            <TbBrandNextjs className='text-4xl' />
          </div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-700 lg:col-start-4 lg:row-start-2 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-700 lg:col-start-3 lg:row-start-2 lg:flex'></div>

          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-700 lg:col-start-2 lg:row-start-3 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-700 lg:col-start-3 lg:row-start-3 lg:flex'></div>
          <div className='bg-dark-secondary hover:bg-light-secondary hover:text-light-headings flex items-center justify-center duration-300 ease-in-out lg:col-start-4 lg:row-start-3 lg:bg-transparent'>
            <BiLogoFigma className='text-4xl' />
          </div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-700 lg:col-start-5 lg:row-start-3 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-700 lg:col-start-6 lg:row-start-3 lg:flex'></div>

          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-5 lg:row-start-4 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-4 lg:row-start-4 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-3 lg:row-start-4 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-2 lg:row-start-4 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-11 lg:row-start-4 lg:flex'></div>

          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-5 lg:row-start-5 lg:flex'></div>
          <div className='bg-dark-secondary hover:bg-light-secondary hover:text-light-headings flex items-center justify-center duration-300 ease-in-out lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:row-start-5 lg:bg-transparent'>
            <BiLogoTypescript className='text-4xl lg:text-6xl' />
          </div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-2 lg:row-start-5 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-1 lg:row-start-5 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-11 lg:row-start-5 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-12 lg:row-start-5 lg:flex'></div>

          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-5 lg:row-start-6 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-2 lg:row-start-6 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-1 lg:row-start-6 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-11 lg:row-start-6 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-12 lg:row-start-6 lg:flex'></div>

          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-6 lg:row-start-7 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-5 lg:row-start-7 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-4 lg:row-start-7 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-3 lg:row-start-7 lg:flex'></div>
          <div className='bg-dark-secondary hover:bg-light-secondary hover:text-light-headings flex items-center justify-center duration-300 ease-in-out lg:col-start-2 lg:row-start-7 lg:bg-transparent'>
            <SiAdobephotoshop className='text-3xl' />
          </div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-1 lg:row-start-7 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-12 lg:row-start-7 lg:flex'></div>
          <div className='bg-dark-secondary hover:bg-light-secondary hover:text-light-headings flex items-center justify-center duration-300 ease-in-out lg:col-start-11 lg:row-start-7 lg:bg-transparent'>
            <BiLogoReact className='text-4xl' />
          </div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-10 lg:row-start-7 lg:flex'></div>

          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-12 lg:row-start-8 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-11 lg:row-start-8 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-10 lg:row-start-8 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-9 lg:row-start-8 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-8 lg:row-start-8 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-7 lg:row-start-8 lg:flex'></div>
          <div className='bg-dark-secondary hover:bg-light-secondary hover:text-light-headings flex items-center justify-center duration-300 ease-in-out lg:col-span-2 lg:col-start-5 lg:row-start-8 lg:bg-transparent'>
            <BiLogoVisualStudio className='text-4xl' />
          </div>
          <div className='hidden items-center justify-center bg-neutral-800 lg:col-start-4 lg:row-start-8 lg:flex'></div>
          <div className='bg-dark-secondary hover:bg-light-secondary hover:text-light-headings flex items-center justify-center duration-300 ease-in-out lg:col-start-3 lg:row-start-8 lg:bg-transparent'>
            <SiAdobepremierepro className='text-3xl' />
          </div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-2 lg:row-start-8 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-800 lg:col-start-1 lg:row-start-8 lg:flex'></div>

          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-2 lg:row-start-9 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-3 lg:row-start-9 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-4 lg:row-start-9 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-5 lg:row-start-9 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-6 lg:row-start-9 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-7 lg:row-start-9 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-8 lg:row-start-9 lg:flex'></div>
          <div className='bg-dark-secondary hover:bg-light-secondary hover:text-light-headings flex items-center justify-center duration-300 ease-in-out lg:col-span-2 lg:col-start-9 lg:row-span-2 lg:row-start-9 lg:bg-transparent'>
            <SiNeovim className='text-4xl lg:text-5xl' />
          </div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-11 lg:row-start-9 lg:flex'></div>

          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-2 lg:row-start-10 lg:flex'></div>
          <div className='bg-dark-secondary hover:bg-light-secondary hover:text-light-headings flex items-center justify-center duration-300 ease-in-out lg:col-span-2 lg:col-start-3 lg:row-start-10 lg:bg-transparent'>
            <BiLogoTailwindCss className='text-4xl' />
          </div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-5 lg:row-start-10 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-6 lg:row-start-10 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-7 lg:row-start-10 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-8 lg:row-start-10 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-11 lg:row-start-10 lg:flex'></div>

          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-3 lg:row-start-11 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-4 lg:row-start-11 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-5 lg:row-start-11 lg:flex'></div>
          <div className='bg-dark-secondary hover:bg-light-secondary hover:text-light-headings flex items-center justify-center duration-300 ease-in-out lg:col-span-2 lg:col-start-6 lg:row-start-11 lg:bg-transparent'>
            <BiLogoJavascript className='text-4xl' />
          </div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-8 lg:row-start-11 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-9 lg:row-start-11 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-10 lg:row-start-11 lg:flex'></div>

          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-5 lg:row-start-12 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-6 lg:row-start-12 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-7 lg:row-start-12 lg:flex'></div>
          <div className='hidden h-10 w-10 border border-neutral-600 bg-neutral-900 lg:col-start-8 lg:row-start-12 lg:flex'></div>
        </div>
      </div>
    </section>
  );
}
