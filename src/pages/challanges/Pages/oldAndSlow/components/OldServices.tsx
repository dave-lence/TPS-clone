import React from 'react'

type Props = {}

const OldServices = (props: Props) => {
  return (
    <section className='services md:py-16'>
      <div className="container relative">
        <p className="mb-4">Services</p>
        <h3 className="pb-14 text-primary-dark text-2xl text-3xl text-[2rem] font-bold">
          Related Services
        </h3>
        <div className="flex flex-wrap mx-4">
          {
            data.map((item, index) => {
              const {title, text, subtitle} = item;
              return (
                <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-7 cursor-pointer" key={index}>
                  <div className='block bg-white p-10 sm:px-12 sm:pb-12 sm:pt-9 h-full rounded border-2 border-input hover:border-primary100'>
                    <p className='pb-6 text-primary100 text-base'>{subtitle}</p>
                    <h6 className="text-xl text-primary-dark font-semibold pb-4">{title}</h6>
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

export default OldServices

const data = [
  {
    subtitle: 'Cloud Solutions',
    title: 'Managed Private Cloud Solutions',
    text: 'Public Cloud is matured but is it always the right choice?'

  },
  {
    subtitle: 'IT Support and Consultancy Services',
    title: 'IT Audits',
    text: 'Maximising the investment already made'
  },
  {
    subtitle: 'IT Support and Consultancy Services',
    title: 'Architecture, Design and Implementation',
    text: 'Secure and resilient IT infrastructures'
  },
]