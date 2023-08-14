import adobe from '../../../../../assets/images/Adobe.jpeg'

type Props = {}

const CyberAttacks = (props: Props) => {
  return (
    <section className='relative overflow-hidden pt-14'>
      <div className="container">
        <div className="relative flex flex-col md:flex-row items-center md:items-stretch">
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="w-full md:aspect-square relative">
              <img src={adobe} alt="adobe" />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:flex md:flex-col md:pl-4 lg:pl-14">
            <h2 className="text-primary-dark mb-7 text-xl sm:text-2xl md:text-[2.5rem] font-bold title">
              How do cyber-attacks affect businesses?
            </h2>
            <p className="text-lg sm:text-xl mb-5">
              There are various forms of cyber-attacks that can affect your business. All of these, amongst others, enable cyber-criminals to steal or restrict your data which can take your business offline or cost your company in financial and reputational terms.
            </p>
            <p className='mb-5 text-lg text-gray-500'>
              They include:
            </p>
            <ul className='list-disc text-gray-500'>
              <li className='mb-3'>
                <span className="text-lg font-semibold">Malware:</span>
                An umbrella term for any malicious software designed to cause damage, spy on user activity or steal data. It includes viruses, worms, trojans, backdoor/remote access and spyware. Some malware works in the background without the user being aware.
              </li>
              <li className='mb-3'>
                <span className="text-lg font-semibold">Ransomware:</span>
                Once installed ransomware encrypts all data, and the criminals demand payment in bitcoin in order to decrypt it. Depending on which machine is infected first, anything that user has access to will be infected, which means on a networked machine this could shut your business down. Not everyone who pays gets their data back.
              </li>
              <li className='mb-3'>
                <span className="text-lg font-semibold">Phishing:</span>
                Normally sent by email and encourages the recipient to click on a link (which looks like a legitimate website) which can then download malware or ask for and then steal login or personal details.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CyberAttacks