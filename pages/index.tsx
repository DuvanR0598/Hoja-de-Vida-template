import { ButtonIcon } from "@/components/ButtonIcon";
import { CardContent } from "@/components/CardContent";
import { Presentacion } from "@/components/Presentacion";
import { Sidebar } from "@/components/Sidebar";

import { ImFacebook } from 'react-icons/im';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Footer } from "@/components/Footer";
import { Education } from "@/components/Education";

const Home = () => {
  return (
    <div className="bg-fondo h-auto flex">
      <Sidebar />
      <main className="w-full">
        <div>
          <section className="bg-white h-96 ml-5 mr-8">
            <Presentacion />
          </section>
          <div className='font-bold h-36 ml-5 mr-32 text-center mt-9'>
            <span className=" text-xl">Mi Conocimiento</span>
            <p className="font-light text-slate-500 mt-5 mx-40 text-base">Todos los Skills y conocimientos han sido adquiridos en estudios universitarios y de manera autonoma.</p>
          </div>
          <section className="h-96 ml-5 mr-8">
            <CardContent />
          </section>
          <div className='font-bold h-36 ml-5 mr-32 text-center mt-9'>
            <span className=" text-xl">Educacion</span>
            <p className="font-light text-slate-500 mt-5 mx-40 text-base">Se presenta los titulos obtenidos en las diferentes instituciones y universidades adquiridos hasta la fecha.</p>
          </div>
          <section className="bg-white ml-5 mr-8">
            <Education
              titulo1={"Universidad de Antioquia"}
              subTitulo={"Ingenieria"}
              fecha={"Agos 2018 - Nov 2023"}
              titulo2={"Certificados Obtenidos"}
              descripcion={"Aun me encuentro estudiando la Ingenieria de sistemas"} />

            <Education
              titulo1={"SENA"}
              subTitulo={"Tecnologia"}
              fecha={"Ene 2016 - Jun 2018"}
              titulo2={"Certificados Obtenidos"}
              descripcion={"Tecnologo en Gestion de Negocios"} />

            <Education
              titulo1={"I.E Felix Maria Restrepo L"}
              subTitulo={"Bachiller"}
              fecha={"Nov 2015"}
              titulo2={"Certificados Obtenidos"}
              descripcion={"Bachiller Academico"} />
          </section>
          <section className="bg-white ml-5 mr-8 mt-7">
            <Footer />
          </section>
        </div>
      </main>
      <aside className="bg-white w-24 flex flex-col items-center py-6 ">
        <div className=" flex flex-col items-center mt-3 fixed ">
          <span className="font-bold">Links</span>
          <ButtonIcon link="https://www.facebook.com/duvan.ruiz.92" Icono={ImFacebook} />
          <ButtonIcon link="https://www.instagram.com/duvan0598/" Icono={AiFillInstagram} />
          <ButtonIcon link="www.linkedin.com/in/duvan-f-ruiz-ocampo-09a009183" Icono={AiFillLinkedin} />
          <ButtonIcon link="https://github.com/DuvanR0598" Icono={AiFillGithub} />
        </div>
      </aside>
    </div>
  );
};

export default Home;
