'use client';

import { useState } from 'react';
import { AiFillGithub, AiFillHome } from 'react-icons/ai';
import { BsFilePersonFill } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { FaDonate } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import Button from '../common/button';
import DarkModeBtn from '../common/darkModeBtn';

interface IMenu {
  label: string;
  icon: React.ReactNode;
}

const menuItems: IMenu[] = [
  { label: 'Home', icon: <AiFillHome /> },
  { label: 'About Me', icon: <BsFilePersonFill /> },
  { label: 'On Github', icon: <AiFillGithub /> },
  { label: 'Donate', icon: <FaDonate /> },
];

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <aside>
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${isClicked ? 'left-0 ' : '-left-full 2xl:left-0'} ${
          isHovered ? '2xl:w-52 2xl:justify-start' : '2xl:w-20'
        } bg-base-secondary fixed top-0 z-50 flex h-screen max-h-screen w-full items-center justify-center overflow-y-auto px-4 duration-150 ease-in-out 2xl:items-start 2xl:overflow-x-hidden 2xl:py-10`}
      >
        <ul
          className={`${
            isHovered ? '2xl:items-start' : '2xl:items-center'
          } space-y-16 2xl:flex 2xl:h-full 2xl:w-full 2xl:flex-col 2xl:space-y-10`}
        >
          <li>
            <div
              className={`${
                isHovered && 'rotate-180'
              } hidden h-10 w-10 rounded bg-nondenoic-main duration-150 ease-in-out 2xl:block`}
            ></div>
          </li>
          {menuItems.map(({ label, icon }, index) => (
            <li
              key={index}
              className='relative flex w-fit items-center gap-4 overflow-x-hidden border-b border-light-accent pb-2 text-4xl after:absolute after:bottom-0 after:w-full after:-translate-x-full after:border-b after:border-light-text after:duration-150 after:ease-in-out hover:after:translate-x-0 dark:border-dark-accent after:dark:border-dark-text 2xl:text-2xl'
            >
              <span>{icon}</span>
              <span className={`${isHovered ? '2xl:inline' : '2xl:hidden'}`}>{label}</span>
            </li>
          ))}
          <li className='flex-1'></li>
          <li className='w-full'>
            <DarkModeBtn className='w-full' />
          </li>
        </ul>
      </div>
      <div className='fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-2 2xl:hidden'>
        <div className='h-10 w-10 rounded bg-nondenoic-main'></div>
        <Button type='button' color='transparent' onClick={() => setIsClicked(!isClicked)}>
          {isClicked ? (
            <CgClose className='text-light-text dark:text-dark-text' />
          ) : (
            <FaBarsStaggered className='rotate-180 text-light-text dark:text-dark-text' />
          )}
        </Button>
      </div>
    </aside>
  );
}
