import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function SkillsPrueba() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedTech, setSelectedTech] = useState(0);
    const router = useRouter();

    const areas = useMemo(() => ["FRONT-END", "BACK-END", "APPLICATIONS"], []);

    const skillsData = useMemo(() => ({
        "FRONT-END" : {
            techs : ["NEXT.js", "REACT.js", "HTML5", "TailwindCSS", "CSS", "Bootstrap"],
            descriptions : [
                "Next.js is an open-source React front-end web development framework that enables features such as server-side rendering and static website generation.",
                "React.js is a free and open-source front-end JavaScript library that aims to make building user interfaces.",
                "HTML5 is a standard used to define the structure, design, and content of a web page, and the content that makes up a web page, such as images, text, etc.",
                "Tailwind CSS is an open-source CSS framework for web design.",
                "CSS is a language that manages the design and presentation of web pages, that is, how they appear when a user visits them.",
                "Bootstrap is an open-source, cross-platform framework or set of tools for designing websites and web applications."
            ],
            logos : ["nextjs.png", "reactjs.png", "HTML5.png", "tailwind.png", "css.png", "bootstrap.png"]
        },
        "BACK-END" : {
            techs : ["Javascript", "Lenguaje C", "Lenguaje C#", "Java", "SQL Server"],
            descriptions : [
                "JavaScript (JS) is a programming language used to create interactive web pages.",
                "C It´s a general-purpose, low-level language, known for its efficiency and ability to directly access hardware, being the basis of many operating systems and applications.",
                "C# is a general-purpose, cross-platform language that makes developers productive when writing high-performance code.",
                "The Java syntax is largely derived from C and C++, but has fewer low-level utilities than either.",
                "Microsoft SQL Server is a relational database management system developed by Microsoft."
            ],
            logos : ["javascript.png", "c.png","csharp.png","java.png","sqlserver.png"]
        },
        "APPLICATIONS" : {
            techs : ["Visual Studio CODE", "Visual Studio", "Eclipse", "IntelliJ", "Code::Blocks", "SQL Server Management Studio"],
            descriptions : [
                "Visual Studio Code is a source code editor developed by Microsoft for Windows, Linux, macOS, and the Web.",
                "Microsoft Visual Studio is an integrated development environment (IDE) that supports multiple programming languages, such as C++, C#, Visual Basic .NET, Java, Python, etc. As well as web development environments such as ASP.NET MVC, Django, and more.",
                "Eclipse is a software platform consisting of a set of open source, cross-platform programming tools for developing what the project calls Rich Client Applications",
                "IntelliJ IDEA is an integrated development environment (IDE) for software development. It is developed by JetBrains (formerly known as IntelliJ).",
                "Code::Blocks is an open-source integrated development environment that supports multiple compilers, including GCC, Clang, and Visual C++. It was developed in C++ using wxWidgets as the GUI toolkit.",
                "Microsoft SQL Server Management Studio (commonly abbreviated as SMSS) is an application used for the management and administration of components within SQL Server."
            ],
            logos : ["vscode.png","vs.png","eclipse.png","intellij.png","codeblocks.png", "sqlserverms.png"],
        }
    }), []);

    const currentArea = areas[selectedIndex];
    const currentTechs = skillsData[currentArea].techs;
    const currentDescriptions = skillsData[currentArea].descriptions;
    const currentLogos = skillsData[currentArea].logos;

    useEffect(() => {
        const handleKeyPress = (event) => {
            const key = event.key.toLowerCase();
            if (event.key === "Escape") {
                router.push("/main-page");
            } else if (key === "q") {
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : areas.length - 1));
            } else if (key === "e") {
                setSelectedIndex((prev) => (prev < areas.length - 1 ? prev + 1 : 0));
            } else if (event.key === "ArrowLeft") {
                setSelectedTech((prev) => (prev > 0 ? prev - 1 : skillsData[areas[selectedIndex]].techs.length - 1));
            } else if (event.key === "ArrowRight") {
                setSelectedTech((prev) => (prev < skillsData[areas[selectedIndex]].techs.length - 1 ? prev + 1 : 0));
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [selectedIndex, router, areas, skillsData]);

    return (
        <div className="flex flex-col justify-around w-screen h-screen overflow-y-auto bg-[#0b1801]
                    font-[VT323] text-base text-x1 lg:text-3xl text-[#94ff4a] text-shadow">
            <div className="absolute w-screen h-screen z-20 pointer-events-none">
                <Image src="bezel.png" alt="bezel" 
                className="absolute opacity-100 w-full h-full"/>
                <Image src="scanlines.png" alt="scanline" 
                className="opacity-60 w-full h-full"/>      
            </div>
            <div className="w-full h-full lg:p-32 p-16 flex flex-col items-center">
                <div className="flex justify-center w-auto h-16">
                    <p className="px-5">E</p>
                    {areas.map((area, index) => (
                        <p key={index} 
                           className={`cursor-pointer lg:w-60 w-24 skillswindownobottom ${index === selectedIndex ? "skillswindowafter" : ""}`}
                           onClick={(() => setSelectedIndex(index))}
                           >
                            {area}
                        </p>
                    ))}
                    <p className="px-5">Q</p>
                </div>

                <div className="flex justify-between items-center w-full h-full skillswindow">
                    <div className="flex justify-center items-center w-1/4 h-full rotate-180 cursor-pointer select-none"
                        onClick={() => setSelectedTech((prev) => (prev > 0 ? prev - 1 :currentTechs.length - 1))}>▶</div>
                        <div className="flex flex-col justify-center items-center w-full h-full text-center overflow-y-auto">
                            <p className="w-1/4">{currentTechs[selectedTech]}</p>
                            <Image src={currentLogos[selectedTech]} alt={currentTechs[selectedTech]} className="lg:w-48 lg:h-48 w-32 h-32"></Image>
                            <p>{currentDescriptions[selectedTech]}</p>
                        </div>
                    <div className="flex justify-center items-center w-1/4 h-full cursor-pointer select-none"
                        onClick={() => setSelectedTech((prev) => (prev < currentTechs.length - 1 ? prev + 1 : 0))}>▶</div>
                </div>
            </div>
        </div>
    );
}
