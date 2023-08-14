import React from "react";

export default function CommunicationBlog() {

    const reatedBlog = [
        {
          date:"09/12/2018",
          image:"https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/pexels-photo-1927574-1024x943.jpeg",
          description: "Anywhere, Anytime, Any Device: Staying Connected with VoIP technology."
        },
        {
          date:"16/07/2019",
          image:"https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/fiber-4814456_1920-1024x683.jpg",
          description: "Always Accessible: Choosing a VoIP Provider"
        },
     


    ]

  return (
    <section id="related-blog" className="min-h-screen px-6 md:px-10 py-7">
      <h1 className="text-left tex-3xl md:text-5xl mb-10 md:mb-20 font-bold text-black">
        Related Blogs
      </h1>

      <div className="flex mx-auto flex-col md:grid md:grid-cols-3 md:gap-4 space-y-8 md:space-x-5 md:space-y-0">
        {/* content */}

     {reatedBlog.map((blog, index) => (
     <div key={index} className="space-y-4 cursor-pointer">
     <img
       alt=""
       src={blog.image}
       className="h-72 w-full hover:scale-105 hover:border-b-4 hover:border-blue-400  duration-500"
     />
     <div className="">
       <p className="text-blue-400">{blog.date}</p>
       <p className="text-xl my-5 font-bold text-black">
         {blog.description}
       </p>
       <a className="border-b-2 hover:border-b-0 duration-200 border-blue-400" href="https://">
         Learn more
       </a>
     </div>
   </div>    

     ))}
         
      </div>
      <button className="px-8 py-3 mt-10 rounded-full bg-transparent border-2 border-primary100 text-black font-normal text-lg hover:bg-primary100 hover:text-white hover:transition-colors hover:duration-300">
          Read more news
        </button>
    </section>
  );
}

