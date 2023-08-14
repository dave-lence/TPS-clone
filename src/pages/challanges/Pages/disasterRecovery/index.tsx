import React from 'react'
import DisatserHero from './components/DisasterHero'
import "./disasterRecover.css"
import DisasterDescription from './components/DisasterDescription'
import DisasterSuccessStories from './components/DisasterStories'
import DisasterContactDetails from './components/GetInTouch'

export default function DisasterRecovery() {
  return (
    <div>
     <DisatserHero/> 
     <DisasterDescription/>
     <DisasterSuccessStories/>
     <DisasterContactDetails/>
    </div>
  )
}
