import { BarraProgreso } from "./BarraProgreso";
import { DatosContacto } from "./DatosContacto";
import { Perfil } from "./Perfil";
import { Skills } from "./Skills";

const Sidebar = () => {
    return (
        <aside className="  bg-white w-[430px]">
            <div className="  mx-2 fixed">
                <section className=" mt-3" >
                    <Perfil />
                </section>
                <div className="linea"></div>
                <section className=" mt-1 flex flex-col mx-9">
                    <DatosContacto textoIzq="Edad" textoDer="25" colorTexto="white" />
                    <DatosContacto textoIzq="Residencia" textoDer="La Union Ant" colorTexto="white" />
                    <DatosContacto textoIzq="Freelance" textoDer="Available" colorTexto="text-lime-500" />
                    <DatosContacto textoIzq="Correo" textoDer="duvan.ruiz1@udea.edu.co" colorTexto="white" />
                </section>
                <div className="linea_2"></div>
                <section className=" flex flex-col mx-9">
                    <span className="titulo-sidebar text-sm">Lenguajes</span>
                    <BarraProgreso porcProgreso={100} textoIzq="Español" textoDer="100%" />
                    <BarraProgreso porcProgreso={40} textoIzq="Ingles" textoDer="40%" />
                </section>
                <div className="linea_2"></div>
                <section className=" flex flex-col mx-9">
                    <span className="titulo-sidebar text-sm">Lenguajes de Programacion</span>
                    <BarraProgreso porcProgreso={70} textoIzq="Java" textoDer="70%" />
                    <BarraProgreso porcProgreso={50} textoIzq="SpringBoot" textoDer="50%" />
                    <BarraProgreso porcProgreso={15} textoIzq="React" textoDer="15%" />
                </section>
                <div className="linea_2"></div>
                <section className=" flex flex-col mx-9">
                    <span className="titulo-sidebar text-sm">Skills Extra</span>
                    <Skills texto="Bootstrap, Materialize" />
                    <Skills texto="Git Knowledge" />
                </section>
                <div className="linea_2"></div>
            </div>
        </aside>
    );
};

export { Sidebar };