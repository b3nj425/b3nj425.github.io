import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import autoprefixer from "autoprefixer";
import Image from 'next/image';

export default function Projects() {
    const [showProjectsFolder, setShowProjectsFolder] = useState(false);
    const [showReadmePaper, setShowReadmePaper] = useState(false);
    const [showBingoFolder, setShowBingoFolder] = useState(false);
    const [showBingoDataPaper, setShowBingoDataPaper] = useState(false);
    const [showBingoImage, setShowBingoImage] = useState(false);
    
    const [projectsState, setProjectsState] = useState({ x: 100, y: 100, width: 600, height: 400 });
    const [readmeState, setReadmeState] = useState({ x: 300, y: 150, width: 600, height: 400 });
    const [bingoState, setBingoState] = useState({ x: 300, y: 150, width: 600, height: 400 });
    const [bingoDataState, setBingoDataState] = useState({ x: 300, y: 150, width: 600, height: 400 });
    const [bingoImageState, setBingoImageState] = useState({ x: 300, y: 150, width: 1100, height: autoprefixer });

    const router = useRouter();

    const startDragging = (e, window, setWindowState) => {
        const offsetX = e.clientX - window.x;
        const offsetY = e.clientY - window.y;
        
        const onMouseMove = (moveEvent) => {
            setWindowState((prev) => ({ ...prev, x: moveEvent.clientX - offsetX, y: moveEvent.clientY - offsetY }));
        };
        
        const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };
        
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    };
    
    return (
        <div className="fixed min-h-screen w-screen bg-[#0b4e6d] font-[VT323] text-base text-x1 lg:text-3xl text-black select-none">
            <div className="lg:p-16 p-10 w-full h-full flex flex-col">
                <div className="cursor-pointer lg:w-28 w-24" onClick={() => setShowProjectsFolder(true)}>
                    <Image src="folder.png" className="lg:w-28 w-24" alt="folder" />
                    <p className="text-white text-center">Projects</p>
                </div>
                <div className="cursor-pointer lg:w-28 w-24" onClick={() => setShowReadmePaper(true)}>
                    <Image src="paper.png" className="lg:w-28 w-24" alt="paper" />
                    <p className="text-white text-center">README</p>
                </div>
            </div>

            {/*Ventana Projects*/}
            {showProjectsFolder && (
                <motion.div
                    className="absolute bg-gray-100 border-4 border-gray-400"
                    style={{ left: projectsState.x, top: projectsState.y, width: projectsState.width, height: projectsState.height }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="border-b-4 border-gray-400 h-10 bg-gray-200 flex justify-between items-center px-4 cursor-move" 
                    onMouseDown={(e) => startDragging(e, projectsState, setProjectsState)}>
                        <span className="absolute left-1/2 -translate-x-1/2">Projects</span>
                        <button className="ml-auto w-7 h-7 hover:bg-gray-300" 
                        onClick={() => setShowProjectsFolder(false)}>X</button>
                    </div>
                    <div className="p-4 flex flex-row">
                        <div className="cursor-pointer lg:w-32 w-24" 
                        onClick={() => setShowProjectsFolder(true)}>
                            <Image src="folder.png" className="lg:w-32 w-24" alt="folder"
                            onClick={() => setShowBingoFolder(true)}/>
                            <p className="text-black text-center"
                            onClick={() => setShowBingoFolder(true)}>Bingo</p>
                        </div>
                        <div className="cursor-pointer lg:w-32 w-24" 
                        onClick={() => setShowProjectsFolder(true)}>
                            <Image src="folder.png" className="lg:w-32 w-24" alt="folder" />
                            <p className="text-black text-center">Pagina de comercio</p>
                        </div>
                    </div>
                </motion.div>
            )}
            
            {/* Ventana README */}
            {showReadmePaper && (
                <motion.div
                    className="absolute bg-gray-100 border-4 border-gray-400"
                    style={{ left: readmeState.x, top: readmeState.y, width: readmeState.width, height: readmeState.height }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="border-b-4 border-gray-400 h-10 bg-gray-200 flex justify-between items-center px-4 cursor-move" 
                    onMouseDown={(e) => startDragging(e, readmeState, setReadmeState)}>
                        <span className="absolute left-1/2 -translate-x-1/2">README</span>
                        <button className="ml-auto w-7 h-7 hover:bg-gray-300" 
                        onClick={() => setShowReadmePaper(false)}>X</button>
                    </div>
                    <div className="p-4">
                    <p>&quot; Puedes volver a la terminal anterior <b>&quot;Apagando el sistema&quot;</b> presionando dos veces en el botón de Apagar &quot;</p>
                </div>
                </motion.div>
            )}
            {/*carpeta Bingo*/}
            {showBingoFolder && (
                <motion.div
                    className="absolute bg-gray-100 border-4 border-gray-400"
                    style={{ left: bingoState.x, top: bingoState.y, width: bingoState.width, height: bingoState.height }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                <div className="border-b-4 border-gray-400 h-10 bg-gray-200 flex justify-between items-center px-4 cursor-move" 
                    onMouseDown={(e) => startDragging(e, bingoState, setBingoState)}>
                    <span className="absolute left-1/2 -translate-x-1/2">Bingo</span>
                    <button className="ml-auto w-7 h-7 hover:bg-gray-300" 
                    onClick={() => setShowBingoFolder(false)}>X</button>
                </div>
                <div className="p-4 flex flex-row">
                        <div className="cursor-pointer w-32">
                            <Image src="img.png" className="w-32" alt="img"
                            onClick={() => setShowBingoImage(true)}/>
                            <p className="text-black text-center"
                            onClick={() => setShowBingoImage(true)}>Bingo.jpg</p>
                        </div>
                        <div className="cursor-pointer w-32">
                            <Image src="paper.png" className="w-32" alt="paper"
                            onClick={(() => setShowBingoDataPaper(true))}/>
                            <p className="text-black text-center"
                            onClick={(() => setShowBingoDataPaper(true))}>BingoData.txt</p>
                        </div>
                    </div>
                <div>

                </div>
                </motion.div>
            )}
            {/*Ventana papel del bingo*/}
            {showBingoDataPaper && (
                <motion.div
                    className="absolute bg-gray-100 border-4 border-gray-400"
                    style={{ left: bingoDataState.x, top: bingoDataState.y, width: bingoDataState.width, height: bingoDataState.height }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                <div className="border-b-4 border-gray-400 h-10 bg-gray-200 flex justify-between items-center px-4 cursor-move" 
                onMouseDown={(e) => startDragging(e, bingoDataState, setBingoDataState)}>
                    <span className="absolute left-1/2 -translate-x-1/2">BingoData</span>
                    <button className="ml-auto w-7 h-7 hover:bg-gray-300" onClick={() => setShowBingoDataPaper(false)}>X</button>
                </div>
                <div className="flex flex-col p-4 overflow-y-auto"
                    style={{ maxHeight: "calc(100% - 50px)" }}>
                    <p className="pb-5">Aqui vas a poder ver el repositorio del <b>GitHub</b> del proyecto del Bingo:</p>
                    <p onClick={() => window.open("https://github.com/b3nj425/CS-Bingo-Project", "_blank")}
                        className="text-blue-800 underline cursor-pointer">https://github.com/b3nj425/CS-Bingo-Project</p>
                    <p className="py-5">¿En que consiste el proyecto del <b>Bingo</b>?</p>
                    <p className="py-5">Este mismo consiste en un juego interactivo de Bingo, al entrar a la pagina y al comenzar el juego, podemos notar cuatro cartones de Bingo, cada uno perteneciente a cuatro personas distintas.
                        En la parte inferior notaremos un boton con el que podemos lanzar una bolilla, el mismo nos dara un numero aleatorio entre 1 y 99, los numero que salgan se iran tachando automaticamente en los cartones de Bingo, 
                        al final el ganador es el que completa el carton con todos los numeros, ademas tenemos un regitro en que el podemos ver los numero de las bolillas que salieron y el historial de cartones ganadores.</p>
                    <p className="py-5">¿Que tecnologias y lenguajes se implementaron para hacer el proyecto?</p>
                    <p className="py-5"><b>.NET 6, ASP.NET Core</b>, implementando el lenguaje <b>C#</b> y <b>Visual Studio 2022</b> como IDE, ademas de el uso y creacion de base de datos como <b>SQL Server</b> y <b>SQL Server Management Studio</b></p>
                </div>
                </motion.div>
            )}
            {/*Ventana imagen del bingo*/}
            {showBingoImage && (
                <motion.div
                    className="absolute bg-gray-100 border-4 border-gray-400"
                    style={{ left: bingoImageState.x, top: bingoImageState.y, width: bingoImageState.width, height: bingoImageState.height }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                <div className="border-b-4 border-gray-400 h-10 bg-gray-200 flex justify-between items-center px-4 cursor-move" 
                onMouseDown={(e) => startDragging(e, bingoImageState, setBingoImageState)}>
                    <span className="absolute left-1/2 -translate-x-1/2">Bingo</span>
                    <button className="ml-auto w-7 h-7 hover:bg-gray-300" onClick={() => setShowBingoImage(false)}>X</button>
                </div>
                <div>
                    <Image src="bingo.png" alt="bingoImage" className="w-auto h-auto"></Image>
                </div>
                </motion.div>
            )}

            <div className="absolute bottom-0 w-full h-14 bg-[#eeeeee] border-t-4 border-[#b6b6b6] flex items-center px-4">
                <div className="rounded-sm hover:bg-gray-300 ">
                    <Image src="https://static-00.iconduck.com/assets.00/power-off-icon-504x512-wve5pyd4.png"
                     alt="powerofficon"
                     className="h-10 w-10"
                     onClick={(() => router.push("/main-page"))}></Image>
                </div>
                <p className="px-5">Apagar</p>
            </div>
        </div>
    );
}
