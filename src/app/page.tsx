import Hero from '@/components/sections/Hero'
import AboutMe from '@/components/sections/AboutMe'
import Education from '@/components/sections/Education'
import SkillSet from '@/components/sections/SkillSet'
import WorkHistory from '@/components/sections/WorkHistory'
import Shop from "@/components/sections/Shop";
import UniqueValue from '@/components/sections/UniqueValue'
import Contact from '@/components/sections/Contact'
import LeftNav from '@/components/sections/LeftNav'

export default function Home() {
  return (
    <div className="flex">
      <aside className="w-[60px] md:w-[120px] fixed left-0 top-0 h-full z-10 bg-[#1E1E1E] text-white p-4">
        <LeftNav />
      </aside>

      <main className="ml-[60px] md:ml-[120px] w-[calc(100%-60px)] md:w-[calc(100%-120px)] min-w-0 overflow-x-hidden">
        <Hero />
        <AboutMe />
        <SkillSet />
        <WorkHistory />
        <Shop />
        <UniqueValue />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
