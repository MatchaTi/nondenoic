import PostsList from '@/components/common/postsList';
import Hero from '@/components/layout/hero';
import Portfolio from '@/components/layout/portfolio';
import RecentProjects from '@/components/layout/recentProjects';
import SkillsAndTools from '@/components/layout/skillsAndTools';

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <SkillsAndTools />
      <RecentProjects />
      <PostsList />
    </main>
  );
}
