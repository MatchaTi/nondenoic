export default function GridBg() {
  return (
    <div className='pointer-events-none fixed inset-0 -z-10 flex justify-center'>
      <div className='hidden h-full w-full max-w-7xl grid-cols-3 gap-4 px-4 lg:grid'>
        <div className='border-x border-dark-accent/10 dark:border-light-accent/5'></div>
        <div className='border-x border-dark-accent/10 dark:border-light-accent/5'></div>
        <div className='border-x border-dark-accent/10 dark:border-light-accent/5'></div>
      </div>
    </div>
  );
}
