import { HeroSvg } from '../../../../successStories/components/Hero'
import Navbar from '../../../../Home/components/Navbar'

type Props = {}

const SecurityHero = (props: Props) => {
  return (
    <section id='it-hero' className='relative overflow-hidden'>
      <Navbar />
      <div className="bg-black bg-opacity-70 min-h-screen">
        <div className="flex flex-col overflow-hidden text-left md:flex-row md:items-center">
          <div className="absolute top-[60%] left-20 translate-y-[-60%] w-full md:w-2/3 lg:w-1/2 flex flex-col">
            <p className="text-primary100 font-semibold text-lg">
              Challenge
            </p>
            <h1 className="text-white text-4xl md:text-[3.25rem] font-semibold md:font-bold text-left my-10 title">
              Does IT Security Matter? The Importance of IT Security
            </h1>
            <p className="text-white text-semibold text-left mb-10 text-lg">
              No matter how new your hardware is, your data is only as secure as the IT security procedures you have in place. This means your data is always at risk, so be one step ahead and ensure your data is as secure as it can possibly be.
            </p>
          </div>

          <div className="hidden md:block w-full md:w-1/3 lg:1/2">
            <HeroSvg />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecurityHero