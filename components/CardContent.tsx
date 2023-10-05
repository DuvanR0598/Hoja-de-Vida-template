import { KnowledgeCard } from "@/components/KnowledgeCard";
import { LiaLaptopCodeSolid, LiaLaptopSolid } from "react-icons/lia"
import { AiFillDatabase } from "react-icons/ai"
import { FaCodepen } from "react-icons/fa"
import { BsDatabaseCheck } from "react-icons/bs"
import { RiGitRepositoryPrivateLine } from "react-icons/ri"

const CardContent = () => {
    return (
        <>
        <div className='flex flex-row'>
            <KnowledgeCard
                Icono={AiFillDatabase}
                texto1="Persistencia de Datos"
                texto2="JPA, Hibernate" />
            <KnowledgeCard
                Icono={LiaLaptopCodeSolid}
                texto1="Back-End"
                texto2="Java, SpringBoot, JUnit" />
            <KnowledgeCard
                Icono={LiaLaptopSolid}
                texto1="Front-End"
                texto2="Angular, React" />
        </div>
        <div className='flex flex-row'>
            <KnowledgeCard
                Icono={FaCodepen}
                texto1="Gestor de Dependencias"
                texto2="Maven" />
            <KnowledgeCard
                Icono={BsDatabaseCheck}
                texto1="Base de Datos"
                texto2="MySQL, SQL, Oracle" />
            <KnowledgeCard
                Icono={RiGitRepositoryPrivateLine}
                texto1="Repositorio"
                texto2="Git, GitHub" />
        </div></>
    );
};

export { CardContent }; 