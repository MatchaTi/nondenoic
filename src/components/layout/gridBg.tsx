interface IGrid {
  full?: boolean;
}

export default function GridBg({ full }: IGrid) {
  return (
    <div className={`${full ? 'fixed' : 'absolute'} pointer-events-none inset-0 -z-10 flex justify-center`}>
      <div className='hidden h-full w-full max-w-7xl grid-cols-3 gap-4 px-8 lg:grid'>
        <div className='border-x border-neutral-200'></div>
        <div className='border-x border-neutral-200'></div>
        <div className='border-x border-neutral-200'></div>
      </div>
    </div>
  );
}
