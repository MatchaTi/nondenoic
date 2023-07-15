import { JetBrains_Mono } from 'next/font/google';
import {
  BiLogoFigma,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVisualStudio,
} from 'react-icons/bi';
import { SiAdobephotoshop, SiAdobepremierepro, SiNeovim } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

export default function SkillsAndTools() {
  return (
    <div className='relative h-screen w-full snap-start bg-dark-base py-8'>
      <section className='mx-auto h-full w-full max-w-4xl p-8'>
        <div className='grid h-full grid-cols-2 gap-1 lg:grid-cols-12 lg:grid-rows-12'>
          <div className='col-span-2 flex flex-col items-center justify-center text-3xl text-dark-text sm:text-4xl lg:col-span-3 lg:col-start-7 lg:row-span-3 lg:row-start-4 lg:text-5xl'>
            <h2 className={`${jetBrains.className} font-bold text-dark-headings`}>Skills</h2>
            <h2 className={`${jetBrains.className} font-bold text-dark-headings`}>&</h2>
            <h2 className={`${jetBrains.className} font-bold text-dark-headings`}>Tools</h2>
          </div>
          <div className='hidden bg-neutral-700 lg:col-start-8 lg:row-start-1 lg:flex'></div>
          <div className='hidden bg-neutral-700 lg:col-start-7 lg:row-start-1 lg:flex'></div>
          <div className='hidden bg-neutral-700 lg:col-start-6 lg:row-start-1 lg:flex'></div>
          <div className='hidden bg-neutral-700 lg:col-start-5 lg:row-start-1 lg:flex'></div>

          <div className='hidden bg-neutral-700 lg:col-start-9 lg:row-start-2 lg:flex'></div>
          <div className='hidden bg-neutral-700 lg:col-start-8 lg:row-start-2 lg:flex'></div>
          <div className='hidden bg-neutral-700 lg:col-start-7 lg:row-start-2 lg:flex'></div>
          <div className='flex items-center justify-center bg-dark-secondary duration-300 ease-in-out hover:bg-light-secondary hover:text-light-headings lg:col-span-2 lg:col-start-5 lg:row-start-2 lg:bg-transparent'>
            <TbBrandNextjs className='text-4xl lg:text-5xl' />
          </div>
          <div className='hidden bg-neutral-700 lg:col-start-4 lg:row-start-2 lg:flex'></div>
          <div className='hidden bg-neutral-700 lg:col-start-3 lg:row-start-2 lg:flex'></div>

          <div className='hidden bg-neutral-700 lg:col-start-2 lg:row-start-3 lg:flex'></div>
          <div className='hidden bg-neutral-700 lg:col-start-3 lg:row-start-3 lg:flex'></div>
          <div className='flex items-center justify-center bg-dark-secondary duration-300 ease-in-out hover:bg-light-secondary hover:text-light-headings lg:col-start-4 lg:row-start-3 lg:bg-transparent'>
            <BiLogoFigma className='text-4xl lg:text-5xl' />
          </div>
          <div className='hidden bg-neutral-700 lg:col-start-5 lg:row-start-3 lg:flex'></div>
          <div className='hidden bg-neutral-700 lg:col-start-6 lg:row-start-3 lg:flex'></div>

          <div className='hidden bg-neutral-800 lg:col-start-5 lg:row-start-4 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-4 lg:row-start-4 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-3 lg:row-start-4 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-2 lg:row-start-4 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-11 lg:row-start-4 lg:flex'></div>

          <div className='hidden bg-neutral-800 lg:col-start-5 lg:row-start-5 lg:flex'></div>
          <div className='flex items-center justify-center bg-dark-secondary duration-300 ease-in-out hover:bg-light-secondary hover:text-light-headings lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:row-start-5 lg:bg-transparent'>
            <BiLogoTypescript className='text-4xl lg:text-[96px]' />
          </div>
          <div className='hidden bg-neutral-800 lg:col-start-2 lg:row-start-5 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-1 lg:row-start-5 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-11 lg:row-start-5 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-12 lg:row-start-5 lg:flex'></div>

          <div className='hidden bg-neutral-800 lg:col-start-5 lg:row-start-6 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-2 lg:row-start-6 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-1 lg:row-start-6 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-11 lg:row-start-6 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-12 lg:row-start-6 lg:flex'></div>

          <div className='hidden bg-neutral-800 lg:col-start-6 lg:row-start-7 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-5 lg:row-start-7 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-4 lg:row-start-7 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-3 lg:row-start-7 lg:flex'></div>
          <div className='flex items-center justify-center bg-dark-secondary duration-300 ease-in-out hover:bg-light-secondary hover:text-light-headings lg:col-start-2 lg:row-start-7 lg:bg-transparent'>
            <SiAdobephotoshop className='text-3xl lg:text-4xl' />
          </div>
          <div className='hidden bg-neutral-800 lg:col-start-1 lg:row-start-7 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-12 lg:row-start-7 lg:flex'></div>
          <div className='flex items-center justify-center bg-dark-secondary duration-300 ease-in-out hover:bg-light-secondary hover:text-light-headings lg:col-start-11 lg:row-start-7 lg:bg-transparent'>
            <BiLogoReact className='text-4xl lg:text-5xl' />
          </div>
          <div className='hidden bg-neutral-800 lg:col-start-10 lg:row-start-7 lg:flex'></div>

          <div className='hidden bg-neutral-800 lg:col-start-12 lg:row-start-8 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-11 lg:row-start-8 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-10 lg:row-start-8 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-9 lg:row-start-8 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-8 lg:row-start-8 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-7 lg:row-start-8 lg:flex'></div>
          <div className='flex items-center justify-center bg-dark-secondary duration-300 ease-in-out hover:bg-light-secondary hover:text-light-headings lg:col-span-2 lg:col-start-5 lg:row-start-8 lg:bg-transparent'>
            <BiLogoVisualStudio className='text-4xl lg:text-5xl' />
          </div>
          <div className='hidden items-center justify-center bg-neutral-800 lg:col-start-4 lg:row-start-8 lg:flex'></div>
          <div className='flex items-center justify-center bg-dark-secondary duration-300 ease-in-out hover:bg-light-secondary hover:text-light-headings lg:col-start-3 lg:row-start-8 lg:bg-transparent'>
            <SiAdobepremierepro className='text-3xl lg:text-4xl' />
          </div>
          <div className='hidden bg-neutral-800 lg:col-start-2 lg:row-start-8 lg:flex'></div>
          <div className='hidden bg-neutral-800 lg:col-start-1 lg:row-start-8 lg:flex'></div>

          <div className='hidden bg-neutral-900 lg:col-start-2 lg:row-start-9 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-3 lg:row-start-9 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-4 lg:row-start-9 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-5 lg:row-start-9 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-6 lg:row-start-9 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-7 lg:row-start-9 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-8 lg:row-start-9 lg:flex'></div>
          <div className='flex items-center justify-center bg-dark-secondary duration-300 ease-in-out hover:bg-light-secondary hover:text-light-headings lg:col-span-2 lg:col-start-9 lg:row-span-2 lg:row-start-9 lg:bg-transparent'>
            <SiNeovim className='text-4xl lg:text-5xl' />
          </div>
          <div className='hidden bg-neutral-900 lg:col-start-11 lg:row-start-9 lg:flex'></div>

          <div className='hidden bg-neutral-900 lg:col-start-2 lg:row-start-10 lg:flex'></div>
          <div className='flex items-center justify-center bg-dark-secondary duration-300 ease-in-out hover:bg-light-secondary hover:text-light-headings lg:col-span-2 lg:col-start-3 lg:row-start-10 lg:bg-transparent'>
            <BiLogoTailwindCss className='text-4xl lg:text-5xl' />
          </div>
          <div className='hidden bg-neutral-900 lg:col-start-5 lg:row-start-10 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-6 lg:row-start-10 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-7 lg:row-start-10 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-8 lg:row-start-10 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-11 lg:row-start-10 lg:flex'></div>

          <div className='hidden bg-neutral-900 lg:col-start-3 lg:row-start-11 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-4 lg:row-start-11 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-5 lg:row-start-11 lg:flex'></div>
          <div className='flex items-center justify-center bg-dark-secondary duration-300 ease-in-out hover:bg-light-secondary hover:text-light-headings lg:col-span-2 lg:col-start-6 lg:row-start-11 lg:bg-transparent'>
            <BiLogoJavascript className='text-4xl lg:text-5xl' />
          </div>
          <div className='hidden bg-neutral-900 lg:col-start-8 lg:row-start-11 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-9 lg:row-start-11 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-10 lg:row-start-11 lg:flex'></div>

          <div className='hidden bg-neutral-900 lg:col-start-5 lg:row-start-12 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-6 lg:row-start-12 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-7 lg:row-start-12 lg:flex'></div>
          <div className='hidden bg-neutral-900 lg:col-start-8 lg:row-start-12 lg:flex'></div>
        </div>
      </section>
    </div>
  );
}
