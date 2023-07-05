import BlurBlob from '../common/blurBlob';

export default function Hero() {
  return (
    <div className='mt-52 w-full border-y border-dark-accent/10 dark:border-light-accent/5 sm:mt-64 lg:mb-28'>
      <section className='mx-auto w-full max-w-7xl p-4 sm:px-8'>
        <BlurBlob />
        <div className='w-full'>
          <p className='mb-4 text-lg font-semibold text-nondenoic-main'>Welcome to Nondenoic</p>
          <h1 className='mb-4 w-full max-w-xs text-xl font-bold sm:max-w-lg sm:text-3xl xl:max-w-2xl xl:text-5xl'>
            Tempat dimana web design dan web styling bersinar dalam setiap pixel.
          </h1>
          <p className='w-full max-w-xl opacity-80'>
            Ayo berpetualang di tempat yang dipenuhi dengan inspirasi web design dan web styling yang kece badai. Di
            artikel ini, kita akan menggali sumber-sumber inspirasi yang keren badai, menemukan tren terbaru, dan
            menyajikan tips praktis untuk mewujudkan desain web yang memanjakan mata.
          </p>
        </div>
      </section>
    </div>
  );
}
