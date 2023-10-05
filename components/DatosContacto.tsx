interface DatosContactoProps {
    textoIzq: string;
    textoDer: string;
    colorTexto: string;
}

const DatosContacto = ({ textoIzq, textoDer, colorTexto }: DatosContactoProps) => {
    return (
        <div className="flex flex-row w-auto justify-between mt-1">
            <span className="text-xs">{textoIzq}</span>
            <span className={`text-xs ${colorTexto}`}>{textoDer}</span>
        </div>
    );
};

export { DatosContacto };