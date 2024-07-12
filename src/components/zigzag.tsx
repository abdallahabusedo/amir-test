import Image from "next/image";

export default function Zigzag() {
  const stages = [
    {
      title: "Discover",
      wiseTitle: "Understanding Your Needs",
      description:
        "We begin by understanding your business goals, target audience, and project requirements to ensure a clear vision.",
      icon: "/images/Webinar-cuate.png",
      features: [
        "Conduct in-depth research",
        "Identify key objectives",
        "Create a detailed project brief",
      ],
    },
    {
      title: "Design",
      wiseTitle: "Crafting the Vision",
      description:
        "Our creative team designs intuitive and engaging user interfaces that align with your brand and objectives.",
      icon: "/images/Website Creator-bro.png",
      features: [
        "Develop wireframes and mockups",
        "Focus on user experience (UX)",
        "Ensure brand consistency",
      ],
    },
    {
      title: "Develop",
      wiseTitle: "Building the Product",
      description:
        "We transform designs into functional digital products using the latest technologies and best practices.",
      icon: "/images/Programming-amico.png",
      features: [
        "Write clean, efficient code",
        "Integrate with backend systems",
        "Optimize for performance",
      ],
    },
    {
      title: "Deliver",
      wiseTitle: "Launching to the World",
      description:
        "We rigorously test and refine the product before launching it, ensuring a seamless and successful deployment.",
      icon: "/images/Good team-pana.png",
      features: [
        "Conduct thorough testing",
        "Deploy to production",
        "Provide post-launch support",
      ],
    },
  ];

  return (
    <section id="flow">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 border-t border-gray-800 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-16">
            <div className="inline-flex px-3 py-1 m-2 mb-4 text-sm font-semibold text-green-600 bg-green-200 rounded-full">
              Reach goals that matter
            </div>
            <h1 className="mb-4 h3">
              A brief introduction to explain your process
            </h1>
            <p className="text-xl text-gray-400">
              Our proven process ensures the highest quality and efficiency for
              your digital projects.
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {stages.map((stage, index) => (
              <div
                className="items-center md:grid md:grid-cols-12 md:gap-6"
                key={index}
              >
                <div
                  className={`max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 
                    ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                  data-aos="fade-up"
                >
                  {/* // className="max-w-xl mx-auto mb-8 md:max-w-none md:w-full md:col-span-5 lg:col-span-6 md:mb-0 rtl" */}
                  <Image
                    className="h-auto max-w-full mx-auto "
                    src={stage.icon}
                    width={540}
                    height={405}
                    alt="Features 01"
                  />
                </div>
                <div
                  className={`max-w-xl mx-auto md:max-w-none md:w-full md:col-span-7 lg:col-span-6 ${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                  data-aos="fade-right"
                >
                  <div className="md:pr-4 lg:pr-12 xl:pr-16">
                    <div className="mb-2 text-xl text-purple-600 font-architects-daughter">
                      {stage.wiseTitle}
                    </div>
                    <h3 className="mb-3 h3">{stage.title}</h3>
                    <p className="mb-4 text-xl text-gray-400">
                      {stage.description}
                    </p>
                    <ul className="-mb-2 text-lg text-gray-400">
                      {stage.features.map((feature, idx) => (
                        <li className="flex items-center mb-2" key={idx}>
                          <svg
                            className="w-3 h-3 mr-2 text-green-500 fill-current shrink-0"
                            viewBox="0 0 12 12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
