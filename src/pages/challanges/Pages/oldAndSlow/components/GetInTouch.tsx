import { Link } from 'react-router-dom'

type Props = {}

const GetInTouch = (props: Props) => {
  return (
    <section id='get-in-touch mt-16 mb-10'>
      <div className="container">
        <h2 className="text-primary-dark mb-10 text-xl sm:text-2xl md:text-[2.5rem] font-bold">
          Get in touch
        </h2>
        <div className="max-w-full my-4">
          <form action="">
            <div className="flex flex-col lg:flex-row">
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
              <div className="w-full lg:ml-10">
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
                  <label htmlFor="" className='ml-8'>I agree to the <Link to='/terms' className='text-primary100 font-medium'>Data Terms & Conditions*</Link></label>
                </div>
                <div className='mt-4 flex justify-end'>
                  <input type="submit" value="Submit" className="inline-block w-52 md:py-3 md:px-14 border-2 border-primary100 rounded-full cursor-pointer text-center bg-light hover:bg-primary100 hover:text-white" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch

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