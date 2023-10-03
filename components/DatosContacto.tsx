interface DatosContactoProps {
    textoIzq: string;
    textoDer: string;
    colorTexto: string;
}

const DatosContacto = ({ textoIzq, textoDer, colorTexto }: DatosContactoProps) => {
    return (
        <div className="flex flex-row w-auto justify-between mt-2">
            <span className="text-sm">{textoIzq}</span>
            <span className={`text-sm ${colorTexto}`}>{textoDer}</span>
        </div>
    );
};

export { DatosContacto };