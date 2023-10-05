interface educationProps {
    titulo1: string;
    subTitulo: string;
    fecha: string;
    titulo2: string;
    descripcion: string;
}

const Education = ( { titulo1,subTitulo,fecha,titulo2,descripcion }: educationProps ) => {
    return (
        <div className="flex justify-between border-b border border-gray-200 border-solid  h-[200px] py-8">
            <div className="flex flex-col w-5/12 ml-6">
                <span className="text-lg font-bold"> {titulo1} </span>
                <div className=" flex mt-5">
                    <span className="mr-4 text-xs font-semibold"> {subTitulo} </span>
                    <div className=" flex bg-amber-400 justify-center items-center px-3">
                        <span className="text-xs text-white"> {fecha} </span>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col w-7/12 mr-6">
                <span className="text-lg font-bold"> {titulo2} </span>
                <div className="flex">
                    <p className="font-light text-slate-500 "> {descripcion} </p>
                </div>
            </div>
        </div>
    );
};

export { Education };