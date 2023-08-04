'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillGithub, AiFillHome } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import { FaDonate } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import NondenoicIcon from '../../../public/images/nondenoic-icon.png';

interface IMenu {
  label: string;
  href: string;
  icon: React.ReactNode;
  anchor?: boolean;
}

const menuItems: IMenu[] = [
  { label: 'Home', href: '/', icon: <AiFillHome /> },
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
        } group fixed top-0 z-50 flex min-h-screen w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-neutral-100 duration-300 ease-in-out`}
      >
        <ul className='mt-3.5 flex h-full w-fit flex-col space-y-10'>
          {menuItems.map(({ label, href, icon, anchor }, i) => (
            <li key={i} className='min-w-max duration-150 ease-in-out group-hover:2xl:px-2'>
              {anchor ? (
                <a href={href} target='_blank'>
                  <div
                    onClick={() => setIsClicked(false)}
                    className='relative flex w-fit items-center gap-4 overflow-hidden border-b border-neutral-200 pb-2 text-4xl after:absolute after:bottom-0 after:w-full after:-translate-x-[150%] after:border-b after:border-neutral-400 after:duration-300 after:ease-in-out hover:after:translate-x-0'
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                  </div>
                </a>
              ) : (
                <Link href={href}>
                  <div
                    onClick={() => setIsClicked(false)}
                    className='relative flex w-fit items-center gap-4 overflow-hidden border-b border-neutral-200 pb-2 text-4xl after:absolute after:bottom-0 after:w-full after:-translate-x-[150%] after:border-b after:border-neutral-400 after:duration-300 after:ease-in-out hover:after:translate-x-0'
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className='fixed left-0 top-0 z-50 w-full p-4'>
        <div className='flex items-center justify-between'>
          <Link href={'/'} onClick={() => setIsClicked(false)}>
            <div className='h-10 w-10 rounded'>
              <Image src={NondenoicIcon} alt='Nondenoic Icon' className='rounded' />
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
