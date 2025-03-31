import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  useEffect (() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter"){
        router.push("/main-page");
      }
    };
  window.addEventListener("keydown", handleKeyPress);
  return () => window.removeEventListener("keydown", handleKeyPress)
  },[router]);

  return (
    <div className="relative h-screen w-full bg-[#0b1801]"
    onClick={() => router.push("/main-page")}
    >
      <div className="absolute w-full h-full pointer-events-none">
        <div className="flex justify-center items-center w-full h-full p-32">
        <TypeAnimation
          sequence={["¡Hi!, I´m Benjamín", 
                      2000,
                      "", 
                      500, 
                      "Welcome to my portfolio", 
                      2000,
                      "",
                      500,
                      "Press ENTER or TAP to continue:",
                      2000, 
                      <span key="boldText" className="font-bold"></span> ]}
          speed={60}
          className="text-[#94ff4a] text-5xl font-[VT323] text-shadow"
          repeat={Infinity}          
        />
        </div>
      </div>
    </div>
  );
}
