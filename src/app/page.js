import Image from "next/image";
import localFont from "next/font/local";
import Crew from "./components/Crew";

const gothicFont = localFont({
  src: [
    {path:"./fonts/centurygothic.ttf", weight: "400", style: "normal"},
    {path:"./fonts/centurygothic_bold.ttf", weight: "700", style: "normal"}
  ],
})
const floatersFont = localFont({
  src: "./fonts/Floaters-Regular.ttf"})

export default function Home() {

  return (
    <>
    <div className="relative h-screen w-screen"> 
      <img src="erebo.svg" className="absolute inset-0 w-full h-full object-cover"alt="Background Image" />
      <div className="absolute top-0 translate-y-1/8 flex flex-col items-center justify-start gap-8 ">
        <img src="logo.png" className="object-cover w-[75%] max-w-4xl p-5 z-15" alt="Logo" />
        <div className="flex flex-col items-left justify-center w-screen mt-[10vh] bg-white ">
          <p className={`font-mono text-black m-5 px-8 w-3/5 max-w-3xl outline outline-gray-300 bg-linear-to-br from-white via-slate-100 to-slate-200 pb-8 shadow-lg text-[clamp(0.75rem,1.5vw,1.25rem)]`}>
            <br/>
            <a className={`${floatersFont.className} font-bold text-slate-900 text-3xl`}>Introduction</a> 
            <br/>
            The Floaters are a group of explorers on a journey to breach the perpetual storm of darkness that shrouds their world. 
            <br/><br/>
            <a className="text-black/50 hover:text-white hover:bg-slate-400 rounded transition duration-200 outline p-2" href="">
              Read More →
            </a>
            </p>
          <hr/>
          <br/>
          <h2 className={`${gothicFont.className} font-bold text-slate-900  text-[clamp(1.25rem,5vw,10rem)] mx-auto leading-none`}>Worldbuilding</h2>  
          <p className={`text-black mx-auto ${gothicFont.className} text-[clamp(0.5rem,1.4vw,2rem)] text-center p-5 w-3/5`}>
            A sliver of humanity remains trapped on the <a className="font-bold">Somme</a>, an alien world shrouded by <a className="font-bold">Erebo</a>, a storm of darkness that has raged for as long as anyone can remember.
            In order to survive, these stranded people shelter within the <a className="font-bold">Haven</a>, a colossal megastructure
            embedded deep within the planet.
            <br/> <br/>
            <a className="text-black/50 hover:text-white hover:bg-slate-400 rounded transition duration-200 outline p-2" href="">
              Explore →
            </a>
          </p>
          <div className="mx-5 grid grid-cols-3 gap-4 px-8 justify-items-center max-w-8xl ">
            <div className="relative z-10 w-full max-w-3xl group">
            <img src="01.png" className="scale-95 group-hover:scale-100 group-hover:brightness-50 rounded-xl duration-300 transition"/>
            <h1 className={`absolute bottom-[50%] opacity-0 group-hover:opacity-100 transition duration-300 text-center w-full text-[clamp(0.5rem,3vw,10rem)] font-bold ${gothicFont.className}`}>The Somme</h1>
            </div> 
             <div className="relative z-10 w-full max-w-3xl group">
            <img src="02.png" className="scale-95 group-hover:scale-100 group-hover:brightness-50 rounded-xl duration-300 transition"/>
            <h1 className={`absolute bottom-[50%] opacity-0 group-hover:opacity-100 transition duration-300 text-center w-full text-[clamp(0.5rem,3vw,10rem)] font-bold ${gothicFont.className}`}>The Haven</h1>
            </div>  
            <div className="relative z-10 w-full max-w-3xl group">
            <img src="03.png" className="scale-95 group-hover:scale-100 group-hover:brightness-50 rounded-xl duration-300 transition"/>
            <h1 className={`absolute bottom-[50%] opacity-0 group-hover:opacity-100 transition duration-300 text-center w-full text-[clamp(0.5rem,3vw,10rem)] font-bold ${gothicFont.className}`}>The Anomalies</h1>
            </div> 
          </div> 

          <div className="ml-auto">
          <Crew font={gothicFont} artFont={floatersFont}/>
          </div>
          <br/>
        </div>
      </div>
    </div>
    </>

  );
}
