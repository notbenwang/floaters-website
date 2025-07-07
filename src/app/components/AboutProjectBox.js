import React from 'react'

export default function AboutProjectBox({gothicFont}) {
  return (
    <div className="grid grid-cols-2">
    <div className={`p-4 mx-8 text-black ${gothicFont.className} text-[clamp(0.5rem,1.4vw,1.5rem)] w-3/4 `}>
        <h2 className={`font-bold text-slate-900  text-[clamp(1.25rem,5vw,10rem)] mx-auto leading-none`}>About the Project</h2> 
        <br/>
        My name is Ben Wang, and I am the artist behind Floaters. 
        
        <br/> <br/>
        This project is the culmination of almost five years of sketches, notes, and
        designs, all born from my imagination. Everything you see, from the artwork, 
        writing, and website, was created by myself from scratch. 
        <br/> <br/>
        If you like what I do, feel free
        to follow me on any of my socials, and while you're here, feel free to
        explore this website as much as you would like.
    </div>
    <img src="pfp2.png" className="w-3/4 outline outline-black mx-auto shadow-xl"/>
    </div>
  )
}
