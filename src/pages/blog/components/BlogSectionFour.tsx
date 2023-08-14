import cloudImg from '../../../assets/images/cloudImg.png'
import cenroImg from '../../../assets/images/cenroImg.png'
import wareImg from '../../../assets/images/wareImg.png'

const BlogSectionFour = () => {
  return (
    <section id='blogSection'>
      <div className="container mx-auto justify-center items-center max-w-7xl p-6 space-y-6">

      {/* image flex container */}
      <div className="item-container inline-block cursor-pointer">
                {/* image 1 */}
            <div className="group relative rounded mb-30 overflow-hidden md:w-1/2">
            <img src={cloudImg} alt="" className="w-full h-60 object-cover object-center" />
            <p className="text-blue-600 mb-4 mt-4 font-bold text-sm">02/02/2021</p>
            <h3 className="text-lg font-bold text-slate-950 mb-5">Private Cloud vs Public Cloud</h3>
            <div className="group">
            <h4 className="text-slate-950 text-lg">Learn more</h4>
           <div className="mx-0 w-20 group-hover:border-b-2 group-hover:border-sky-500"> </div>
            </div>
            </div>
            
              {/* image 2 */}
              <div className="group relative rounded mb-30 overflow-hidden md:w-1/2">
            <img src={cenroImg} alt="" className="w-full h-60 object-cover object-center" />
            <p className="text-blue-600 mb-4 mt-4 font-bold text-sm">01/02/2021</p>
            <h3 className="text-lg font-bold text-slate-950 mb-5">Censornet: Control where your company data goes with CASB</h3>
            <div className="group">
            <h4 className="text-slate-950 text-lg">Learn more</h4>
           <div className="mx-0 w-20 group-hover:border-b-2 group-hover:border-sky-500"> </div>
            </div>
            </div>
            
              {/* image 3 */}
              <div className="group relative rounded mb-30 overflow-hidden md:w-1/2">
            <img src={wareImg} alt="" className="w-full h-60 object-cover object-center" />
            <p className="text-blue-600 mb-4 mt-4 font-bold text-sm">01/02/2021</p>
            <h3 className="text-lg font-bold text-slate-950 mb-5">Anti-Ransomware Protection for Business</h3>
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

export default BlogSectionFour