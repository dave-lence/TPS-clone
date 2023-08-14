import typing from '../../../../../assets/images/typing.webp'

type Props = {}

const OldTechnology = (props: Props) => {
  return (
    <section className='relative overflow-hidden pt-4'>
      <div className="container">
        <div className="relative flex flex-col md:flex-row items-center md:items-stretch">
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="w-full md:aspect-square relative">
              <img src={typing} alt="printer" />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:flex md:flex-col md:pl-4 lg:pl-14">
            <h2 className="text-primary-dark mb-7 text-xl sm:text-2xl md:text-[2.5rem] font-bold title">
              What should you do with lots of old technology in the business?
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              Does it need to be disposed of, and how should that be done? What is stored on these old machines and do we still need it? Is there any value in what we have? Surely there must be, it was only purchased 3 (or was it 4!) years ago.
            </p>
            <p className='mb-6'>
              We get questions like this regularly, and we understand the challenge old, slow and outdated equipment presents.
            </p>
            <p className="mb-6">
              Talk with one of the CIS team and let us take a review of what equipment you have in place and how it can be replaced with technology that can take your business forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OldTechnology