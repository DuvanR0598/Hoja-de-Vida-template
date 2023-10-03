import { BarraProgreso } from "./BarraProgreso";
import { DatosContacto } from "./DatosContacto";
import { Perfil } from "./Perfil";
import { Skills } from "./Skills";

const Sidebar = () => {
    return (
        <aside className="bg-white w-80">
            <section className="mt-10" >
                <Perfil />
            </section>
            <div className="linea"></div>
            <section className="mt-5 flex flex-col mx-8">
                <DatosContacto textoIzq="Age" textoDer="24" colorTexto="white" />
                <DatosContacto textoIzq="Residence" textoDer="BD" colorTexto="white" />
                <DatosContacto textoIzq="Freelance" textoDer="Available" colorTexto="text-lime-500" />
                <DatosContacto textoIzq="Address" textoDer="Dhaka, Bangladesh" colorTexto="white" />
            </section>
            <div className="linea_2"></div>
            <section className="mt-3 flex flex-col mx-10">
                <span className="titulo-sidebar">Languages</span>
                <BarraProgreso porcProgreso={100} textoIzq="Bangla" textoDer="100%" />
                <BarraProgreso porcProgreso={80} textoIzq="English" textoDer="80%" />
                <BarraProgreso porcProgreso={60} textoIzq="Spanish" textoDer="60%" />
            </section>
            <div className="linea_2"></div>
            <section className="mt-3 flex flex-col mx-10">
                <span className="titulo-sidebar">Programming Languages</span>
                <BarraProgreso porcProgreso={90} textoIzq="Html" textoDer="90%" />
                <BarraProgreso porcProgreso={85} textoIzq="CSS" textoDer="85%" />
                <BarraProgreso porcProgreso={80} textoIzq="Js" textoDer="80%" />
                <BarraProgreso porcProgreso={75} textoIzq="PHP" textoDer="75%" />
                <BarraProgreso porcProgreso={85} textoIzq="WordPress" textoDer="85%" />
            </section>
            <div className="linea_2"></div>
            <section className="mt-3 flex flex-col mx-10">
                <span className="titulo-sidebar">Extra Skills</span>
                <Skills texto="Bootstrap, Materialize" />
                <Skills texto="Stylus, Sass, Less" />
                <Skills texto="Gulp, Webpack, Grunt" />
                <Skills texto="Git Knowledge" />

            </section>
            <div className="linea_2"></div>
        </aside>
    );
};

export { Sidebar };