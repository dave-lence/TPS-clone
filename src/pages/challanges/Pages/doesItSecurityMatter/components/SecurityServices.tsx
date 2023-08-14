import React from 'react'

type Props = {}

const SecurityServices = (props: Props) => {
  return (
    <section className='bg-white md:py-16'>
      <div className="container relative">
        <div className="flex flex-wrap mx-4">
          {
            data.map((item, index) => {
              const {title, text} = item;
              return (
                <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-7 cursor-pointer" key={index}>
                  <div className='block bg-white p-10 sm:px-12 sm:pb-12 sm:pt-9 h-full rounded border-2 border-input hover:border-primary100'>
                    <p className='pb-6 text-primary100 text-base'>
                      Cyber Security Services
                    </p>
                    <h6 className="text-lg text-primary-dark font-semibold pb-4">{title}</h6>
                    <p className='pb-4'>
                      {text}
                    </p>
                    <span className="inline-block relative pb-[2px] border-b-2 border-primary100 text-primary-dark cursor-pointer">Learn more</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default SecurityServices

const data = [
  {
    title: 'Encryption Services',
    text: 'Secure your data and devices.'
  },
  {
    title: 'Email Security',
    text: 'Monitoring and Identifying Cyber Threats for Businesses'
  },
  {
    title: 'Cloud Security',
    text: 'Protect the latest frontier of IT Infrastructure.'
  }
]