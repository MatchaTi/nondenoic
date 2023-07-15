import { BsFillMoonFill } from 'react-icons/bs';
import Button from './button';

export function Sidebar() {
  return (
    <div className='w-full overflow-hidden rounded-lg border border-white/10'>
      <div className='flex h-[440px] bg-white'>
        <aside className='group flex h-full w-[3.35rem] flex-col bg-slate-900 p-1.5 text-white duration-300 ease-in-out hover:w-56'>
          <div className='flex min-w-max cursor-pointer items-center gap-4'>
            <div className='h-10 w-10 rounded bg-blue-500'></div>
            <div>
              <div>Sidebar</div>
              <div className='text-xs opacity-75'>Front End Developer</div>
            </div>
          </div>
          <div className='mt-4 flex min-w-max items-center gap-4 rounded bg-white/5 p-2 duration-300 ease-in-out group-hover:px-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6 opacity-50'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
            <div className='hidden text-sm opacity-50 group-hover:block'>Search...</div>
          </div>
          <div className='border-b border-white/5 pb-2'>
            <div className='mt-4 flex min-w-max cursor-pointer items-center gap-4 rounded p-2 opacity-50 duration-300 ease-in-out hover:bg-white/5 hover:opacity-100 group-hover:px-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                />
              </svg>
              <div className='hidden text-sm group-hover:block'>Home</div>
            </div>
            <div className='mt-4 flex min-w-max cursor-pointer items-center gap-4 rounded p-2 opacity-50 duration-300 ease-in-out hover:bg-white/5 hover:opacity-100 group-hover:px-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
                />
              </svg>
              <div className='hidden text-sm group-hover:block'>Bookmark</div>
            </div>
          </div>
          <div className='flex-1'>
            <div className='mt-4 flex min-w-max cursor-pointer items-center gap-4 rounded p-2 opacity-50 duration-300 ease-in-out hover:bg-white/5 hover:opacity-100 group-hover:px-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                />
              </svg>
              <div className='hidden text-sm group-hover:block'>Profile</div>
            </div>
            <div className='mt-4 flex min-w-max cursor-pointer items-center gap-4 rounded p-2 opacity-50 duration-300 ease-in-out hover:bg-white/5 hover:opacity-100 group-hover:px-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                />
              </svg>
              <div className='hidden text-sm group-hover:block'>Sign Out</div>
            </div>
          </div>
          <Button fullField>
            <BsFillMoonFill />
          </Button>
        </aside>
        <div className='flex-1 p-4'>Content</div>
      </div>
    </div>
  );
}
