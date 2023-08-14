

export default function BannerInfo() {
  return (
    <section id="banner">
        <div className="px-6 p-10 my-10 mb-20">
            <div className="bg-blue-400 shadow-xl  rounded py-20 px-10 text-white text-left space-y-7">
                <p className="text-black mb-7 text-xl">
                    Careers
                </p>
                <div className="space-y-3">
                    <p className="font-bold text-3xl">We’re always on the lookout for fresh talent. Come and join our team.</p>
                    <p className="text-xl">Interested in IT and fancy a new challenge? Check out CIS's latest Job vacancies.</p>
                </div>

                <div className="border-2 text-center border-white w-44 py-2 rounded-full cursor-pointer duration-200 hover:border-blue-500 hover:bg-blue-500">
                 Join us                    
                </div>
            </div>
        </div>
    </section>
  )
}
