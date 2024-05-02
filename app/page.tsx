import { Intro, Skills, ToolsExp, Courses_Completed, Experiences, Contact, StarsCanvas, Feedbacks } from "@/components";

function Home() {
  return (
    <main className="px-5 md:px-12 w-full max-h-max flex flex-col justify-between mt-[80px]">
      <Intro />
      <Skills />
      <Experiences />
      <ToolsExp />
      <Courses_Completed />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </main>
  );
}

export default Home