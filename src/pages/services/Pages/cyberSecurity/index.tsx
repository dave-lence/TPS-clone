import './cyberSecurity.css'
import CyberHero from './components/CyberHero'
import Partners from '../itSupport/components/Partners'
import CyberServices from './components/CyberServices'
import CyberBlog from './components/CyberBlog'
import CyberStories from './components/CyberStories'
import CyberKeepUp from './components/CyberKeepUp'

export default function CyberSecurity() {
  return (
    <>
      <CyberHero />
      <CyberServices />
      <CyberStories />
      <CyberBlog />
      <CyberKeepUp />
      <Partners />
    </>
  )
}
