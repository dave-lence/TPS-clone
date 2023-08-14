export default function Team() {
  const teamMembers = [
    {
      image:
        "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/Neil-Lawson-Smith.jpg",
      name: "Neill Lawson-Smith",
      position: "Founder & Managing Director",
    },
    {
      image:
        "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/Matt-Grantham.jpg",
      position: "Operations Director",
      name: "Matt Grantham",
    },
    {
      image:
        "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/Dan-Hadland.jpg",
      name: "Daniel Hadland",
      position: "Technology & Innovation Director",
    },
    {
      image:
        "https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/Ashley-Baker.jpg",
      position: "Finance Director",
      name: "Ashley Barker",
    },
  ];

  return (
    <section id="team">
      <div className="py-7 min-h-screen px-6 md:px-16">
        {/* headings */}
        <div className="space-y-3 text-left">
          <p className="text-xl text-black">Our Team</p>
          <p className="text-2xl font-extrabold md:text-4xl text-left">
            Meet CIS's Board of Directors
          </p>
        </div>

        {/* pictiures of team members */}
        <div className="flex flex-wrap mt-20 md:flex-nowrap md:flex-row md:space-x-5">
          {/* each picture */}

          {teamMembers.map((member, index) => (
            <div key={index} className=" md:w-1/4 m-3 w-5/12">
              <img
                alt=""
                nitro-lazy-src="https://cdn-adchm.nitrocdn.com/eZehlnEhyRUIGTheitFZhEcdCZwkLROW/assets/images/optimized/rev-e3547e4/wp-content/uploads/2020/04/Neil-Lawson-Smith.jpg"
                className=""
                decoding="async"
                nitro-lazy-empty=""
                src={member.image}
              />

              <div className="space-y-3 text-left my-5">
                <p className=" text-xl md:text-2xl font-bold">{member.name}</p>
                <p className="text-blue-600 text-sm md:text-lg ">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
