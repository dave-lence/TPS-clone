import SuccessStories from './components/SuccessStories'
import ItHero from './components/ItHero';
import RecentBlog from './components/RecentBlog';
import Partners from './components/Partners';
import AboutIt from './components/AboutIt';
import Services from './components/Services';
import './itSupport.css'
import Newsletter from './components/Newsletter';

function ItSupport() {
  return (
    <>
      <ItHero />
      <AboutIt />
      <Services />
      <SuccessStories />
      <RecentBlog />
      <Newsletter />
      <Partners />
    </>
  )
}

export default ItSupport
