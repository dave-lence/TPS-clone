import { Link } from "react-router-dom";
import { PiCaretRight } from 'react-icons/pi'

const ContactDetails = () => {
  return (
    <section className="py-20 w-[90%] mx-auto">
      <div className="flex flex-wrap w-full">
        <div className="flex flex-col md:flex-row lg:block w-full lg:w-1/3 mb-5 lg:mb-0 xl:pr-7">
          <div className="flex flex-wrap flex-row md:flex-col flex-1 p-10 sm:p-15 border border-primary100 rounded mb-5 md:mr-5 lg:mr-0">
            <div className="flex flex-col w-full sm-w-1/2 md:w-full">
              <h4 className="text-primary-dark text-2xl font-bold">Contact details</h4>
              <div className="mt-5">
                <a href="mailto:abc@yahoo.com" className="inline border-b pb-1 border-transparent hover:border-primary100">
                  solution@cisltd.com
                </a>
              </div>
            </div>
            <div className='mt-7'>
              {
                address.map((item, index) => {
                  const {city, tel, text1, text2, text3, text4 } = item;
                  return (
                    <div key={index} className='text-base mb-6'>
                      <p className="mb-1.5 text-[#04162c] text-lg">{city}</p>
                      <p className='mb-1.5 text-[#5b6879]'>{tel}</p>
                      <p className='leading-8 text-[#5b6879] mb-1.5'>
                        {text1}
                        <br />
                        {text2}
                        <br />
                        {text3}
                        <br />
                        {text4}
                      </p>
                      <p>
                        <Link to='/support'  className='inline text-primary-dark border-b-2 pb-2 border-primary100'>Get in touch</Link>
                      </p>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="flex flex-col flex-1 md:items-start p-7 sm:p-10 bg-primary100 rounded text-white">
            <h4 className="pb-4 text-2xl">Support Enquiry</h4>
            <p>
              Access remote support
            </p>
            <Link to="/support" className="inline-flex items-center mt-4 py-3 px-8 border-2 border-white rounded-full bg-primary100 hover:bg-[hsla(0,0%,98%,.2)] hover:border-transparent text-white">
              Remote support
              <span className="ml-5 text-lg">
                <PiCaretRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-2/3 lg: pl-10">
          <h3 className="text-3xl sm:text-[2rem] font-bold pb-7 md:text-[2.65rem] text-primary-dark">Get in Touch</h3>
          <p className="mb-10 text-gray-500">Complete the form and we'll get right back to you.</p>
          <form className="pt-7 max-w-full text-left my-4">
            <div className="w-full">
              {
                formInput.map((item, index) => {
                  const { label, type } = item;
                  return (
                    <div className="flex flex-col flex-wrap xs:flex-row items-center gap-2 mb-6 w-full">
                      <label htmlFor="" className='inline-block w-36 text-base font-normal text-primary-dark'>
                        {label}
                        <span className='text-primary100 ml-2'>*</span>
                      </label>
                      <div className="grow">
                        <input type={type} className="bg-light border-2 border-input rounded-full outline-0 px-7 h-12 w-full" id="" />
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="" className="inline-block w-full">
                Message
                <span className='text-primary100 ml-2'>*</span>
              </label>
              <div className="grow mt-3">
                <textarea className="w-full p-7 bg-light outline-0 border-2 border-input rounded h-40"></textarea>
              </div>
            </div>
            <div className='flex w-full my-6'>
              <input type="checkbox" className='checkbox mr-2' />
              <label htmlFor="" className='ml-6'>I agree to the <Link to='/terms' className='text-primary100 font-medium'>Data Terms & Conditions*</Link></label>
            </div>
            <div className='mt-4'>
              <input type="submit" value="Submit" className="inline-block w-52 md:py-3 md:px-14 border-2 border-primary100 rounded-full cursor-pointer text-center bg-light hover:bg-primary100 hover:text-white" />
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactDetails;

const address = [
  {
    city: 'Oxford',
    tel: '+44 1367 700 555',
    text1: 'Faringdon Business Centre,',
    text2: 'Brunel House,',
    text3: 'Volunteer Way.',
    text4: 'SN7 7YR'
  },
  {
    city: 'Birmingham',
    tel: '+44 1217 591 000',
    text1: 'Izabella House,',
    text2: 'Regeant Place,',
    text3: 'Birmingham,',
    text4: 'B1 3NJ',
  }
]

const formInput = [
  {
    label: 'First Name',
    type: 'text'
  },
  {
    label: 'Last Name',
    type: 'text'
  },
  {
    label: 'Email Address',
    type: 'email'
  },
  {
    label: 'Phone Number',
    type: 'number'
  },
  {
    label: 'Company',
    type: 'text'
  }
]