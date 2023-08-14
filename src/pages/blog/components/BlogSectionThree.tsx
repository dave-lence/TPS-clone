import mailImg from '../../../assets/images/mailImg.png'
import networkImg from '../../../assets/images/networkImg.png'
import prosImg from '../../../assets/images/prosImg.webp'

const BlogSectionThree = () => {
  return (
    <section id='blogSection'>
      <div className="container mx-auto justify-center items-center max-w-7xl p-6 space-y-6">

      {/* image flex container */}
      <div className="item-container inline-block cursor-pointer ">
                {/* image 1 */}
            <div className="group relative rounded mb-30 overflow-hidden md:w-1/2">
            <img src={mailImg} alt="" className="w-full h-60 object-cover object-center" />
            <p className="text-blue-600 mb-4 mt-4 font-bold text-sm">15/02/2021</p>
            <h3 className="text-lg font-bold text-slate-950 mb-5">A Guide To Email Security</h3>
            <div className="group">
            <h4 className="text-slate-950 text-lg">Learn more</h4>
           <div className="mx-0 w-20 group-hover:border-b-2 group-hover:border-sky-500"> </div>
            </div>
            </div>
            
              {/* image 2 */}
              <div className="group relative rounded mb-30 overflow-hidden md:w-1/2">
            <img src={networkImg} alt="" className="w-full h-60 object-cover object-center" />
            <p className="text-blue-600 mb-4 mt-4 font-bold text-sm">05/02/2021</p>
            <h3 className="text-lg font-bold text-slate-950 mb-5">What To Do When Network is Down</h3>
            <div className="group">
            <h4 className="text-slate-950 text-lg">Learn more</h4>
           <div className="mx-0 w-20 group-hover:border-b-2 group-hover:border-sky-500"> </div>
            </div>
            </div>
            
              {/* image 3 */}
              <div className="group relative rounded mb-30 overflow-hidden md:w-1/2">
            <img src={prosImg} alt="" className="w-full h-60 object-cover object-center" />
            <p className="text-blue-600 mb-4 mt-4 font-bold text-sm">04/02/2021</p>
            <h3 className="text-lg font-bold text-slate-950 mb-5">Pros and Cons of Outsourcing IT Support</h3>
            <div className="group">
            <h4 className="text-slate-950 text-lg">Learn more</h4>
           <div className="mx-0 w-20 group-hover:border-b-2 group-hover:border-sky-500"> </div>
            </div>
            </div>
            
             
           </div>
    </div>
    </section>
  )
}

export default BlogSectionThree