import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Certificates (){
    const router = useRouter();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [showInfoWindow, setShowInfoWindow] = useState(false);

    const certificates = [ 
        ".NET 6.0 Web Development",
        "Personal Development G5 - ONE",
        "Beginner in Programming G5 - ONE",
        "Object Oriented Java G5 - ONE",
        "Java applications with databases",
        "Java and Spring Boot G5 - ONE"
    ];
    const certificatesName = [
        ".NET Introduction",
        "Desarrollo Personal G5 - ONE",
        "Beginner in Programming G5 - ONE",
        "Object Oriented Java G5 - ONE",
        "Java applications with databases",
        "Java and Spring Boot G5 - ONE",
    ];
    const certificatesInstitute = [
        "Incluit / Polo Teconologico - Mina Clavero (Cordoba, Argentina) ",
        "Alura LATAM",
        "Alura LATAM",
        "Alura LATAM",
        "Alura LATAM",
        "Alura LATAM"
    ];
    const certificatesReleaseDate = [
        "10/11/2022",
        "30/03/2023",
        "12/04/2023",
        "18/09/2023",
        "27/09/2023",
        "02/10/2023"
    ];
    const certificateLink = [
        "https://drive.google.com/file/d/1kzGjFgYx0OI8PLu3-u-yJi4CPvhQr197/view?usp=sharing",
        "https://app.aluracursos.com/degree/certificate/bb672231-3a14-4072-b53b-411fdb434ee0",
        "https://app.aluracursos.com/degree/certificate/997880d6-13c4-4410-90bf-948df6dccd86",
        "https://app.aluracursos.com/degree/certificate/f78be863-3745-4d80-a10a-95d3d5afe087",
        "https://app.aluracursos.com/degree/certificate/62ccc54e-f850-42d5-bbbd-491f72979780",
        "https://app.aluracursos.com/degree/certificate/8641bcb9-3181-46fd-a4f4-66c1a0c7676d",
    ];

    const logos = [
        "incluit.png",
        "alura.png",
        "alura.png",
        "alura.png",
        "alura.png",
        "alura.png"
    ];

    const details = [
        ".NET Framework · Diseño web · HTML5 · Páginas web · Bootstrap · JSON · jQuery · Desarrollo Full Stack · Lenguajes de programación · ASP.NET Web API · C# · Lenguaje de definición de datos (DDL) · .NET Core · Bases de datos · CSS3 · SQL · JavaScript",
        "Learning to learn: techniques for self-development · LinkedIn: How to make your profile work for you · Focus: Focus brings more results for your daily life · Habits: Be productive to achieve your personal goals",
        "Programming Logic - Basic Concepts - Practicing with Games and Animations - HTML5 and CSS3: My First Website - HTML5 and CSS3: Positioning, Lists, and Navigation - HTML5 and CSS3: Working with Forms and Tables - HTML5 and CSS3: Moving Forward with CSS - Git and GitHub: Control and Share Your Code - Practicing Front End: Portfolio Challenge - Practicing with Java: Currency Converter Challenge",
        "Java JRE and JDK: Compile and run your first program - Java OO - Java Polymorphism: Inheritance and interfaces - Java Exceptions: Creating, throwing, and handling exceptions - Java and java.lang: Programming with Object and String classes - Java and java.util: Collections, Wrappers, and Lambda expressions",
        "Java and JDBC: Working with a Database - Persistence with JPA: Hibernate - Java and JPA: Advanced Queries, Performance, and Complex Models",
        "SQL with MySQL: Manipulate and Query Data - Java and JDBC: Working with a Database - Persistence with JPA: Hibernate - Java and JPA: Advanced Queries, Performance, and Complex Models - Spring Boot 3: Developing a Rest API in Java - Spring Boot 3: Apply Best Practices and Secure a Rest API - Spring Boot 3: Document, Test, and Prepare an API for Deployment"
    ]


    useEffect(() => {
        const handleKeyDown = (e) => {
            if(e.key === "Escape"){
                router.push("/main-page");
            } else if (e.key === "ArrowUp"){
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : certificates.length -1));
            } else if (e.key === "ArrowDown"){
                setSelectedIndex((prev) => (prev < certificates.length -1 ? prev + 1 : 0));
            } else if (e.key === "Enter"){
                setShowInfoWindow(true);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown",handleKeyDown);
    }, [certificates.length, router]);

    useEffect(() => {
        const closeOnEscape = (e) => {
            if(e.key === "x"){
                setShowInfoWindow(false);
            }
        };
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    });

    return (
        <div className="flex flex-col justify-around w-screen h-screen overflow-y-auto bg-[#0b1801]
                    font-[VT323] text-base text-x1 lg:text-3xl text-[#94ff4a] text-shadow">
            <div className="absolute w-screen h-screen z-20 pointer-events-none">
                <Image src="bezel.png" alt="bezel" 
                className="absolute opacity-100 w-full h-full"/>
                <Image src="scanlines.png" alt="scanline" 
                className="opacity-60 w-full h-full"/>      
            </div>
          {showInfoWindow && (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="info-window text-shadow fixed inset-0 flex items-center justify-center bg-[#040f02]"        
                >
                <p className="p-10">{details[selectedIndex]}</p>
                <p onClick={() => setShowInfoWindow(false)} className="justify-center items-center p-10">Close (x)</p>
                </motion.div>
            )}
          <div className="w-full h-full">
            <div className="flex flex-col md:flex-row justify-center items-center w-full h-full lg:p-32 p-16">
              <div className=" flex flex-col lg:w-1/2 w-full h-full skillswindow">
              <p className="border-b-4 border-[#17a817] mb-5">CERTIFICATES:</p>
              {certificates.map((certificates, index) => (
                <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`py-2 cursor-pointer ${index === selectedIndex ? "bg-[#5ebe19] text-[#0b1801]" : ""}`}
                    onMouseEnter={() => setSelectedIndex(index)}
                >
                {certificates}
                </motion.p>
                ))}
              </div>
              <div className="relative flex flex-col lg:w-1/2 w-full h-full border-4 border-[#5ebe19] py-12 px-12">
                <div className="h-1/2 w-full">
                    <p>CERTIFICATE: {certificatesName[selectedIndex]}</p>
                    <p>INSTITUTE OR PLATFORM: {certificatesInstitute[selectedIndex]}</p>
                    <p>COMPLETION DATE: {certificatesReleaseDate[selectedIndex]}</p>
                </div>
                <div className="flex flex-row justify-start items-start h-1/2 w-full">
                    <div className="flex flex-col h-full w-1/2">
                    <a
                        href={certificateLink[selectedIndex]} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative underline py-5 hover:text-[#c5ff78] transition duration-300"
                    >
                    VER CERTIFICADO
                    </a>
                    <a  onClick={() => setShowInfoWindow(true)} 
                        className="cursor-pointer relative underline hover:text-[#c5ff78] transition duration-300">VER DETALLES
                    </a>
                    </div>
                    <div className="flex justify-center items-center h-full w-1/2">
                      <Image src={logos[selectedIndex]}
                            alt="logos"
                            className="w-auto h-auto"
                      ></Image>  
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      
}