interface EncabezadosProps {
    titulo: string;
    descripcion: string;
}

const Encabezados = ( { titulo,descripcion }: EncabezadosProps ) => {
    return (
        <div className='font-bold h-36 ml-5 mr-32 text-center mt-9'>
            <span className=" text-xl"> {titulo} </span>
            <p className="font-light text-slate-500 mt-5 mx-40 text-base">{descripcion}</p>
          </div>
    );
};

export { Encabezados };