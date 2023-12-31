import React from 'react'
import Navbar from '../../../../Home/components/Navbar'
import { HeroSvg } from '../../../../successStories/components/Hero'

type Props = {}

const OldHero = (props: Props) => {
  return (
    <section id='old-hero' className='relative overflow-hidden'>
      <Navbar />
      <div className="bg-black bg-opacity-70 min-h-screen">
        <div className="flex flex-col overflow-hidden text-left md:flex-row md:items-center">
          <div className="absolute top-[50%] left-20 translate-y-[-50%] w-full md:w-2/3 lg:w-1/2 flex flex-col">
            <p className="text-primary100 font-semibold text-lg">
              Challenge
            </p>
            <h1 className="text-white text-4xl md:text-[3.5rem] font-semibold md:font-bold text-left my-10">
              Old, Slow and Useless!
            </h1>
            <p className="text-white text-semibold text-left mb-10 text-lg">
              Dated IT equipment can take a toll on your business.
            </p>
          </div>

          <div className="hidden md:block w-full md:w-1/3 lg:1/2">
            <HeroSvg />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OldHero