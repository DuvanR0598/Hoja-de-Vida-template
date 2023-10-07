import { Education } from "./Education";

const EducationContainer = () =>{
    return (
        <><Education
            titulo1={"Universidad de Antioquia"}
            subTitulo={"Ingenieria"}
            fecha={"Agos 2018 - Nov 2023"}
            titulo2={"Certificados Obtenidos"}
            descripcion={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum passages, and more recently with desktop publishing software."} />
            
            <Education
                titulo1={"SENA"}
                subTitulo={"Tecnologia"}
                fecha={"Ene 2016 - Jun 2018"}
                titulo2={"Certificados Obtenidos"}
                descripcion={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum passages, and more recently with desktop publishing software."} />
                
            <Education
                titulo1={"I.E Felix Maria Restrepo L"}
                subTitulo={"Bachiller"}
                fecha={"Feb 2005 - Nov 2015"}
                titulo2={"Certificados Obtenidos"}
                descripcion={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum passages, and more recently with desktop publishing software."} /></>
    ); 
};

export { EducationContainer };