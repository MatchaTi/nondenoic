import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoJavascript, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi';
import { DiCss3 } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';

interface IIcon {
  icon: React.ReactNode;
  color: string;
}

const icons: IIcon[] = [
  { icon: <AiFillHtml5 />, color: 'text-orange-600' },
  { icon: <DiCss3 />, color: 'text-blue-400' },
  { icon: <BiLogoJavascript />, color: 'text-yellow-400' },
  { icon: <BiLogoTailwindCss />, color: 'text-sky-400' },
  { icon: <BiLogoReact />, color: 'text-sky-500' },
  { icon: <TbBrandNextjs />, color: 'text-inherit' },
];

export default function TechnicalSkills() {
  return (
    <>
      <div className='mb-4 text-lg font-semibold'>Technical Skills</div>
      <ul className='flex items-center justify-center gap-4'>
        {icons.map(({ icon, color }, i) => (
          <li key={i} className={`${color} tech-icon text-3xl duration-150 ease-in-out`}>
            <span>{icon}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
