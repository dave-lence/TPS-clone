import { useEffect, useState } from 'react';
import { AiOutlineRight } from "react-icons/ai"
import { Carousel } from 'react-responsive-carousel';

type Props = {}

const textData = [
  {
    content: "CIS’s expertise has helped our business to grow without having to worry about unpredictable system outages &amp; high maintenance costs. We’ve seen a huge increase in efficiency from working in a virtualised environment along with peace of mind that our systems are fully backed up at all times.",
    author: 'Marks Winsk, Head of IT, St. Pauls Cathedral'
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eligendi, cupiditate sint ipsa tenetur harum ipsam sequi enim similique iusto! Atque, impedit accusamus nemo deleniti nulla amet esse? Voluptatum, velit!',
    author: 'John Story, Head of IT, St. Pauls Cathedral'
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eligendi, cupiditate sint ipsa tenetur harum ipsam sequi enim similique iusto! Atque, impedit accusamus nemo deleniti nulla amet esse? Voluptatum, velit!',
    author: 'John Story, Head of IT, St. Pauls Cathedral'
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eligendi, cupiditate sint ipsa tenetur harum ipsam sequi enim similique iusto! Atque, impedit accusamus nemo deleniti nulla amet esse? Voluptatum, velit!',
    author: 'John Story, Head of IT, St. Pauls Cathedral'
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eligendi, cupiditate sint ipsa tenetur harum ipsam sequi enim similique iusto! Atque, impedit accusamus nemo deleniti nulla amet esse? Voluptatum, velit!',
    author: 'John Story, Head of IT, St. Pauls Cathedral'
  },
  {
    content: "CIS’s expertise has helped our business to grow without having to worry about unpredictable system outages &amp; high maintenance costs. We’ve seen a huge increase in efficiency from working in a virtualised environment along with peace of mind that our systems are fully backed up at all times.",
    author: 'Andrew Grisdale, MD, Biokil Crown'
  },
]

const Newsletter = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textData.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]); 

  return (
    <section className="overflow-hidden bg-white pt-14 pb-12 lg:py-20">
      <div className="container relative z-10">
        <div className="flex flex-col space-y-5 lg:flex-row lg:items-stretch">

          <div className="w-full lg:w-1/2 px-5 mb-7 lg:mb-0">
            <div className="relative overflow-hidden h-full border-2 rounded border-primary100">
              <div className="relative p-[1.875rem] sm:p-12 text-left">
                <p className="text-primary100 text-lg pb-10">Our Newsletter</p>
                <h3 className="text-primary-dark text-2xl sm:text-3xl md:text-[2rem] font-bold pb-5">
                  Keep up to date
                </h3>
                <p className="text-xl text-primary-dark pb-10">
                  Join our mailing list and stay up to date with all the latest in the IT world
                </p>
                <div className="max-w-full mt-4">
                  <form className="flex w-full">
                    <div className="grow w-auto sm:w-full">
                      <input
                        type="text"
                        placeholder="Email Address"
                        className="w-full py-3 px-4 placeholder:text-black rounded-full bg-light border-2 border-transparent hover:border-input text-black outline-2 outline-primary100"
                      />
                    </div>
                    <div className="ml-4 rounded-full px-4 py-4 border-2 cursor-pointer border-primary100 flex items-center justify-center rounded-full">
                      <AiOutlineRight />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-5 order-last">
            <div className="relative h-full p-[1.875rem] sm:py-20 sm:px-14 bg-primary rounded">
              <div className="flex justify-between mb-10">
                <svg
                  height="22"
                  viewBox="0 0 50 22"
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#49a8ff"
                    stroke-width="2"
                    transform="translate(1.85781 1.610305)"
                  >
                    <path d="m11.5020027 18.9572212-2.67894668.0427788c-2.19907981-.1580957-4.35414083-1.0744306-6.03615479-2.7564446-3.71617829-3.7161782-3.71555831-9.74055336 0-13.45611167 3.71617829-3.71617829 9.74055337-3.71679828 13.45673167-.00061998 1.9603864 1.96038634 2.886021 4.56369509 2.778144 7.13166481h.0458787l-.0055798 9.02881284z"></path>
                    <path d="m38.6441928 18.9572212-2.6789467.0427788c-2.1990798-.1580957-4.3541408-1.0744306-6.0361548-2.7564446-3.7161783-3.7161782-3.7155583-9.74055336 0-13.45611167 3.7161783-3.71617829 9.7405534-3.71679828 13.4567317-.00061998 1.9603863 1.96038634 2.886021 4.56369509 2.778144 7.13166481h.0458787l-.0055798 9.02881284z"></path>
                  </g>
                </svg>
              </div>
              <div className="w-full overflow-hidden">
                <Carousel autoPlay showStatus={false} showThumbs={false} showArrows={false} infiniteLoop>
                  {
                    textData.map((item, index) => {
                      const { content, author } = item;
                      return (
                        <div>
                          <p className="text-3xl font-semibold text-left text-white mv-6">
                            {content}
                          </p>
                          <p className="mt-4 mb-10 text-left text-white text-lg">
                            {author}
                          </p>
                        </div>
                      )
                    })
                  }
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter