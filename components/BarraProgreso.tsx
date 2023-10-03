interface BarraProgresoProps {
    porcProgreso: number; 
    textoIzq: string; 
    textoDer: string; 
  }

const BarraProgreso = ({ porcProgreso, textoIzq, textoDer }: BarraProgresoProps) => {
  const estilo = {
    width: `${porcProgreso}%`,
  };

  return (
    <div className="relative flex flex-col justify-center py-1 mt-2">
        <div className="flex flex-row w-auto justify-between">
            <span className='text-sm text-slate-500'>{textoIzq}</span>
            <span className='text-sm text-slate-500 '>{textoDer}</span>
        </div>
      <div className=" h-2 w-56 rounded border-solid border border-amber-300">
        <div className=" bg-amber-300 h-full rounded" style={estilo}></div>
      </div>
      
    </div>
  );
}

export {BarraProgreso};