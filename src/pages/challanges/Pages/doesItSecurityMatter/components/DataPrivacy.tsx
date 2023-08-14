import React from 'react'
import data from '../../../../../assets/images/blog2.png'

type Props = {}

const DataPrivacy = (props: Props) => {
  return (
    <section className='relative overflow-hidden pt-16'>
      <div className="container">
        <div className="relative flex flex-col md:flex-row items-center md:items-stretch">
          <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-14 lg:pl-24 order-2">
            <div className="w-full md:aspect-square relative">
              <img src={data} alt="data" />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:flex md:flex-col order-1">
            <h2 className="text-primary-dark mb-7 text-xl sm:text-2xl md:text-[2rem] font-bold title">
              Why is data privacy so important?
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              Data privacy and data security are as important to your clients as it is to your staff and you. Clients need to know that when they give you their data – whether an email address, a list of financial assets or medical details – that it is safe and is only used for the intended purposes.
            </p>
            <p className='text-base text-gray-600 font-medium mb-4'>
              Whilst no business, no matter how small or how big is 100% safe from cyber-attacks, clients need to know that you are doing all within your power to ensure their data is safe with you. 
            </p>
            <p className='text-base text-gray-600 font-medium mb-4'>
              That means having a robust data security policy in place and carrying out due diligence if the data needs to be passed to a third party or using a third-party data centre or cloud supplier to store data. The more transparent you are with your security processes the more you will gain the trust of your clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataPrivacy