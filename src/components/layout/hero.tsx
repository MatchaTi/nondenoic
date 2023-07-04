export default function Hero() {
  return (
    <div className='mt-64 w-full border-y border-dark-accent/10 dark:border-light-accent/5 lg:mb-28'>
      <section className='mx-auto w-full max-w-7xl p-4 sm:px-8'>
        <div className='pointer-events-none relative -z-10 w-full'>
          <div className='absolute h-96 w-96 -translate-y-52 rounded-full bg-sky-400/20 blur-3xl'></div>
          <div className='absolute right-0 top-52 h-96 w-96 rounded-full bg-pink-400/20 blur-3xl'></div>
          <div className='absolute bottom-10 right-52 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl'></div>
        </div>
        <div className='w-full'>
          <p className='mb-4 opacity-80'>Welcome to Nondenoic</p>
          <h1 className='mb-4 w-full max-w-lg text-xl font-bold sm:text-3xl xl:max-w-2xl xl:text-5xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ut!
          </h1>
          <p className='w-full max-w-xl opacity-80'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quas architecto tempore mollitia
            pariatur iusto ex, esse animi praesentium impedit dolorum vero possimus in debitis ea quasi omnis eveniet
            sed.
          </p>
        </div>
      </section>
    </div>
  );
}
