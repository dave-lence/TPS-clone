import React from 'react'
import './smallIssues.css'
import IssuesHero from './components/IssuesHero'
import IssuesDescription from './components/IssuesDescription'
import IssuesFaqs from './components/IssuesFaqs'
import IssuesStories from './components/IssuesStories'
import IssuesGetInTouch from './components/IssuesGetInTouch'
export default function SmallIssues() {
  return (
    <div>
      <IssuesHero/>
      <IssuesDescription/>
      <IssuesFaqs/>
      <IssuesStories/>
      <IssuesGetInTouch/>
    </div>
  )
}
