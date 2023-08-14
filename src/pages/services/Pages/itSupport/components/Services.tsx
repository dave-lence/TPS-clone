import React from 'react'

type Props = {}

const Services = (props: Props) => {
  return (
    <section className='bg-white md:pb-16'>
      <div className="container relative">
        <div className="flex flex-wrap mx-4">
          {
            data.map((item, index) => {
              const {title, text} = item;
              return (
                <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-7 cursor-pointer" key={index}>
                  <div className='block bg-white p-10 sm:px-12 sm:pb-12 sm:pt-9 h-full rounded border-2 border-input hover:border-primary100'>
                    <p className='pb-6 text-primary100 text-base'>IT Support and Consultancy Services</p>
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

export default Services

const data = [
  {
    title: 'Managed IT Support',
    text: 'Expert support when you need it most.'
  },
  {
    title: 'Consultancy',
    text: 'Monitoring and Identifying cyber threats for Businesses'
  },
  {
    title: 'Architecture, Design and Implementation',
    text: 'Secure and resilient IT infrastructures'
  },
  {
    title: 'IT Training',
    text: 'Learning how to manage your IT systems'
  },
  {
    title: 'IT Audits',
    text: 'Maximising the investment already made'
  },
  
]