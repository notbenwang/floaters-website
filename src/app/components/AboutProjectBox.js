import React from 'react'

export default function AboutProjectBox({gothicFont}) {
  return (
    <div className={`text-black ${gothicFont.className} text-[clamp(0.5rem,1.4vw,2rem)] w-3/5`}>
        <h2 className={`font-bold text-slate-900  text-[clamp(1.25rem,5vw,10rem)] mx-auto leading-none`}>About the Project</h2> 
        My name is Ben Wang, and I am the artist behind Floaters. This
        project is the culmination of almost five years of sketches, notes, and
        designs, fueled by my imagination. Everything you see from the artwork, 
        world, and even website was created by myself. While you're here, feel free to
        explore this world and let me know what you think.
    </div>
  )
}
