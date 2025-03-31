import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';


export default function Home() {
  const router = useRouter();
  const lines1 = useMemo(() => [
    "Hi! I'm Benjamín, a passionate software developer with 2 years of experience in web development, games development and other areas. My main focus is on creating innovative and efficient solutions, that solve real-world problems. When I'm not writing lines of code, I love play videogames and consume web media. I value continuous learning and enjoy working in teams to transform ideas into reality."
  ], []);
  const qualities = [
    "Teamwork.",
    "Creativity and innovation.",
    "Problem solving.",
    "Technological skills.",
    "Leadership."
  ];
  const images = [
    "teamwork.png",
    "creativity.png",
    "problem_solving.png",
    "tech_skills.png",
    "leadership.png"
  ]
  const descriptions = [
    "Actively listens to the opinions of others, promotes the exchange of ideas and adapts to teamwork.",
    "I contribute original ideas and innovative solutions to address challenges and improve processes.",  
    "I analyze complex situations and offer practical answers to solve problems efficiently.",
    "I have advanced skills in technological tools and I adapt quickly to new platforms.",
    "I coordinate teams with empathy and determination, driving motivation and the achievement of common goals."
  ]

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentLines, setCurrentLines] = useState([]);
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentLines((prev) => {
        if (index < lines1.length) {
          return [...prev, lines1[index++]];
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 100);
    return () => clearInterval(interval);
  }, [lines1]);
  

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        router.push("/main-page");
      } else if (event.key === "ArrowUp"){
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : qualities.length -1));
      } else if (event.key === "ArrowDown"){
        setSelectedIndex((prev) => (prev < qualities.length -1 ? prev + 1 : 0));
      }else if (event.key === "Enter"){
        setShowInfoWindow(true);
      }
    };
  
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [qualities.length, router]);

  useEffect(() => {
    const closeOnEscape = (e) => {
      if (e.key === "x") {
        setShowInfoWindow(false);
      }
    };
  
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  

  return (
      <div className="flex flex-col justify-around w-screen h-screen overflow-y-auto bg-[#0b1801]
                    font-[VT323] text-base sm:text-lg md:text-3xl text-[#94ff4a] text-shadow">
        <div className="absolute w-screen h-screen z-20 pointer-events-none">
          <Image src="bezel.png" alt="bezel" 
          className="absolute opacity-100 w-full h-full"/>
          <Image src="scanlines.png" alt="scanline" 
          className="opacity-60 w-full h-full"/>      
        </div>

        {/*Ventana de informacion*/}
        {showInfoWindow && (
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="info-window text-shadow fixed inset-0 flex items-center justify-center bg-[#040f02]"
          >
          <p>{descriptions[selectedIndex]}</p>
          <p onClick={() => {setShowInfoWindow(false)}}>Close (x)</p>
          </motion.div>
        )}

        {/*Texto de introduccion*/}
        <div className="lg:pt-20 lg:px-32 px-20 pt-20 flex flex-col w-auto h-auto">
          <div className="w-auto h-full">
          {currentLines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0}}
              animate={{ opacity: 1 }}
              transition={{ duration: 0 }}
            >
            <p className="mb-10">Press <Link href="/main-page" className="relative hover:text-[#c5ff78] transition duration-300">ESC</Link> to return</p>
            <p>{line}</p>
            </motion.p>
          ))}
          </div>
        </div>

        {/*Texto de Cualidades profesionales*/}
        <div className="lg:px-32 px-20 flex flex-wrap justify-between ">
          <div className="mt-10 w-auto h-auto">
            <motion.p
                    key="professional-qualities"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
          >PROFESSIONAL QUALITIES (ENTER to details): </motion.p>
          {qualities.map((quality, index) => (
            <motion.p
              key={index}
              className={`w-auto h-auto cursor-pointer ${selectedIndex === index ? "font-bold" : ""}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => {setSelectedIndex(index)}}
              onClick={() => {setShowInfoWindow(true)}}
            >
              {selectedIndex === index ? ">" : "  "} {quality}
            </motion.p>
          ))}
          </div>
          <div className="flex justify-center w-auto h-auto">
          <Image
            src={images[selectedIndex]}
            alt="quality-image"
            className="p-10 w-96 h-96"
          />
          </div>
      </div>
    </div>
  );
}
