import { Presentacion } from "@/components/Presentacion";
import { Sidebar } from "@/components/Sidebar";

const Home = () => {
  return (
    <div className="bg-fondo h-auto flex">
      <Sidebar />
      <main className="debug w-full">
        <div>
          <section className=" debug bg-white h-96 mx-9">
            <Presentacion />
          </section>
          <section>My knowledge</section>
          <section>education</section>
          <section>portfolio</section>
        </div>
      </main>
    </div>
  );
};

export default Home;
