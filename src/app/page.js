import Image from "next/image";
import localFont from "next/font/local";
import Crew from "./components/Crew";

const gothicFont = localFont({
  src: [
    {path:"./fonts/centurygothic.ttf", weight: "400", style: "normal"},
    {path:"./fonts/centurygothic_bold.ttf", weight: "700", style: "normal"}
  ],
})

export default function Home() {

  return (
    <>
    <div className="relative h-screen w-screen"> 
      <img src="erebo.svg" className="absolute inset-0 w-full h-full object-cover"alt="Background Image" />
      <div className="absolute top-0 translate-y-1/8 flex flex-col items-center justify-start gap-8 ">
        <img src="logo.png" className="object-cover p-5 z-15" alt="Logo" />
        <div className="flex flex-col items-left justify-center w-screen mt-[10vh] bg-white ">
          <p className={`font-mono  text-black m-5 px-8 w-3/5 max-w-3xl outline outline-gray-300 pb-8 shadow-lg text-[clamp(0.75rem,2vw,1.25rem)]`}>
            <br/>
            <a className={`${gothicFont.className} font-bold text-3xl`}>Introduction</a> 
            <br/>
            The Floaters are a group of explorers journeying to be the first in millenia to breach <a className="italic">Erebo</a>, the storm of darkness that surrounds their alien world. 
            <br/><br/>
            <a className="text-black/50 hover:text-black transition duration-200" href="">
              Read More →
            </a>
            </p>
          <div className="mx-5 grid grid-cols-3 gap-4 px-8 justify-items-center max-w-8xl"> 
            <img src="01.png" className="rounded-xl z-10 scale-95 hover:scale-100 transition w-full max-w-3xl duration-200 shadow-xl"/>
            <img src="02.png" className="rounded-xl z-10 scale-95 hover:scale-100 transition w-full max-w-3xl duration-200 shadow-xl"/>
            <img src="03.png" className="rounded-xl z-10 scale-95 hover:scale-100 transition w-full max-w-3xl duration-200 shadow-xl"/>
          </div> 
          <div className="grid grid-cols-2 justify-items-center p-5 [direction:rtl] mx-8">
          <Crew font={gothicFont}/>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}
