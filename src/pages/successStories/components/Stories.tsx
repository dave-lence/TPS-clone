import { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io"
import accountancy from '../../../assets/images/accountancy.webp'
import construction from '../../../assets/images/construction.webp'
import formula from '../../../assets/images/formula.webp'
import jobskin from '../../../assets/images/jobskin.webp'
import stpauls from '../../../assets/images/stpauls.webp'
import stowe from '../../../assets/images/stowe.webp'
import welch from '../../../assets/images/welch.webp'

const Stories = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(stories.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentStories = stories.slice(startIndex, endIndex);

  const goToPage = (pageNum: any):any => {
    setCurrentPage(pageNum)
  }
  return (
    <section className="bg-white my-20">
      <div className="stories-section py-12">
        <div className='w-[90%] mx-auto'>
          <div className="flex flex-col space-y-10">
            {
              currentStories.map((item, index) => {
                const {image, name, title} = item;
                return (
                  <div key={index} className="item group h-72 item md:h-80 lg:h-96 cursor-pointer">
                    <img src={image} alt={name} 
                      className="w-full h-full rounded-sm group-hover:scale-125 group-hover:duration-[4s]" 
                    />
                    
                    <div className='item-gradient'></div>

                    <div className='absolute w-11/12 top-6 left-6 md:top-10 md:left-14 md:w-4/5 lg:w-[60%] z-20'>
                      <h5 className='text-primary100 text-lg font-medium'>{name}</h5>
                      <h3 className="text-2xl md:text-3xl font-semibold text-white my-8 lg:leading-normal capitalize">{title}</h3>
                      <button className="p-2 md:p-3 rounded-full border-2 border-primary100 text-white">
                        <IoIosArrowForward size={24} />
                      </button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='flex items-center justify-center mt-8 gap-4'>
            {
              Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index + 1)}
                  className={`${currentPage === (index + 1) ? 'bg-transparent border-2 border-primary100 text-primary100 rounded-full w-8 h-8' : 'text-black hover:text-primary100'}`}
                >
                  {index + 1}
                </button>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stories

const stories = [
  {
    name: "St Paul's Cathedral",
    title: "Improving St Paul's Cathedral remote working capacity",
    image: stpauls,
  },
  {
    name: "Jobskin",
    title: "Prestige medical supplier implements full SAP solution",
    image: jobskin,
  },
  {
    name: "Bronsens",
    title: "Oxfordshire accountants rely on the cloud for protection of client financial data",
    image: accountancy,
  },
  {
    name: "Biokil Crown",
    title: "Helping Biokil Crown maintain their phenomenal growth",
    image: construction,
  },
  {
    name: "John Welch and Stammers",
    title: "Helping Biokil Crown maintain their phenomenal growth witney law firm reduces risk of data loss using the CIS cloud",
    image: welch,
  },
  {
    name: "Purcell",
    title: "Historic buildings saved by IT",
    image: stowe,
  },
  {
    name: 'Force India F1',
    title: 'F1 fata finds a new home with CIS',
    image: formula
  }
]