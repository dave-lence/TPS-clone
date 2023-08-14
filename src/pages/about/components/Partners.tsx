import React from 'react'
import censornet from '../../../assets/images/Censornet-Gold-Partner-logo.webp'
import microsoft from '../../../assets/images/micorsoft_silver_partner.webp'
import sophos from '../../../assets/images/sophos_gold_partner.webp'
import veenam from '../../../assets/images/veeam_csp_silver.png'

const companies = [microsoft, sophos, veenam, censornet,]

const Partners = () => {
  return (
    <section className='w-4/5 py-4 lg:py-8 mx-auto'>
      <h4 className="text-center text-gray-600 font-medium text-lg capitalize">
        Partners &amp; vendors 
      </h4>
      <div className="flex flex-wrap justify-center gap-14 my-6 md:mt-12 md:mb-8">
        {
          companies.map((image, index) => {
            return (
              <div className="flex items-center justify-center max-w-[5.5rem] sm:max-w-[7rem] md:max-w-[12rem]" key={index}>
                <img alt="" className="block h-auto max-h-[3.25rem] md:max-h-[6.5rem]" src={image} />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Partners
