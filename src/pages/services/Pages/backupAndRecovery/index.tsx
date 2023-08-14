import React from 'react'
import BackupHero from './components/BackupHero'
import "./backupAndRecovery.css"
import BackupDescription from './components/BackupDescription'
import BackupStories from './components/BackupStories'
import BackupBlog from './components/BackupBlog'
import Partners from '../itSupport/components/Partners'
import KeepUpToDate from '../../../about/components/KeepUpToDate'

export default function BackupAndRecovery() {
  return (
    <div>
      <BackupHero/>
      <BackupDescription/>
      <BackupStories/>
      <BackupBlog/>
      <KeepUpToDate/>
      <Partners/>
    </div>
  )
}
