import KeepUpToDate from '../../../about/components/KeepUpToDate'
import Partners from '../../../about/components/Partners'
import './cloudSolutions.css'
import CloudDescription from './components/CloudDescription'
import CloudHero from './components/CloudHero'
import ExploreServices from './components/ExploreServices'
import RelatedBlog from './components/RelatedBlog'
import RelatedSuccessStories from './components/RelatedSuccessStories'

export default function cloudSolutions() {
  return (
    <div>
      <CloudHero/>
      <CloudDescription/>
      <ExploreServices/>
      <RelatedSuccessStories/>
      <RelatedBlog/>
      <KeepUpToDate/>
      <Partners/>
    </div>
  )
}
