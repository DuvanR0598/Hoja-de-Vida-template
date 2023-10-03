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
            <div className=" debug flex flex-col mt-20 ml-12 ">
                <div className='debug text-4xl font-bold mb-7'>
                    <p>I´m Duvan Ruiz</p>
                    <span className="text-amber-300  ">Front-end</span>
                    <span className="ml-1">Developer</span>
                </div>
                <p className="debug font-light text-slate-500 mb-7 text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde praesentium ea minus, et nihil voluptates reiciendis iure consequatur quos sequi?</p>
                <HireMeButton onClick={dialogOpen} />
                <HireMeDialog isOpen={openDialog} handleClose={handleCloseDialog} />
            </div>

            <div className='debug flex items-center mx-16'>
                <img className="w-96 h-full"
                    src="/images/perfil_2.png"
                    alt="Imagen" />
            </div>
        </div>
    );
}

export { Presentacion };