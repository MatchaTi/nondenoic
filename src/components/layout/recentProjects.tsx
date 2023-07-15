import { JetBrains_Mono } from 'next/font/google';

const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

export default function RecentProjects() {
  return (
    <div className='min-h-screen w-full snap-start bg-light-base'>
      <section className='mx-auto h-full w-full max-w-7xl p-8'>
        <h2
          className={`${jetBrains.className} text-center text-2xl font-bold text-light-headings underline decoration-nondenoic-main underline-offset-8 sm:mt-20 sm:text-3xl xl:text-4xl`}
        >
          Tools
        </h2>
      </section>
    </div>
  );
}
