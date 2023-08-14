import React from 'react'
import './itAndRoi.css'
import ItRoiHero from './components/ItRoiHero'
import RoiDescription from './components/RoiDescription'
import RoiStories from './components/RoiStories'
import RoiGetInTouch from './components/RoiGetInTouch'
export default function ItAndRoi() {
  return (
    <div>
      <ItRoiHero/>
      <RoiDescription/>
      <RoiStories/>
      <RoiGetInTouch/>
    </div>
  )
}
