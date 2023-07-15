import PostsList from '@/components/common/postsList';
import Footer from '@/components/layout/footer';
import Hero from '@/components/layout/hero';
import Portfolio from '@/components/layout/portfolio';
import RecentProjects from '@/components/layout/recentProjects';
import SkillsAndTools from '@/components/layout/skillsAndTools';

export default function Home() {
  return (
    <main className='no-scrollbar relative z-10 mx-auto h-screen w-full snap-y snap-mandatory overflow-y-auto overflow-x-hidden'>
      <div>
        <Hero />
        <Portfolio />
        <SkillsAndTools />
        <RecentProjects />
        <PostsList />
        <Footer />
      </div>
    </main>
  );
}
