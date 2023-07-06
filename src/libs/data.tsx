import { BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import KalkulatorKesehatan from '../../public/images/kalkulator-kesehatan.png';
import NondenoicBlog from '../../public/images/nondenoic.png';
import { IMyProject } from './interfaces';

export const myProjects: IMyProject[] = [
  {
    date: '2023',
    title: 'Nondenoic',
    desc: 'Personal blog saya untuk menyalurkan ide-ide dan inspirasi seputar web design.',
    imagePreview: NondenoicBlog,
    href: '/',
    techStack: (
      <div className='flex items-center gap-2 text-3xl'>
        <BiLogoReact className='text-sky-500' />
        <BiLogoTailwindCss className='text-sky-400' />
        <TbBrandNextjs />
      </div>
    ),
  },
  {
    date: '2023',
    title: 'Kalkulator Kesehatan',
    desc: 'Project pertama saya bersama teman saya, sebuah web application yang bertujuan untuk memonitoring, mengontrol seputar dunia kesehatan.',
    imagePreview: KalkulatorKesehatan,
    href: 'https://kalkulator-kesehatan.netlify.app/',
    anchor: true,
    techStack: (
      <div className='flex items-center gap-2 text-3xl'>
        <BiLogoReact className='text-sky-500' />
        <BiLogoTailwindCss className='text-sky-400' />
      </div>
    ),
  },
];
