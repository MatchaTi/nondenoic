import { JetBrains_Mono } from 'next/font/google';
import { BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';

const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

interface IIcon {
  icon: React.ReactNode;
  label: string;
  color: string;
}

const skillIcons: IIcon[] = [
  { icon: <BiLogoJavascript />, label: 'JavaScript', color: 'text-yellow-400' },
  { icon: <BiLogoTypescript />, label: 'TypeScript', color: 'text-sky-600' },
  { icon: <BiLogoTailwindCss />, label: 'Tailwind CSS', color: 'text-sky-400' },
  { icon: <BiLogoReact />, label: 'React JS', color: 'text-sky-400' },
  { icon: <TbBrandNextjs />, label: 'Next JS', color: 'text-inherit' },
];

export default function Skillset() {
  return (
    <div className='min-h-screen w-full snap-start bg-dark-base'>
      <section className='mx-auto h-full w-full max-w-7xl p-8'>
        <h2
          className={`${jetBrains.className} text-center text-2xl font-bold underline decoration-nondenoic-main underline-offset-8 sm:mt-20 sm:text-3xl xl:text-4xl`}
        >
          My Skills
        </h2>
        <div className='mt-20 flex flex-wrap items-center justify-center gap-y-20 sm:mt-40'>
          {skillIcons.map(({ icon, label, color }, i) => (
            <div key={i} className='w-1/2 sm:w-1/3'>
              <div className='relative mx-auto flex h-24 w-24 items-center justify-center gap-4 lg:h-28 lg:w-28'>
                <div className={`${color} relative z-10 mx-auto flex justify-center text-5xl lg:text-7xl`}>{icon}</div>
                <div className='absolute left-0 top-0 h-full w-full rotate-45 rounded-3xl border border-neutral-100/5 bg-dark-secondary'></div>
              </div>
              <div className='mt-6 text-center font-semibold lg:mt-8 lg:text-xl'>{label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
