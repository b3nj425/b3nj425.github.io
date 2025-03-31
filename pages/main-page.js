import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';

export default function BootSequence() {
  const lines = useMemo(() => [ 
    "SYSTEM BOOT SEQUENCE INITIATED...",
    "BIOS VERSION: 4.02 (c) 1986-1995 RetroTech Inc.",
    "CPU: Intel 8086 @ 4.77MHz",
    "RAM: 640KB OK",
    "DISK DRIVE A: 1.44MB 3.5\" FLOPPY DETECTED",
    "DISK DRIVE C: 20MB HDD DETECTED",
    "INITIALIZING VIDEO: CGA ADAPTER",
    "CHECKING PERIPHERALS...",
    "> KEYBOARD........... [OK]",
    "> MOUSE.............. [NOT DETECTED]",
    "> PARALLEL PORT...... [OK]",
    "> SERIAL PORT........ [OK]",
    "> SOUND CARD......... [NOT DETECTED]",
    "BOOTING FROM DRIVE C:...",
    "LOADING MS-DOS 6.22..."
  ], []);
  const lines2 = useMemo(() => [
    "",
    "USER LOGIN: Benjamín",
    "PASSWORD: *********",
    "ACCESS GRANTED",
    "LOADING USER PROFILE..."
  ], []);
  const lines3 = useMemo(() => [
    "",
    "▬▬▬▬▬▬▬▬▬▬",
    "TERMINAL OS v1.0 (c) 1986",
    "▬▬▬▬▬▬▬▬▬▬",
    "USER: Benjamin",
    "ALIAS: ************",
    "OCCUPATION: Software Developer",
    "SPECIALIZATION: Web Development | Game Development"
  ], []);
  const lines4 = useMemo(() => [
    "> list projects",
    "> list skills",
    "> list about me",
    "> list certificates",
  ], []);
  const lines5 = useMemo(() => [
    "$website --help",
    "YOU CAN NAVIGATE IN THIS PAGE BY TYPING THE FOLLOWING COMMANDS OR TAPPING IN MOBILE DEVICES:"
  ], []);
  const redirect = useMemo(() => [
    "/projects",
    "/skills_prueba",
    "/aboutme",
    "/certificates"
  ], []);

  const [contactLines, setContactLines] = useState(false);
  const [currentLines, setCurrentLines] = useState([]);
  const [listCurrentLinesBegin, setListCurrentLinesBegin] = useState([]);
  const [listCurrentLines, setListCurrentLines] = useState([]);
  const [cursorLines, setCursorLines] = useState([]);
  const [hasVisited, setHasVisited] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const router = useRouter();
  
  const runBootSequence = useCallback(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < lines.length) {
        setCurrentLines((prev) => [...prev, lines[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentLines([]);
          runLoginSequence();
        }, 1000);
      }
    }, 300);
  }, [lines]);
    
  const runCursor = useCallback(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < cursorLines.length) {
        setCursorLines((prev) => [...prev, cursorLines[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 300);
  }, [cursorLines]);

  const runLoginSequence = useCallback(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < lines2.length) {
        setCurrentLines((prev) => [...prev, lines2[index]]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentLines(lines3);
          setListCurrentLinesBegin(lines5);
          setListCurrentLines(lines4);
          runCursor();
          setContactLines(true);
          localStorage.setItem("bootCompleted", "true");
        }, 3000);
      }
    }, 300);
  }, [lines2, lines3, lines4, lines5, runCursor]);
  
  useEffect(() => {
    const visited = localStorage.getItem("bootCompleted");
    if (visited === "true") {
      setHasVisited(true);
      setCurrentLines(lines3);
      setListCurrentLinesBegin(lines5);
      setListCurrentLines(lines4);
      setContactLines(true);
    } else if (!hasVisited) {
      runBootSequence();
    }
  }, [hasVisited, lines3, lines4, lines5, runBootSequence]);
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        const command = userInput.trim().toLowerCase();
  
        const routes = {
          "list skills": "/skills_prueba",
          "list about me": "/aboutme",
          "list certificates": "/certificates",
          "list projects": "/projects",
          "linkedin": "https://www.linkedin.com/in/benjamin-castro-ceballos",
          "github": "https://github.com/b3nj425",
          "mail": "mailto:castrobenjamin25@hotmail.com",
          "whatsapp": "https://wa.me/3804569221",
        };
  
        if (routes[command]) {
          if (command.includes("http")) {
            window.open(routes[command], "_blank");
          } else {
            router.push(routes[command]);
          }
        }
  
        setUserInput("");
      } else if (e.key.length === 1) {
        setUserInput((prev) => prev + e.key);
      } else if (e.key === "Backspace") {
        setUserInput((prev) => prev.slice(0, -1));
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [userInput, router]);

  return (
    <div className="flex flex-col justify-around w-screen h-screen overflow-y-auto bg-[#0b1801]
                    font-[VT323] text-base sm:text-lg md:text-3xl text-[#94ff4a] text-shadow">
        <div className="absolute w-screen h-screen z-20 pointer-events-none">
          <Image src="bezel.png" alt="bezel" 
          className="absolute opacity-100 w-full h-full"/>
          <Image src="scanlines.png" alt="scanline" 
          className="opacity-60 w-full h-full"/>      
        </div>
      
      <div className="h-full w-auto flex flex-row">
        <div className="flex flex-wrap w-2/3 h-auto">
         <div className="w-auto h-auto lg:pt-32 lg:pl-32 pl-12 pt-20">
         {currentLines.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {line}
          </motion.p>
        ))}
         </div>
         <div className="w-auto h-auto lg:pt-5 lg:pl-32 pl-12 py-12">
         {listCurrentLinesBegin.map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {line}
          </motion.p>
        ))}
        {listCurrentLines.map((line, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={() => {
            if(redirect[index]){
              router.push(redirect[index]);
            }
          }}
          className="cursor-pointer"
          >
          {line}
        </motion.p>
        ))}
        {listCurrentLines.length === lines4.length && (
        <motion.p
          key="command-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
        C:/User{">"} {userInput}{showCursor ? "_" : " "}
        </motion.p>
        )}
         </div>
        </div>

        {/*Div de contacto*/}
        {contactLines && (
          <div className="flex-col w-1/3 h-auto">
            <div className="flex flex-col justify-around items-center lg:py-32 px-12 py-20 w-full h-full text-center">
              <p>To contact type:</p>
              <p>{">"} linkedin</p>
              <Image 
              src="linkedin.png"
              className="w-12 h-12 cursor-pointer"
              alt="LinkedIn"
              onClick={() => window.open("https://www.linkedin.com/in/benjamin-castro-ceballos/", "_blank")}/>
              <p>{">"} github</p>
              <Image 
              src="github.png"
              alt="Github"
              onClick={() => window.open("https://github.com/b3nj425", "_blank")}
              className="w-12 h-12 cursor-pointer"></Image>
              <p>{">"} mail</p>
              <Image 
              src="mail.png"
              alt="Mail"
              onClick={() => window.location.href = "mailto:castrobenjamin25@hotmail.com"}
              className="w-12 h-12 cursor-pointer"></Image>
              <p>{">"} whatsapp</p>
            <Image 
              src="whatsapp.png"
              alt="Whatsapp"
              onClick={() => window.open("https://wa.me/3804569221", "_blank")}
              className="w-12 h-12 cursor-pointer"></Image>
          </div>
        </div>
        )}
      </div>
  </div>
  );
}
