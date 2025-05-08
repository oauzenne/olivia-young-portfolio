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
      <aside className="w-15 md:w-30 fixed left-0 top-0 h-full z-10 bg-[#1E1E1E] text-white p-4">
        <LeftNav />
      </aside>

      <main className="ml-15 md:ml-30 w-full pl-10">
        <Hero />
        <AboutMe />
        <SkillSet />
        <WorkHistory />
        <UniqueValue />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
