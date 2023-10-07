import { CardContent } from "@/components/CardContent";
import { Presentacion } from "@/components/Presentacion";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { Encabezados } from "@/components/Encabezados";
import { PortafolioContainer } from "@/components/PortafolioContainer";
import { ButtonIconContainer } from "@/components/ButtonIconContainer";
import { EducationContainer } from "@/components/EducationContainer";

const Home = () => {
  return (
    <div className="bg-fondo h-auto flex">
      <Sidebar />
      <main className="w-full">
        <div>
          <section className="bg-white h-96 ml-5 mr-8">
            <Presentacion />
          </section>
          <Encabezados
            titulo={"Mi conocimiento"}
            descripcion={"Todos los Skills y conocimientos han sido adquiridos en estudios universitarios y de manera autonoma."} />
          <section className="h-96 ml-5 mr-8">
            <CardContent />
          </section>
          <Encabezados
            titulo={"Educación"}
            descripcion={"Se presenta los titulos obtenidos en las diferentes instituciones y universidades adquiridos hasta la fecha."} />
          <section className="bg-white ml-5 mr-8">
            <EducationContainer />
          </section>
          <Encabezados
            titulo={"Portafolio"}
            descripcion={"Se presenta los proyectos que he realizado hasta la fecha donde algunos son trabajos de la UdeA y otros desarrollados de manera autonoma para enriquecer mi conocimiento."} />
          <section className="flex">
            <PortafolioContainer />
          </section>
          <section className="bg-white ml-5 mr-8 mt-7">
            <Footer />
          </section>
        </div>
      </main>
      <ButtonIconContainer />
    </div>
  );
};

export default Home;
