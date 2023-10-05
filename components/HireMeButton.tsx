import { AiOutlineArrowRight } from 'react-icons/ai';

interface HireMeButtonProps {
  onClick: () => void;
}

const HireMeButton = ({ onClick }: HireMeButtonProps) => {
  const textoBoton = "CONTACTAME";
  const icono = <AiOutlineArrowRight />;

  return <button onClick={onClick} className="font-semibold bg-amber-400 px-0 w-28 h-9 rounded-md hover:scale-105 hover:bg-yellow-300">
    <div className="flex items-center text-xs ml-2">
      {textoBoton}
      <span className=" mx-2">{icono}</span>
    </div>
  </button>;
}
export { HireMeButton };