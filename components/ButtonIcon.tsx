import { IconType } from 'react-icons';

interface ButtonIconProps{
    Icono: IconType;
    link: string;
}

const ButtonIcon = ({ link, Icono}: ButtonIconProps )=>{
    return( 
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button className=" bg-amber-400 px-2 py-2 mt-3 rounded-full hover:scale-110 hover:bg-yellow-300">
            <Icono />
            </button>
        </a>
    );
};

export {ButtonIcon} ;
