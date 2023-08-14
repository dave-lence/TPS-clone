import { Link } from "react-router-dom";

const DisasterContactDetails = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-slate-0">
      <div className="px-6 md:px-10">
        <h3 className="text-3xl sm:text-[2rem] font-bold pb-7 md:text-[2.65rem] text-primary-dark">
          Get in Touch
        </h3>
      </div>
      <div className="flex flex-wrap md:items-center w-full">
        {/* form */}
        <div className="w-full lg:w-1/2 lg:px-10">
          <form className="pt-7 max-w-full text-left my-4">
            <div className="w-full">
              {formInput.map((item, index) => {
                const { label, type } = item;
                return (
                  <div className="flex px-6 md:px-0 flex-col flex-wrap lg:flex-row lg:items-center gap-2 mb-6 w-full">
                    <label
                      htmlFor=""
                      className="inline-block w-36 text-base font-normal text-primary-dark"
                    >
                      {label}
                      <span className="text-primary100 ml-2">*</span>
                    </label>
                    <div className="grow">
                      <input
                        type={type}
                        className="bg-light border-2 border-input rounded-full outline-0 px-7 h-12 w-full"
                        id=""
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </form>
        </div>

        {/* apachte */}
        <div className="flex px-6 md:px-0 flex-col md:flex-row lg:block w-full lg:w-1/2 mb-5 lg:mb-0 xl:pr-7">
          <div className="flex flex-col mb-4">
            <label htmlFor="" className="inline-block w-full">
              Message
              <span className="text-primary100 ml-2">*</span>
            </label>
            <div className="grow mt-3">
              <textarea className="w-full p-7 bg-light outline-0 border-2 border-input rounded h-40"></textarea>
            </div>
          </div>
          <div className="flex w-full my-6">
            <input type="checkbox" className="checkbox mr-2" />{" "}
            {" "}<label htmlFor="" className="ml-6">
              I agree to the{" "}
              <Link to="/terms" className="text-primary100 font-medium">
                Data Terms & Conditions*
              </Link>
            </label>
          </div>
          <div className="mt-4">
            <input
              type="submit"
              value="Submit"
              className="inline-block w-52 py-3 md:px-14 border-2 border-primary100 rounded-full cursor-pointer text-center bg-light hover:bg-primary100 hover:text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisasterContactDetails;

const address = [
  {
    city: "Oxford",
    tel: "+44 1367 700 555",
    text1: "Faringdon Business Centre,",
    text2: "Brunel House,",
    text3: "Volunteer Way.",
    text4: "SN7 7YR",
  },
  {
    city: "Birmingham",
    tel: "+44 1217 591 000",
    text1: "Izabella House,",
    text2: "Regeant Place,",
    text3: "Birmingham,",
    text4: "B1 3NJ",
  },
];

const formInput = [
  {
    label: "First Name",
    type: "text",
  },
  {
    label: "Last Name",
    type: "text",
  },
  {
    label: "Email Address",
    type: "email",
  },
  {
    label: "Phone Number",
    type: "number",
  },
  {
    label: "Company",
    type: "text",
  },
];
