import ResPie from "../components/ResPie"
import {techData} from "../libs/techData.js"

function HomeTech() {

  return (
    <section className="w-full h-screen px-8 py-14 bg-white/25 dark:bg-slate-900 transition-colors duration-500 ease-in-out">
      <h2 className="text-2xl font-mono font-semibold text-center dark:text-white">Technologies I Utilize</h2>
      <div className="flex justify-center items-center flex-col-reverse sm:flex-row mt-4">
        <div className="sm:w-1/2 sm:pr-14 dark:text-white text-sm">
          <p>
            This chart shows how frequently the technologies used in my work projects appear. By identifying the most commonly used technologies, I can focus on developing my expertise in those areas.
          </p>
          <br />
          <p className="hidden sm:block">
            If you're wondering why HTML, JavaScript, and CSS aren't included in this graph, it's because these three are foundational technologies I use alongside frameworks like ReactJS or Tailwind.
          </p>
        </div>
        <div className="w-full sm:w-1/2 h-[40vh] sm:h-[300px]">
          <ResPie data={techData} />
        </div>
      </div>
    </section>
  )
}

export default HomeTech