import React from 'react'
import SecurityHero from './components/SecurityHero'
import SecurityStories from './components/SecurityStories'
import SecurityServices from './components/SecurityServices'
import SecurityContact from './components/SecurityContact'
import SecurityImportance from './components/SecurityImportance'
import CyberAttacks from './components/CyberAttacks'
import DataPrivacy from './components/DataPrivacy'
import StoreData from './components/StoreData'
import { Link } from 'react-router-dom'
import './doesItSecurityMatter.css'

export default function DoesItSecurityMatter() {
  return (
    <>
      <SecurityHero />  
      <SecurityImportance />
      <CyberAttacks />
      <DataPrivacy />
      <StoreData />
      <div className='w-[82%] mx-auto text-left mt-14'>
        <p className='text-xl'>
          Although you can never be 100% protected from cyber-attacks, the more security solutions you have in place the more protection you have. For more information on keeping your data secure within your business network see the main cybersecurity service page <Link to='/services/cyber-security' className='underline'>
          here.</Link>
        </p>
      </div>
      <SecurityServices />
      <SecurityStories />
      <SecurityContact />
    </>
  )
}
