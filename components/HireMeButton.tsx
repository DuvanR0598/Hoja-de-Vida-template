import { AiOutlineArrowRight } from 'react-icons/ai';

interface HireMeButtonProps {
  onClick: () => void;
}

const HireMeButton = ({ onClick }: HireMeButtonProps) => {
  const textoBoton = "HIRE ME";
  const icono = <AiOutlineArrowRight />;

  return <button onClick={onClick} className="font-semibold bg-amber-400 px-3 w-36 h-12 rounded-md hover:scale-110 hover:bg-yellow-300">
    <div className="flex items-center text-sm ml-5">
      {textoBoton}
      <span className=" mx-2">{icono}</span>
    </div>
  </button>;
}
export { HireMeButton };