import React from "react";

export default function ExploreServices() {
  return (
    <section id="expore-services">
      <div className="px-6 py-10 md:px-10">
        {/* heading and top info */}
        <div className="space-y-5 text-left">
          <h1 className="text-black font-bold text-3xl w-96">
            Explore our cloud services below
          </h1>
          <p className="text-gray-600">
            At CiS we work very closely with our clients, ensuring they have the
            cloud services that they need to achieve their business goals, as
            well as providing excellent ongoing support.
          </p>
        </div>

        {/* service items */}
        <div className="grid mt-20 gap-4 md:grid-cols-3">
          {/* item 1 */}
          <div className="border-2 space-y-5 border-blue-100 p-10 rounded">
            <h1 className="text-black text-2xl font-semibold">
              Private cloud managed solutions
            </h1>
            <p className="text-gray-500 text-left">
              If your business requires a secure cloud solution, then the
              private cloud is an ideal option. This offers similar capabilities
              to public cloud solutions such as Amazon Web Services, Microsoft
              Azure and the Google Cloud Platform but through a private internal
              network. With managed cloud services, the private system is
              managed, configured and maintained by the team at CiS and is an
              ideal option if an organisation does not have an internal IT team.
            </p>
          </div>

          {/* item 2 */}
          <div className="border-2 space-y-5 border-blue-100 p-10 rounded">
            <h1 className="text-black text-2xl font-semibold">
              Microsoft 365 for Business
            </h1>
            <p className="text-gray-500 text-left">
              This is a convenient package which offers everything you would
              traditionally have on a desktop (e.g., Outlook, Word, Excel,
              PowerPoint) but as a cloud-based service meaning in the current
              remote working environment everything is accessible with an active
              internet connection. This is offered as a subscription service,
              and subscribers only pay for the services they actually use,
              meaning it is more cost effective, as well as meaning the service
              can grow at the same pace as your business.
            </p>
          </div>

          {/* item 3 */}
          <div className="border-2 space-y-5 border-blue-100 p-10 rounded">
            <h1 className="text-black text-2xl font-semibold">
              Infrastructure as a Service
            </h1>
            <p className="text-gray-500 text-left">
              In a world where we require our cloud services to be available
              24/7 more people are turning to Infrastructure as a Service (IaaS)
              to help achieve this. Infrastructure as a Service (IaaS) enables
              organisations to access hardware required for storage, networking
              components, servers and operations over the internet rather than
              needing to invest in purchasing the hardware in-house.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
