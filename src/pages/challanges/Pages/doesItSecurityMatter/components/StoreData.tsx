import lock from '../../../../../assets/images/cyber_lock.webp'

type Props = {}

const StoreData = (props: Props) => {
  return (
    <section className='relative overflow-hidden pt-8'>
      <div className="container">
        <div className="relative flex flex-col md:flex-row items-center md:items-stretch">
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="w-full md:aspect-square relative">
              <img src={lock} alt="cyber security" />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:flex md:flex-col md:pl-4 lg:pl-14">
            <h2 className="text-primary-dark mb-7 text-xl sm:text-2xl md:text-[2.5rem] font-bold title">
              What is the most secure way to store business data?
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              There are various ways of keeping your data secure and a robust information security policy should include most if not all of these.
            </p>
            <ul className='list-disc text-gray-500'>
              <li>
                <span className="text-lg font-semibold">Firewalls:</span>
                These act as a buffer between your devices and the internet and blocks traffic according to a set of parameters that identify malicious activity.
              </li>
              <li className='mb-3'>
                <span className="text-lg font-semibold">Anit-ransomware and anti-malware software:</span>
                By installing this on all devices and ensuring it is kept updated protects your network from infection. 
              </li>
              <li className='mb-3'>
                <span className="text-lg font-semibold">Multifactor authentication:</span>
                In addition to passwords adding a pin number, randomly generated code or a fingerprint adds an extra layer of security.
              </li>
              <li className='mb-3'>
                <span className="text-lg font-semibold">Email Security:</span>
                By employing multi-factor authentication, encryption and extensive training you can prevent email from being a source of cybercrime. 
              </li>
              <li className='mb-3'>
                <span className="text-lg font-semibold">End-to-End encryption:</span>
                By encrypting your data, only the creator and the intended recipient are able to access it.  
              </li>
              <li className='mb-3'>
                <span className="text-lg font-semibold">Cloud Security:</span>
                Identify whether the public or the private cloud is recommended for your business, and then combined with multi-factor authentication and access management you can add another layer of security to your data.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoreData