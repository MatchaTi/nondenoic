import { mdxComponents } from '@/components/common/mdxComponents';
import { time } from '@/libs/utils';
import '@/styles/orbitalEden.css';
import { allPosts } from 'contentlayer/generated';
import 'highlight.js/styles/vs2015.css';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BsDot } from 'react-icons/bs';

export default function PostLayout({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  const anotherPosts = allPosts.filter((post) => post._raw.flattenedPath !== params.slug);
  if (!post) notFound();

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className='mt-20 w-full border-y border-light-accent/5 lg:mb-28'>
      <section className='mx-auto w-full max-w-7xl p-4'>
        <div className='mb-10 w-full overflow-hidden'>
          <div className='aspect-video sm:px-4'>
            <Image src={`${post.imagePreview}`} alt={post.title} width={1920} height={1080} className='rounded-xl' />
          </div>
        </div>
        <div className='w-full grid-cols-3 lg:grid'>
          <div className='order-1 mb-10 sm:px-4 lg:col-span-2'>
            <h1 className='mb-2 text-lg font-bold text-dark-headings sm:text-3xl'>{post.title}</h1>
            <p className='mb-4'>{post.excerpt}</p>
          </div>
          <div className='custom-prose order-3 mb-10 w-full sm:px-4 lg:col-span-2 lg:mb-0'>
            <MDXContent components={mdxComponents} />
          </div>
          <div className='z-10 order-2 sm:px-4 lg:sticky lg:top-20 lg:px-6'>
            <div className='mb-4 border-b border-light-accent/5 pb-4'>
              <div className='text-lg font-semibold text-dark-headings'>{post.author}</div>
              <time className='text-sm opacity-80'>Diposting {time(post.date)}</time>
            </div>
            <h2 className='mb-4 text-xl font-semibold text-dark-headings'>Artikel Lainnya</h2>
            <ul>
              {anotherPosts.length > 0 ? (
                anotherPosts.map((post, i) => (
                  <li key={i} className='opacity-80 duration-150 ease-in-out hover:opacity-100'>
                    <Link href={post.url} className='flex items-center'>
                      <span className='text-5xl'>
                        <BsDot />
                      </span>
                      <span>{post.title}</span>
                    </Link>
                  </li>
                ))
              ) : (
                <div>Belum ada artikel lainnya :(</div>
              )}
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) notFound();
  return { title: post.title };
};
