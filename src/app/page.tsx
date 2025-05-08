import Hero from '@/components/sections/Hero'
import AboutMe from '@/components/sections/AboutMe'
import Education from '@/components/sections/Education'
import SkillSet from '@/components/sections/SkillSet'
import WorkHistory from '@/components/sections/WorkHistory'
import UniqueValue from '@/components/sections/UniqueValue'
import Contact from '@/components/sections/Contact'
import LeftNav from '@/components/sections/LeftNav'

export default function Home() {
  return (
    <div className="flex">
      <aside className="w-20 md:w-40 fixed left-0 top-0 h-full z-10">
        <LeftNav />
      </aside>

      <main className="ml-20 md:ml-40 w-full">
        <Hero />
        <AboutMe />
        <Education />
        <SkillSet />
        <WorkHistory />
        <UniqueValue />
        <Contact />
      </main>
    </div>
  );
}
