import cyber from "../../../../../assets/images/cyber-about.webp"

type Props = {}

const CyberAbout = (props: Props) => {
  return (
    <section className='relative overflow-hidden'>
      <div className="container pt-16">
        <div className="relative flex flex-col md:flex-row items-center md:items-stretch">
          <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pr-5">
            <div className="w-full md:aspect-square relative">
              <img src={cyber} alt="cyber about" />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:flex md:flex-col md:pl-4 lg:pl-14">
            <h2 className="text-primary-dark mb-7 text-xl sm:text-2xl md:text-[2.5rem] font-bold leading-[3.5rem]">
              Protect your IT environment to ensure business continues
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              Every week there is another headline about a compromised organisation losing data or being hacked, ensure you stay out of the headlines!
            </p>
            <p className='mb-6'>
              Cyber Security is no longer an addition to IT services but must be considered essential to the smooth day-to-day running of an organisation. All layers of IT delivery must be considered and risks minimised to ensure access to an organisations data and services is limited to only those intended to have it.
            </p>
            <p className="mb-6">
              Whether your organisation is looking to augment its security testing program or is just getting started, Computing Information Systems’ Cyber Division has a comprehensive range of services to help paint the full picture of your security landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CyberAbout