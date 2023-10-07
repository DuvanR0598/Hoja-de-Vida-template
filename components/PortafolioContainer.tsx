import { PortafolioCard } from "./PortafolioCard";

const link = '/images/portafolio.webp' 

const PortafolioContainer = () =>{
    return (
        <><PortafolioCard
            imagen={link}
            titulo={"Clon de Spotify"}
            descripcion={"Proyecto desarrollado en el curso de Ingenieria Web con el profesor Daniel Saldarriaga quien nos guio y nos explico los conceptos de React."} 
            link={"https://github.com/DuvanR0598/Clone-Spotify"} />
            
            <PortafolioCard
                imagen={link}
                titulo={"Ingresos y Reingresos"}
                descripcion={"Proyecto desarrolado en la Universidad de Antioquia bajo el nombre de Code Factory donde se integro varios cursos y se uso metodologias agiles para simular el desarrolo de un proyecto real."} 
                link={"https://github.com/DuvanR0598/fabrica-escuela-udea-ingresos-reingresos"} />
                
            <PortafolioCard
                imagen={link}
                titulo={"Gestor de Citas"}
                descripcion={"Proyecto desarrolado de manera autonoma, donde se aplica conocimientos tanto en Back como Front, bajo los lenguajes de Java y Angular respectivamente"} 
                link={"https://github.com/DuvanR0598/GestorCitasGym_Backend"} />
        </>
    ); 
};

export { PortafolioContainer };