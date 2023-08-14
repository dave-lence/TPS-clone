import { Link } from "react-router-dom"
import adobe from "../../../../../assets/images/AdobeStock.webp"
import fibre from "../../../../../assets/images/fiber.webp"
import phone from "../../../../../assets/images/Phon_call.webp"

type Props = {}

function RecentBlog(props: Props) {
  return (
    <section className='bg-white py-11'>
      <div className="container">
        <h4 className='text-primary-dark font-bold text-[2rem] lg:text-[2.65rem]'>
          Recent Blogs
        </h4>
        <div className="flex flex-wrap items-start my-10">
          {
            data.map((item, index) => {
              const { img, date, title } = item;
              return (
                <div className="w-full sm:w-1/2 lg:w-1/3 px-5" key={index}>
                  <div className="relative rounded mb-7 overflow-hidden w-full h-60">
                    <img src={img} alt={title} className="w-full object-cover h-full" />
                  </div>
                  <p className="text-primary100 mb-1.5 font-medium">{date}</p>
                  <h3 className="text-lg mb-5 text-primary-dark font-semibold">{title}</h3>
                  <span className="text-primary-dark relative pb-0.5 mb-[0.0625rem] border-b-2 border-primary100 cursor-pointer">
                    Learn more
                  </span>
                </div>
              )
            })
          }
        </div>
        <Link to='/blog'>
          <button className="px-8 py-3 rounded-full bg-transparent border-2 border-primary100 text-black font-normal text-lg hover:bg-primary100 hover:text-white hover:transition-colors hover:duration-300">
            Read more news
          </button>
        </Link>
      </div>
    </section>
  )
}

export default RecentBlog

const data = [
  {
    img: adobe,
    date: '25/03/2020',
    title: 'A guide on cloud computing'
  },
  {
    img: fibre,
    date: '16/07/2019',
    title: 'Always Accessible: Choosing a VoIP Provider'
  },
  {
    img: phone,
    date: '09/12/2018',
    title: 'Anywhere, Anytime, Any Device: Staying Connected with VoIP technology'
  },
]