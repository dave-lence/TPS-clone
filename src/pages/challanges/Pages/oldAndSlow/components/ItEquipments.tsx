import printer from "../../../../../assets/images/printer.webp"

type Props = {}

const ItEquipments = (props: Props) => {
  return (
    <section className='relative overflow-hidden pt-20'>
      <div className="container">
        <div className="relative flex flex-col md:flex-row items-center md:items-stretch">
          <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-14 lg:pl-24 order-2">
            <div className="w-full md:aspect-square relative">
              <img src={printer} alt="printer" />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:flex md:flex-col order-1">
            <h2 className="text-primary-dark mb-7 text-xl sm:text-2xl md:text-[2rem] font-bold title">
              Does your IT equipment satisfy your business needs?
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              No, we are not talking about the receptionist who has been with you for 25 years, but all of the old IT equipment that seems to hang around the office and in cupboards and never get chucked out!
            </p>
            <p>
              ‘Can that still be used’ is one of the most common questions we get asked and we understand why. It seems like there is a never-ending list of new machines and devices to buy and yet the old bits of kit tend to hang around like a bad smell.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ItEquipments