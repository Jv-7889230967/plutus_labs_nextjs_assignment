// app/home/page.tsx
import { getWorldPopulation } from "@/utils/getWorldPopulation";
import { getDensity } from "@/utils/getDensity";
import { getGrowth } from "@/utils/getGrowth";

const Home = async () => {
  const population = await getWorldPopulation();
  const density = await getDensity();
  const growth = await getGrowth();
  
  return (
    <main className="size-full flex flex-col gap-[15px]">
      <div className="h-[116px] w-full flex gap-[15px]">
        <div className="home-data-tab">
          <p className="text-sm text-slate-500 font-semibold">World Population</p>
          <p className="text-2xl font-semibold">{population ?? '7.9B'}</p>
        </div>
        <div className="home-data-tab">
          <p className="text-sm text-slate-500 font-semibold">Average Density</p>
          <p className="text-2xl font-semibold">{density ?? '60 p/Km'}</p>
        </div>
      </div>
      <div className="size-full flex justify-center items-center bg-[#F6F7F5] rounded-[12px] border-2 border-solid border-black">
        <div className="stats-container">
          <section className="h-full w-[150px] flex flex-col justify-between">
            <div className="h-[137px] w-full block">
              <p className="text-sm font-semibold text-slate-500">Total Population</p>
              <p className="text-2xl font-bold text-black">{population ?? '7.9B'}</p>
            </div>
            <div className="h-[137px] w-full block">
              <p className="text-sm font-semibold text-slate-500">Change in last year</p>
              <p className="text-2xl font-bold text-black">{growth ?? '+300M'}</p>
            </div>
            <div className="h-[137px] w-full block">
              <p className="text-sm font-semibold text-slate-500">Life Expectancy at Birth</p>
              <p className="text-2xl font-bold text-black">59 Yrs</p>
            </div>
            <button className="h-[80px] w-[125px] text-white text-center bg-custom-gradient rounded-[24px]">
              Dive Deeper
            </button>
          </section>
          <section className="h-full flex-1 border-2 border-solid border-black">
            
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;
