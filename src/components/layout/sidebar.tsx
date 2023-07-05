'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillGithub, AiFillHome } from 'react-icons/ai';
import { BsFilePersonFill } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { FaDonate } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import NondenoicIcon from '../../../public/images/nondenoic-icon.svg';
import DarkModeBtn from '../common/darkModeBtn';

interface IMenu {
  label: string;
  href: string;
  icon: React.ReactNode;
  anchor?: boolean;
}

const menuItems: IMenu[] = [
  { label: 'Home', href: '/', icon: <AiFillHome /> },
  { label: 'About Me', href: '/about', icon: <BsFilePersonFill /> },
  { label: 'On Github', href: 'https://github.com/MatchaTi', icon: <AiFillGithub />, anchor: true },
  { label: 'Support Me', href: 'https://trakteer.id/AdiIfai/tip?quantity=1', icon: <FaDonate />, anchor: true },
];

export default function Sidebar() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <aside>
      <div
        className={`${
          isClicked ? 'left-0' : '-left-full'
        } bg-base-secondary group fixed top-0 z-50 flex min-h-screen  w-full items-center justify-center overflow-y-auto overflow-x-hidden border-dark-accent/10 duration-300 ease-in-out dark:border-light-accent/5 2xl:left-0 2xl:w-[3.35rem] 2xl:border-r hover:2xl:w-56`}
      >
        <ul className='mt-3.5 flex h-full w-fit flex-col space-y-10 2xl:h-screen 2xl:w-full'>
          <li className='hidden duration-150 ease-in-out 2xl:block 2xl:px-1.5 group-hover:2xl:px-4'>
            <Link href={'/'}>
              <div className='h-10 w-10 rounded'>
                <Image src={NondenoicIcon} alt='Nondenoic Icon' />
              </div>
            </Link>
          </li>
          {menuItems.map(({ label, href, icon, anchor }, i) => (
            <li key={i} className='min-w-max duration-150 ease-in-out group-hover:2xl:px-2'>
              {anchor ? (
                <a href={href} target='_blank'>
                  <div
                    onClick={() => setIsClicked(false)}
                    className='relative flex w-fit items-center gap-4 overflow-hidden border-b border-dark-accent/10 pb-2 text-4xl after:absolute after:bottom-0 after:w-full after:-translate-x-[150%] after:border-b after:border-light-text after:duration-300 after:ease-in-out hover:after:translate-x-0 dark:border-dark-accent dark:border-light-accent/5 after:dark:border-dark-text 2xl:px-3.5 2xl:text-2xl'
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                  </div>
                </a>
              ) : (
                <Link href={href}>
                  <div
                    onClick={() => setIsClicked(false)}
                    className='relative flex w-fit items-center gap-4 overflow-hidden border-b border-dark-accent/10 pb-2 text-4xl after:absolute after:bottom-0 after:w-full after:-translate-x-[150%] after:border-b after:border-light-text after:duration-300 after:ease-in-out hover:after:translate-x-0 dark:border-dark-accent dark:border-light-accent/5 after:dark:border-dark-text 2xl:px-3.5 2xl:text-2xl'
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                  </div>
                </Link>
              )}
            </li>
          ))}
          <li className='hidden flex-1 2xl:inline'></li>
          <li className='px-2 pb-10' onClick={() => setIsClicked(false)}>
            <DarkModeBtn fullField={true} />
          </li>
        </ul>
      </div>
      <div className='fixed left-0 top-0 z-50 w-full p-4 2xl:hidden'>
        <div className='flex items-center justify-between'>
          <Link href={'/'} onClick={() => setIsClicked(false)}>
            <div className='h-10 w-10 rounded'>
              <Image src={NondenoicIcon} alt='Nondenoic Icon' />
            </div>
          </Link>
          <button type='button' onClick={() => setIsClicked(!isClicked)}>
            {isClicked ? <CgClose /> : <FaBarsStaggered />}
          </button>
        </div>
      </div>
    </aside>
  );
}
