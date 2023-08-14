import security from '../../../../../assets/images/security.webp'

type Props = {}

const SecurityImportance = (props: Props) => {
  return (
    <section className='relative overflow-hidden pt-14 pb-8'>
      <div className="container">
        <div className="relative flex flex-col md:flex-row items-center md:items-stretch">
          <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-14 lg:pl-24 order-2">
            <div className="w-full md:aspect-square relative">
              <img src={security} alt="printer" />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:flex md:flex-col order-1">
            <h2 className="text-primary-dark mb-7 text-xl sm:text-2xl md:text-[2.4rem] font-bold title">
              How important is IT security for an organisation?
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              IT security is as important to your business as the data that your business collects, processes and stores.
            </p>
            <p className='text-base text-gray-600 font-medium mb-4'>
              Data comes in the form of emails, bank details, medical details, manufacturing processes, staff bank details, in fact, any information available about your business, your staff and your clients.
            </p>
            <p className='text-base text-gray-600 font-medium mb-4'>
              How well could your business cope if that detail became unavailable due to being encrypted by ransomware? How valuable would that data be to cyber-criminals if it was breached?   
            </p>
            <p className='text-base text-gray-600 font-medium mb-4'>
              How likely are your clients to trust you again or recommend you if their data had been breached because you had not implemented robust security systems?  
            </p>
            <p className='text-base text-gray-600 font-medium mb-4'>
              Without adequate security systems, not only is your data at risk but so is your reputation and potentially your entire business. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecurityImportance