import React from 'react'
import CommunicationHero from './components/CommunicationHero'
import "./communications.css"
import CommunicationDescription from './components/CommunicationDescription'
import CommunicationStories from './components/CommunicationStories'
import CommunicationBlog from './components/CommunicationBlog'
import Partners from '../../../Home/components/Partners'
import CommunicationKeepUpToDate from './components/CommunicationKeepUpToDate'

export default function Communications() {
  return (
    <div>
       <CommunicationHero/>
       <CommunicationDescription/>
       <CommunicationStories/>
       <CommunicationBlog/>
       <CommunicationKeepUpToDate/>
       <Partners/>
    </div>
  )
}
