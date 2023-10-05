import { IconType } from 'react-icons';

interface KnowledgeCardProps {
    Icono: IconType;
    texto1: string;
    texto2: string;
}

const KnowledgeCard = ({ Icono, texto1, texto2}: KnowledgeCardProps ) => {
    return (
      <div className="flex flex-col items-center bg-white grid-cols-3 w-full h-48 py-2 px-2 mx-1 my-1">
        <Icono className=" w-16 h-16 mb-2 text-amber-300" />
        <span className="text-center text-lg font-semibold">{texto1}</span>
        <span className="font-light text-center text-sm text-slate-500">{texto2}</span>
      </div>
    );
};

export {KnowledgeCard};