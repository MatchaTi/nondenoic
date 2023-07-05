import { allPosts } from 'contentlayer/generated';
import ArticleWrapper from './articleWrapper';

export default function PostsList() {
  const articles = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className='mt-64 w-full border-y border-dark-accent/10 dark:border-light-accent/5 lg:mb-28'>
      <section className='mx-auto w-full max-w-7xl p-4'>
        <div className='w-full'>
          <div className='sm:px-4'>
            <h2 className='text-xl font-semibold'>Artikel</h2>
            <p className='mb-4 opacity-80'>Menemukan harmoni visual dalam web design dan web styling.</p>
          </div>
          <div className='flex w-full max-w-7xl snap-x snap-mandatory space-x-4 overflow-x-auto sm:px-8 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-4 lg:gap-y-10 lg:space-x-0 lg:px-0'>
            {articles.map((article, i) => (
              <ArticleWrapper key={i} {...article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
