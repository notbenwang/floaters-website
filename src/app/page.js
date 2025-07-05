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
    
        <div className="flex flex-col items-center justify-center w-screen  mt-[10vh] bg-white ">

          <div className="m-5 grid grid-cols-3 gap-4 px-8 justify-items-center max-w-8xl"> 
            <img src="01.png" className="rounded-xl z-10 scale-95 hover:scale-100 transition w-full max-w-lg duration-200"/>
            <img src="02.png" className="rounded-xl z-10 scale-95 hover:scale-100 transition w-full max-w-lg duration-200"/>
            <img src="03.png" className="rounded-xl z-10 scale-95 hover:scale-100 transition w-full max-w-lg duration-200"/>
          </div> 
          <Crew gothicFont={gothicFont}/>
        </div>
      </div>
    </div>
    </>

  );
}
