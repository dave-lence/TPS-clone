import React from 'react'
import './knowledgeBase.css'
import KnowledgeHero from './components/KnowledgeHero'
import Resources from './components/Resources'
import ResourceBlog from './components/Blog'
import KnowledgeUpdate from './components/KnowledgeUpdate'
import KnowledgeFaqs from './components/KnowlwdgeFaqs'

const KnowledgeBase = () => {
  return (
   <div>
    <KnowledgeHero/>
    <Resources/>
    <ResourceBlog/>
    <KnowledgeUpdate/>
    <KnowledgeFaqs/>
   </div>
  )
}

export default KnowledgeBase