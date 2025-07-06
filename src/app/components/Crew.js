"use client"
import React from 'react'
import { useState } from 'react';

export default function Crew({font}) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    const images = [
        "group04.png",
        "group03.png",
        "group02.png",
        "group01.png",
    ];

    const members = [
        "MEMBER 01 •",
        "MEMBER 02 •",
        "MEMBER 03 •",
        "MEMBER 04 •",
    ]

    return (
        
    <div className="grid grid-cols-2 justify-items-center outline outline-gray-300 w-[60vw] mr-auto max-w-7xl shadow-xl p-5">

        <div className={`${font.className} text-lg text-right`}>
            <h1 className="text-black font-bold text-[clamp(1.25rem,4vw,10rem)]">THE CREW</h1>
            {members.map((member, index) => (
                    <div>
                    <h4 
                        key={member} 
                        className={`inline-block text-gray-800 hover:text-black hover:scale-115 text-[clamp(0.25rem,2.5vw,1.5rem)] transition }`}
                        onMouseEnter={() => setHoveredIndex(3-index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {member}
                    </h4>
                    </div>
                ))
            }
        
            <h4 className="text-gray-300 inline-block text-right text-[clamp(0.25rem,2.5vw,1.5rem)]">MEMBER 05 •</h4><br/>
            <h4 className="text-gray-300 inline-block text-right text-[clamp(0.25rem,2.5vw,1.5rem)]">MEMBER 06 •</h4><br/>
            <h4 className="text-gray-300 inline-block text-right text-[clamp(0.25rem,2.5vw,1.5rem)]">MEMBER 07 •</h4><br/>
        </div>
            <div className="relative w-full max-w-lg aspect-[3/4] bg-linear-to-b from-slate-100 via-slate-400 to-slate-900 shadow-2xl rounded-xl">
            {images.map((image, index) => (
                <img key={image} src={image} className={`absolute transition ${hoveredIndex === index ? 'scale-110' : 'scale-105 brightness-85'} z-${4-index}`}/>
            
            ))}
        </div>
        
    </div>
  )
}
