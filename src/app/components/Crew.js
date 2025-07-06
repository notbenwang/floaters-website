"use client"
import React from 'react'
import { useState } from 'react';

export default function Crew({font, artFont}) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [currentMember, setCurrentMember] = useState("Bugi");
    const [hoveredOccupation, setHoveredOccupation] = useState("Pilot");
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

    const memberNames = [
        "Celee",
        "Harp",
        "Aico",
        "Bugi",
    ]
    const occupations = [
        "Maid",
        "Fighter",
        "Navigator",
        "Pilot",
    ]

    function handleMouseEnter(index) {
        setHoveredIndex(index);
        setCurrentMember(memberNames[index]);
        setHoveredOccupation(occupations[index]);
    }
    return (
    <div className="p-5  [direction:rtl] mx-16"> 
        <div className="grid grid-cols-2 justify-items-center outline outline-gray-300 bg-linear-to-bl from-white via-slate-100 to-slate-400 w-9/8 mx-auto max-w-7xl shadow-xl p-10">

            <div className={`relative ${font.className} relativetext-right`}>
                <h1 className={`text-black font-bold text-[clamp(1.25rem,5vw,10rem)] leading-none ${artFont.className}`}>THE CREW</h1>

                {members.map((member, index) => (
                    <div>
                        <h4 
                            key={member} 
                            className={`inline-block text-gray-500 hover:text-black hover:scale-115 text-[clamp(0.25rem,2.0vw,2rem)] transition }`}
                            onMouseEnter={() => handleMouseEnter(3-index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            >
                            {member}
                        </h4>
                        </div>
                    ))
                }
            
                <h4 className="text-gray-300 inline-block text-right text-[clamp(0.25rem,2.0vw,2rem)]">MEMBER 05 •</h4><br/>
                <h4 className="text-gray-300 inline-block text-right text-[clamp(0.25rem,2.0vw,2rem)]">MEMBER 06 •</h4><br/>
                <h4 className="text-gray-300 inline-block text-right text-[clamp(0.25rem,2.0vw,2rem)]">MEMBER 07 •</h4><br/>
                <br/>
                <a className=" text-black/50 text-[clamp(0.25rem,2.0vw,2rem)] hover:text-white hover:bg-slate-400 rounded transition duration-200 outline p-4" href="">
                    → Read More 
                </a>
            </div>
                <div className="relative w-full max-w-lg aspect-[3/4] bg-linear-to-bl from-slate-100 via-slate-400 to-slate-900 shadow-2xl rounded-xl">
                 <div className={`${font.className} absolute top-[0%] right-[0%] text-right   text-slate-700 
                    ${hoveredIndex === null ? 'opacity-0' : 'opacity-40'} mr-1 transition ease-in-out`}>
                        <div className={`text-[clamp(1.25rem,5.5vw,10rem)] leading-none font-bold `}>
                            {currentMember}
                        </div>
                        <div className="text-[clamp(0.25rem,2.0vw,2rem)] ">
                            {hoveredOccupation}
                        </div>
                    </div>
                
                {images.map((image, index) => (
                    <img key={image} src={image} className={`absolute transition ${hoveredIndex === index ? 'scale-110 brightness-105' : 'scale-105 brightness-85'} z-${4-index}`}/>
                    
                ))}
            </div>
        </div>
    </div>
  )
}
