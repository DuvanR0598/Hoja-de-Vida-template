interface PortafolioProps {
    imagen: string;
    titulo: string;
    descripcion: string;
    link:string;
}

const PortafolioCard = ({ imagen, titulo, descripcion,link }: PortafolioProps) => {
    return (
        <div className=" w-[342px] rounded-3xl bg-white px-[30px] py-[50px] ml-5">
            <img className="max-w-[280px] w-[28vw] h-[300px] object-cover -mt-16 mr-[30px] rounded-3xl ]"
                src= {imagen}
                alt="Card" />
            <div className="flex flex-col tems-center mt-4">
                <span className="text-lg font-bold">{titulo}</span>
                <span className="font-light text-sm text-slate-500">{descripcion}</span>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-amber-400  px-[90px] py-1 rounded-xl mt-4 hover:scale-110 hover:bg-yellow-300">Leer más</button>
                </a>
            </div>
        </div>
    );
};

export { PortafolioCard };