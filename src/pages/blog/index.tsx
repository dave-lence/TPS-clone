import React from 'react'
import Hero from './components/Hero'
import './blog.css'
import BlogSection from './components/BlogSection'
import BlogSectionTwo from './components/BlogSectionTwo'
import KeepUpToDate from './components/KeepUpToDate'
import BlogSectionThree from './components/BlogSectionThree'
import BlogSectionFour from './components/BlogSectionFour'
import BlogSwitch from './components/BlogSwitch'

const Blog = () => {
  return (
    <div>
      <Hero/>
      <BlogSection />
      <BlogSectionTwo/>
      <KeepUpToDate/>
      <BlogSectionThree/>
      <BlogSectionFour/>
      <BlogSwitch/>
    </div>
  )
}

export default Blog