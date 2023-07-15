import { allPosts } from 'contentlayer/generated';
import { JetBrains_Mono } from 'next/font/google';
import ArticleWrapper from './articleWrapper';

const jetBrains = JetBrains_Mono({ subsets: ['latin'] });

export default function PostsList() {
  const articles = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className='h-screen w-full snap-start bg-dark-base py-8'>
      <div className='mt-10 w-full'>
        <section className='mx-auto w-full max-w-7xl p-8'>
          <div className='w-full'>
            <div className='mb-4 text-3xl text-dark-headings sm:text-4xl md:text-5xl'>
              <h2 className={`${jetBrains.className} font-bold`}>Artikel.</h2>
              <p className='mb-4 text-base opacity-80'>Menemukan harmoni visual dalam web design dan web styling.</p>
            </div>
            <div className='flex w-full max-w-7xl snap-x snap-mandatory space-x-4 overflow-x-auto sm:px-8 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-4 lg:gap-y-10 lg:space-x-0 lg:px-0'>
              {articles.map((article, i) => (
                <ArticleWrapper key={i} {...article} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
