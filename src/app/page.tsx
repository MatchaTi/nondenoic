import PostsList from '@/components/common/postsList';
import Hero from '@/components/layout/hero';

export default function Home() {
  return (
    <main className='relative z-10 mx-auto min-h-screen w-full'>
      <Hero />
      <PostsList />
    </main>
  );
}
