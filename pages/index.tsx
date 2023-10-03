import { Presentacion } from "@/components/Presentacion";
import { Sidebar } from "@/components/Sidebar";

const Home = () => {
  return (
    <div className="bg-fondo h-auto flex">
      <Sidebar />
      <main className="debug w-full">
        <div>
          <section className=" debug bg-white h-96 ml-5 mr-32">
            <Presentacion />
          </section>

          <div className='font-bold h-36 ml-5 mr-32 text-center mt-5'>
            <span className=" text-xl">My Knowledge</span>
            <p className="font-light text-slate-500 mt-5 mx-40 text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde praesentium ea minus, et nihil voluptates reiciendis iure consequatur quos sequi?</p>
          </div>

          <section>education</section>
          <section>portfolio</section>
        </div>
      </main>
    </div>
  );
};

export default Home;
