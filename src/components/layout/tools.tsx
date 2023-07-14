import { JetBrains_Mono } from 'next/font/google';
import { FigmaIcon, NeovimIcon, PhotoShopIcon, PremiereProIcon, VSCodeIcon } from '../icons/icons';

const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

interface IIcon {
  icon: React.ReactNode;
  label: string;
}

const toolIcons: IIcon[] = [
  { icon: <NeovimIcon />, label: 'Neovim' },
  { icon: <VSCodeIcon />, label: 'VS Code' },
  { icon: <FigmaIcon />, label: 'Figma' },
  { icon: <PhotoShopIcon />, label: 'Photoshop' },
  { icon: <PremiereProIcon />, label: 'Premiere Pro' },
];

export default function Tools() {
  return (
    <div className='min-h-screen w-full snap-start bg-light-base'>
      <section className='mx-auto h-full w-full max-w-7xl p-8'>
        <h2
          className={`${jetBrains.className} text-center text-2xl font-bold text-light-headings underline decoration-nondenoic-main underline-offset-8 sm:mt-20 sm:text-3xl xl:text-4xl`}
        >
          Tools
        </h2>
        <div className='mt-20 flex flex-wrap items-center justify-center gap-y-20 sm:mt-40'>
          {toolIcons.map(({ icon, label }, i) => (
            <div key={i} className='w-1/2 sm:w-1/3'>
              <div className='relative mx-auto flex h-24 w-24 items-center justify-center gap-4 lg:h-28 lg:w-28'>
                <div className='relative z-10 mx-auto flex justify-center text-5xl lg:text-7xl'>{icon}</div>
                <div className='absolute left-0 top-0 h-full w-full rotate-45 rounded-3xl border border-neutral-900/5 bg-light-secondary'></div>
              </div>
              <div className='mt-6 text-center font-semibold text-light-text lg:mt-8 lg:text-xl'>{label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
