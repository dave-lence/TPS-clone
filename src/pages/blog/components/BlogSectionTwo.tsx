import guide from '../../../assets/images/guide.png'
import blog4 from '../../../assets/images/blog4.png'
import blog3 from '../../../assets/images/blog3.png'

const BlogSectionTwo = () => {
  return (
    <section id='blogSection'>
      <div className="container mx-auto justify-center items-center max-w-7xl p-6 space-y-6">

      {/* image flex container */}
      <div className="item-container inline-block cursor-pointer">
                {/* image 1 */}
            <div className="group relative rounded mb-30 overflow-hidden md:w-1/2">
            <img src={guide} alt="" className="w-full h-60 object-cover object-center" />
            <p className="text-blue-600 mb-4 mt-4 font-bold text-sm">17/02/2021</p>
            <h3 className="text-lg font-bold text-slate-950 mb-5">A Guide To VOIP Technology</h3>
            <div className="group">
            <h4 className="text-slate-950 text-lg">Learn more</h4>
           <div className="mx-0 w-20 group-hover:border-b-2 group-hover:border-sky-500"> </div>
            </div>
            </div>
            
              {/* image 2 */}
              <div className="group relative rounded mb-30 overflow-hidden md:w-1/2">
            <img src={blog4} alt="" className="w-full h-60 object-cover object-center" />
            <p className="text-blue-600 mb-4 mt-4 font-bold text-sm">17/02/2021</p>
            <h3 className="text-lg font-bold text-slate-950 mb-5">Disaster Recovery Plan Guidelines</h3>
            <div className="group">
            <h4 className="text-slate-950 text-lg">Learn more</h4>
           <div className="mx-0 w-20 group-hover:border-b-2 group-hover:border-sky-500"> </div>
            </div>
            </div>
            
              {/* image 3 */}
              <div className="group relative rounded mb-30 overflow-hidden md:w-1/2">
            <img src={blog3} alt="" className="w-full h-60 object-cover object-center" />
            <p className="text-blue-600 mb-4 mt-4 font-bold text-sm">17/02/2021</p>
            <h3 className="text-lg font-bold text-slate-950 mb-5">Best Office Communication Systems</h3>
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

export default BlogSectionTwo