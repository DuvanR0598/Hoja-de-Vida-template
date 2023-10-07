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
    <div className="relative flex flex-col justify-center">
        <div className="flex flex-row w-auto justify-between">
            <span className='text-xs text-slate-500 mb-1'>{textoIzq}</span>
            <span className='text-xs text-slate-500'>{textoDer}</span>
        </div>
      <div className="h-2 w-56 rounded border-solid border border-amber-300 p-[1px]">
        <div className="bg-amber-300 h-full rounded" style={estilo}></div>
      </div>
      
    </div>
  );
}

export {BarraProgreso};