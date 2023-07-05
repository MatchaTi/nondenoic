import { time } from '@/libs/utils';
import { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticleWrapper(post: Post) {
  return (
    <article className='mb-4 w-4/5 max-w-sm flex-none snap-start scroll-mx-4 md:max-w-xs md:scroll-mx-6 lg:mb-0 lg:w-auto lg:max-w-none lg:px-4'>
      <Link href={post.url}>
        <div className='mb-4 rounded-lg'>
          <div className='w-full overflow-hidden'>
            <div className='aspect-video'>
              <Image src={`${post.imagePreview}`} alt={post.title} width={1920} height={1080} className='rounded-xl' />
            </div>
          </div>
        </div>
      </Link>
      <div>
        <Link href={post.url}>
          <h3 className='mb-2 text-xl font-semibold'>{post.title}</h3>
        </Link>
        <p className='mb-2 opacity-80'>{post.excerpt}</p>
        <time className='text-sm opacity-80'>Diposting {time(post.date)}</time>
      </div>
    </article>
  );
}
