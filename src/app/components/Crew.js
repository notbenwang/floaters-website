"use client"
import React from 'react'
import { useState } from 'react';

export default function Crew({gothicFont}) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    const images = [
        "group04.png",
        "group03.png",
        "group02.png",
        "group01.png",
    ];

    const members = [
        "MEMBER 01",
        "MEMBER 02",
        "MEMBER 03",
        "MEMBER 04",
    ]

    return (
        
    <div className="grid grid-cols-2 px-4 justify-items-center outline outline-gray-300 w-screen max-w-4xl">
        <div className="relative w-full max-w-xl aspect-[1/1] mt-5 h-screen">
            {images.map((image, index) => (
                <img key={image} src={image} className={`absolute transition ${hoveredIndex === index ? 'scale-105' : 'scale-100 brightness-75'} z-${4-index}`}/>
            
            ))}
        </div>
        <div className={`${gothicFont.className} text-lg text-right mr-5`}>
        <br/>
        <h1 className="text-black font-bold text-7xl">THE CREW</h1>
        {members.map((member, index) => (
                <div>
                <h4 
                    key={3-index} 
                    className={`inline-block text-black hover:scale-125 transition }`}
                    onMouseEnter={() => setHoveredIndex(3-index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {member}
                </h4>
                <br/>
                </div>
            ))
        }
        
        <h4 className="text-gray-300 inline-block text-right">MEMBER 05</h4><br/>
        <h4 className="text-gray-300 inline-block text-right">MEMBER 06</h4><br/>
        <h4 className="text-gray-300 inline-block text-right">MEMBER 07</h4><br/>
        </div>
    </div>
  )
}
