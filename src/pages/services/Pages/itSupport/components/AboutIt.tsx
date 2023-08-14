import { Link } from 'react-router-dom';
import typing from '../../../../../assets/images/typing.webp'

type Props = {}

const AboutIt = (props: Props) => {
  return (
    <section className="about-it pt-16 lg:py-20">
      <div className="container">
        <div className="relative flex flex-col md:flex-row items-center md:items-stretch z-10">
          <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pr-5">
            <div className="relative w-full md:aspect-square">
              <img src={typing} alt="typing" className='w-full md:h-full object-center object-cover rounded md:absolute md:inset-0 about-img md:mb-0 mb-14' />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:flex md:flex-col md:justify-center md:pl-10 lg:pl-20">
            <h2 className="text-primary-dark mb-7 text-2xl md:text-3xl lg:text-[2rem] font-semibold">IT Support by CIS</h2>
            <p className='text-lg sm:text-xl text-primary-dark mb-7'>
              CIS has a proven track record of supporting organisations of all sizes through their IT needs.
            </p>
            <div>
              {
                data.map((item, index) => {
                  const {title, text, link} = item;
                  return (
                    <div key={index} className='mb-10'>
                      {title && <h4 className='leading-8 font-bold text-xl mb-5'>{title}</h4>}
                      {
                        text.map((p, index) => {
                          return <p key={index} className="leading-8 mb-6">{p}</p>
                        })
                      }
                      {
                        link && <p>
                          <Link to='/contact-us' className='border-b-2 border-primary100 pb-[4px]'>{link}</Link>
                        </p>
                      }
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIt

const data = [
  {
    text: [
      "CIS’ team of experts are on hand to provide the support you need when you need it. CIS engineers have a range of skills throughout the team ensuring there is always someone who can resolve your issue.",
      "As part of the solutions we provide at CIS, we offer managed and streamlined IT support when your company needs it most. Keep your business running securely, safe in the knowledge any potential technical or IT issues can be addressed promptly with our experienced team. With fast response times, unlimited IT support and 24/7 monitoring, we’ll pick up IT issues or respond to problems you find in a timely manner so you can focus on your business. ",
      "",
      "Nobody likes to be slowed down by their network or hardware. With remote IT support available internationally, our team can remotely control your device and help find the root cause of the problem wherever you are in the world.",
      "",
      "From outsourced IT support to in-depth IT audits, the team at CIS can provide expert advice and in-depth knowledge of the latest developments in IT architecture. We can build, develop and deliver an IT system that delivers consistent, dependable and measurable performance for all business users.",
      "",
    ],
    link:'Get in touch with the team today'
  },
  {
    title: 'Managed IT Support Services',
    text: [
      "",
      "From comprehensive IT audits and troubleshooting to IT training and additional support, CIS have a breadth of skills to help push your business forward. Optimise your existing IT system for maximum performance and return of investment with the help of CIS Ltd. ",
      "",
      "Our IT consultancy services include IT project management consultancy to help your business maximise existing IT systems to help your business get results. Our team will work with you to provide guidance, advice and strategic planning to help you implement and deliver an IT system that’s streamlined to your business model and in line with expectations. Our experts are with you every step of the way, from initial planning to practical implementation.",
      ""
    ]
  },
  {
    title: 'Explore our IT support services below',
    text: [
      ""
    ]
  },
  {
    title: 'Managed IT support',
    text: [
      "If you can’t afford or manage in house IT support, then our managed outsourced IT support can provide your business with on-hand technical IT support that can be managed in a fast timeframe to fix an error or find a suitable solution. CIS managed IT support is a cheaper, more sustainable solution for businesses that need 24/7 monitoring and technical IT knowledge but don’t have the budget.",
      ""
    ]
  },
  {
    title: 'Consultancy',
    text: [
      "Delivering expert advice and guidance to help you streamline your business IT systems. We will work with you to deliver a reliable IT solution that meets your expectations and objectives. We focus on efficiency, innovation and cost savings to give our customers the edge over their competition.",
      ""
    ],
    link: 'Talk to us today about our Consultancy Services'
  },
  {
    title: 'Architecture, Design and Implementation ',
    text: [
      "Our expert team will work to create secure and scalable IT data networks and systems that deliver consistent performance. Our processes ensure any security weaknesses are identified, addressed and mitigated for a consistent and coherent IT system. With both software and hardware design considered, our systems are built to integrate with existing systems to meet specific business requirements."
    ],
    link: 'Explore your options for IT Architecture',
  },
  {
    title: 'IT Training',
    text: [
      "Get your team up to date on how best to use your IT system. Minimise delays and improve efficiency and productivity with IT training. From one-on-one training sessions to group training for Office 365 essential skills, our IT Training services can help train your team to be competent and knowledgeable with your businesses IT systems. ",
      ""
    ],
    link:'Get in touch with us about IT Training'
  },
  {
    title: 'IT Audits',
    text: [
      "Our comprehensive IT Audits assess and evaluate all areas of your existing IT systems to help identify security weaknesses, address existing errors, and streamline internal systems. With an efficient, reliable and universal system, your business can build a high standard of workflow, delivering better results to your clients and customers. Help your business reach its potential; it all starts from within. "
    ],
    link:'Start a conversation about IT Audits today'
    
  }
]