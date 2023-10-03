import Image from 'next/image';

const Perfil = () => {
    return (
        <div className="relative text-center">
            <div className="relative inline-block">
                <Image className='rounded-full mx-auto mb-4' 
                src={'/images/perfil.jpg'} 
                alt={'foto-perfil'} 
                height={152}
                width={152}/>
                <div className="w-5 h-5 bg-green-500 rounded-full absolute bottom-7 right-2"></div>
            </div>
            <div>
                <span className=" text-lg font-semibold mb-2">Duvan Ruiz</span>
            </div>
            <div>
            <span className=" text-sm font-light text-slate-500">Front-End Developer</span>
            </div>
        </div>
        
    ); 
};

export {Perfil};