export default function PostsList() {
  return (
    <div className='mt-64 w-full border-y border-dark-accent/10 dark:border-light-accent/5 lg:mb-28'>
      <section className='mx-auto w-full max-w-7xl p-4'>
        <div className='w-full'>
          <div className='sm:px-4'>
            <h2 className='text-xl font-semibold'>Artikel</h2>
            <p className='mb-4 opacity-80'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aspernatur, quo vel illum magnam
              adipisci.
            </p>
          </div>
          <div className='flex w-full max-w-7xl snap-x snap-mandatory space-x-4 overflow-x-auto sm:px-8 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-4 lg:gap-y-10 lg:space-x-0 lg:px-0'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <div
                key={i}
                className='mb-4 w-4/5 max-w-sm flex-none snap-start scroll-mx-4 md:max-w-xs md:scroll-mx-6 lg:mb-0 lg:w-auto lg:max-w-none lg:px-4'
              >
                <div className='mb-4 rounded bg-red-400 object-cover p-4'></div>
                <div>
                  <h3 className='mb-2 text-xl font-semibold'>Title</h3>
                  <p className='mb-2 opacity-80'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore omnis, laborum
                    doloremque vitae debitis dolorem inventore tempora quos unde?
                  </p>
                  <time className='text-sm opacity-80'>Diposting 04 Juni 2023</time>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
