'use client'

import React, { useState } from 'react';
import Image from "next/image";

export default function Home() {

  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  const handleMarkerClick = (markerId: number) => {
    setSelectedMarker(markerId);
  };

  interface DetailProps {
    image: string;
    alt: string;
    title: string;
    description: string;
  }

  interface MarkerProps {
    className: string;
    id: number;
  }

  const Detail: React.FC<DetailProps> = (props) => {
    return (
      <div className="mb-8 lg:mb-12 flex lg:max-w-5xl lg:w-full lg:mb-0 text-left" id="main-building-south">
        <div className="basis-1/2">
          <Image
            src={props.image}
            alt={props.alt}
            width={600}
            height={600}
            priority
          />
        </div>
        <div className="basis-1/2 lg:pt-12 pl-6 pr-6 lg:pl-8">
            <h2 className={`mb-3 text-xl font-semibold`}>
            {props.title}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {props.description}
          </p>
        </div>
      </div>
    )
  }


  const Marker: React.FC<MarkerProps> = (props) => {

    const markerClassName = `absolute -translate-x-[15px] -translate-y-[15px] h=[20px] w-[20px] lg:h=[30px] lg:w-[30px] origin-center ${props.className || ''}`;

    return (
      <Image
          src="/marker.svg"
          alt="Map marker"
          width={30}
          height={30}
          priority
          className={markerClassName}
          onClick={() => handleMarkerClick(props.id)}
        />
    )
  }



  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-start pt-12 lg:p-12">
      
      <div className="text-center mb-12 h-auto flex-column">
        <h1 className={`mb-3 text-3xl font-semibold`}>MelKay Signage</h1>
        <p className={`text-[9px] font-light uppercase text-gray-400 tracking-[.5rem]`}>Mockups Presented by Gray Loon</p>
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-center relative mb-12">


        <Marker className={`left-[38%] top-[35%]`} id={1}/>
        <Marker className={`left-[41%] top-[16%]`} id={2}/>
        <Marker className={`left-[43%] top-[52%]`} id={3}/>
        <Marker className={`left-[29%] top-[13%]`} id={4}/>


        <Image
          src="/birdseye.jpg"
          alt="Melkay Property map"
          width={1591}
          height={837}
          priority
        />
      </div>

    {selectedMarker === 4 && 
    <>
      <Detail image="/melkay-west-lot-north-end.jpg" 
        alt="Melkay Signage West Lot North" 
        title="West Lot, North End" 
        description="Brick and concrete monument designed to reflect architecture of main building. Includes extruded, brushed metal lettering to match main building." />


      <div className="sketchfab-embed-wrapper w-full max-w-5xl aspect-video mb-12"> 

        <div class="sketchfab-embed-wrapper">
          <iframe 
            className="w-full max-w-5xl aspect-video"
            title="MelKay Monument" 
            frameborder="0" 
            allowfullscreen mozallowfullscreen="true" 
            webkitallowfullscreen="true" 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share 
            src="https://sketchfab.com/models/448f0166105442b4a365b7b61ffa34ba/embed?autostart=1&ui_theme=dark">
          </iframe> 
        </div>


      </div>

    </>
    }
    {selectedMarker === 1 && 
      <Detail image="/melkay-main-building-west.jpg" 
        alt="Melkay Signage Main Building West" 
        title="Main Building West Face" 
        description="Extruded brushed metal lettering offset from wall to allow shadow. Potentail for backlighting at night." />
    }
    {selectedMarker === 2 && 
      <Detail image="/melkay-main-building-north.jpg" 
        alt="Melkay Signage Main Building North" 
        title="Main Building North Face" 
        description="Extruded brushed metal lettering offset from wall to allow shadow. Potentail for backlighting at night." />
    }
    {selectedMarker === 3 && 
      <Detail image="/melkay-main-building-south.jpg" 
        alt="Melkay Signage Main Building South" 
        title="Main Building North Face" 
        description="Extruded brushed metal lettering offset from wall to allow shadow. Potentail for backlighting at night." />
    }


      <div className="w-full border-gray-700 border-t max-w-5xl">

        <p className={`text-[9px] text-center pt-8 font-light uppercase text-gray-400 tracking-[.25rem]`}>&copy; 2024 GRAY LOON MARKETING GROUP, ALL RIGHTS RESERVED</p>

        
      </div>





    </main>
  );



}