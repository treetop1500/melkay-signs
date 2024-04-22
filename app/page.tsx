'use client'

import React, { useState } from 'react';
import Image from "next/image";
import Iframe from 'react-iframe'
import { Transition } from '@headlessui/react'
import { Switch } from '@headlessui/react'


export default function Home() {

  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);
  const [nightMode, setNightMode] = useState(false);

  const handleMarkerClick = (markerId: number) => {
    setSelectedMarker(markerId);
  };

  interface DetailProps {
    image: string;
    nightImage: string;
    alt: string;
    title: string;
    description: string;
    id: number
  }

  interface MarkerProps {
    className: string;
    id: number;
  }

  interface ToggleProps {
  }
  const Detail: React.FC<DetailProps> = (props) => {
    return (
      <Transition
        show={props.id === selectedMarker}
        appear={true}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >

        <div className="mb-8 lg:mb-12 flex lg:max-w-5xl lg:w-full lg:mb-0 text-left" id="main-building-south">
          <div className="basis-1/2">
            <Image
              src={nightMode ? props.nightImage : props.image}
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
      </Transition>
    )
  }

  function classNames(...classes: Array<string | null | undefined>) {
    return classes.filter(Boolean).join(' ')
  }

  const Toggle: React.FC<ToggleProps> = (props) => {
    return (
      
        <Switch.Group as="div" className="flex items-center">
          <Switch
            checked={nightMode}
            onChange={() => { setNightMode(!nightMode)}}
            className={classNames(
              nightMode ? 'bg-teal-600' : 'bg-gray-200',
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2'
            )}
          >
            <span
              aria-hidden="true"
              className={classNames(
                nightMode ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
              )}
            />
          </Switch>
          <Switch.Label as="span" className="ml-3 text-sm">
            <span className="font-medium text-zinc-400">Night Mode</span>
          </Switch.Label>
        </Switch.Group>
    )
  }

  const Marker: React.FC<MarkerProps> = (props) => {

    const markerClassName = `absolute -translate-x-[15px] -translate-y-[15px] h=[20px] w-[20px] lg:h=[30px] lg:w-[30px] origin-center cursor-pointer hover:scale-110 transition-all ease-out ${props.className || ''}`;

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

      <div className="z-10 max-w-5xl w-full items-center justify-center relative mb-8">

        <Marker className={`left-[38%] top-[35%]`} id={1}/>
        <Marker className={`left-[41%] top-[16%]`} id={2}/>
        <Marker className={`left-[43%] top-[52%]`} id={3}/>
        <Marker className={`left-[29%] top-[13%]`} id={4}/>
        <Marker className={`left-[18%] top-[12%]`} id={5}/>
        <Marker className={`left-[10%] top-[51%]`} id={6}/>
        <Marker className={`left-[14%] top-[86%]`} id={7}/>
        <Marker className={`left-[30%] top-[86%]`} id={8}/>
        <Image
          src={nightMode ? "/birdseye-night.jpg" : "/birdseye.jpg"}
          alt="Melkay Property map"
          width={1591}
          height={837}
          priority
        />
      </div>

      <div className='mb-12 flex flex-row justify-start max-w-5xl w-full'>
        <Toggle />
      </div>

      <Detail id={1}
        image="/melkay-main-building-west.jpg" 
        nightImage="/melkay-main-building-west-night.jpg" 
        alt="Melkay Signage Main Building West" 
        title="Main Building West Face" 
        description="Extruded brushed metal lettering offset from wall to allow shadow. Potential for backlighting at night." />

      <Detail id={2}
        image="/melkay-main-building-north.jpg" 
        nightImage="/melkay-main-building-north-night.jpg" 
        alt="Melkay Signage Main Building North" 
        title="Main Building North Face" 
        description="Extruded brushed metal lettering offset from wall to allow shadow. Potential for backlighting at night." />
      <Detail id={3}
        image="/melkay-main-building-south.jpg" 
        nightImage="/melkay-main-building-south-night.jpg" 
        alt="Melkay Signage Main Building South" 
        title="Main Building North Face" 
        description="Extruded brushed metal lettering offset from wall to allow shadow. Potential for backlighting at night." />

      <Detail  id={4}
        image="/melkay-west-lot-north-end.jpg" 
        nightImage="/melkay-west-lot-north-end.jpg" 
        alt="Melkay Signage West Lot North" 
        title="West Lot, North End" 
        description="Brick and concrete monument designed to reflect architecture of main building. Includes extruded, brushed metal lettering to match main building." />
      <Detail id={5}
        image="/melkay-west-lot-northwest.jpg" 
        nightImage="/melkay-west-lot-northwest.jpg" 
        alt="Melkay Signage West Lot Northwest" 
        title="West Lot Northwest Corner" 
        description="Custom brick and concrete pillar with brushed metal icon. Possibly backlit." />

      <Detail id={6}
        image="/melkay-west-lot-west.jpg" 
        nightImage="/melkay-west-lot-west.jpg" 
        alt="Melkay Signage West Lot West" 
        title="West Lot West Corner" 
        description="Custom brick and concrete pillar with brushed metal icon. Possibly backlit." />

      <Detail id={7}
        image="/melkay-west-lot-southwest.jpg" 
        nightImage="/melkay-west-lot-southwest.jpg" 
        alt="Melkay Signage West Lot Southwest" 
        title="West Lot Southwest Corner" 
        description="Custom brick and concrete pillar with brushed metal icon. Possibly backlit." />

      <Detail id={8}
        image="/melkay-west-lot-southeast.jpg" 
        nightImage="/melkay-west-lot-southeast.jpg" 
        alt="Melkay Signage West Lot Southeast" 
        title="West Lot Southest Corner" 
        description="Corner Brick and concrete monument designed to reflect architecture of main building. Includes extruded, brushed metal lettering to match main building." />

    {selectedMarker === 4 &&
      <div className="sketchfab-embed-wrapper w-full max-w-5xl aspect-video mb-12">
        <Iframe url="https://sketchfab.com/models/e73f415aeded4c9dba21061db7fffac0/embed?autostart=1&ui_theme=dark"
          className="w-full max-w-5xl aspect-video"
          width="640px"
          height="520px"
          id=""
          display="block"
          allowFullScreen
          position="relative"
          allow="autoplay; fullscreen; xr-spatial-tracking" />
      </div>
    }

    {selectedMarker === 8 &&
      <div className="sketchfab-embed-wrapper w-full max-w-5xl aspect-video mb-12">
        <Iframe url="https://sketchfab.com/models/ae0fb4d2016543629409af8914f81d3f/embed?autostart=1&ui_theme=dark"
          className="w-full max-w-5xl aspect-video"
          width="640px"
          height="520px"
          id=""
          display="block"
          allowFullScreen
          position="relative"
          allow="autoplay; fullscreen; xr-spatial-tracking" />
      </div>
    }

    {(selectedMarker === 5 || selectedMarker === 6 || selectedMarker === 7) &&
      <div className="sketchfab-embed-wrapper w-full max-w-5xl aspect-video mb-12">
        <Iframe url="https://sketchfab.com/models/ffcf4fb37bd54baeb1d183e293cd2aa3/embed?autostart=1&ui_theme=dark"
        className="w-full max-w-5xl aspect-video"
        width="640px"
        height="520px"
        id=""
        display="block"
        allowFullScreen
        position="relative"
        allow="autoplay; fullscreen; xr-spatial-tracking" />
      </div>
    }

      <div className="w-full border-gray-700 border-t max-w-5xl">
        <p className={`text-[9px] text-center pt-8 font-light uppercase text-gray-400 tracking-[.25rem]`}>&copy; 2024 GRAY LOON MARKETING GROUP, ALL RIGHTS RESERVED</p>
      </div>





    </main>
  );



}
