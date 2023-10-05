import React, { useState } from 'react';
import { HireMeButton } from './HireMeButton';
import { HireMeDialog } from './HireMeDialog';

const Presentacion = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const dialogOpen = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col mt-3 ml-12">
                <div className='text-4xl font-bold mb-7'>
                    <p>Soy Duvan Ruiz</p>
                    <span className="text-amber-300 ">Back-end</span>
                    <span className="ml-1">Developer</span>
                </div>
                <p className="font-light text-slate-500 mb-7 mr-24">Con capacidad de desempeñar habilidades como trabajo en equipo y adaptación al medio. Con gusto por el aprendizaje y la investigación en lenguajes, herramientas y Frameworks de programación.</p>
                <HireMeButton onClick={dialogOpen} />
                <HireMeDialog isOpen={openDialog} handleClose={handleCloseDialog} />
            </div>
            <img className="w-[383px] mr-7"
                src="/images/perfil_2.png"
                alt="Imagen" />
        </div>
    );
}

export { Presentacion };