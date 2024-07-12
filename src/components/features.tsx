export default function Features() {
  const features = [
    {
      title: "UI/UX Design",
      description:
        "Crafting intuitive and engaging user experiences with a focus on modern, innovative design principles.",
      icon: "https://img.icons8.com/ios/100/windows10-personalization.png",
    },
    {
      title: "Web Development",
      description:
        "Developing responsive and robust websites tailored to meet your business needs and drive growth.",
      icon: "https://img.icons8.com/pastel-glyph/64/web-apps--v2.png",
    },
    {
      title: "Mobile Development",
      description:
        "Creating high-performance mobile applications for both iOS and Android platforms to enhance user engagement.",
      icon: "https://img.icons8.com/external-prettycons-lineal-prettycons/49/external-mobile-development-ui-mobile-prettycons-lineal-prettycons.png",
    },
    {
      title: "DevOps & Cloud",
      description:
        "Implementing efficient DevOps practices and leveraging cloud solutions to ensure seamless operations and scalability.",
      icon: "https://img.icons8.com/dotty/80/cloud.png",
    },
    {
      title: "Testing & QA",
      description:
        "Ensuring the highest quality of your products with comprehensive testing and quality assurance services.",
      icon: "https://img.icons8.com/external-goofy-line-kerismaker/96/external-Testing-science-goofy-line-kerismaker.png",
    },
    {
      title: "Machine Learning & AI",
      description:
        "Leveraging advanced machine learning techniques to deliver intelligent solutions that drive innovation.",
      icon: "https://img.icons8.com/pastel-glyph/64/brain-3--v1.png",
    },
  ];

  return (
    <section id="our-services">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2">Why Choose Technohive</h2>
            <p className="text-xl text-gray-400">
              We specialize in building exceptional websites and mobile apps
              that drive your business forward with innovative UI/UX design and
              cutting-edge technology solutions.
            </p>
          </div>

          {/* Items */}
          <div
            className="grid items-start max-w-sm gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center "
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                {/* <img className="w-16 h-16 mb-4" src={feature.icon} alt="" /> */}
                <div className="flex items-center justify-center w-32 h-32 p-8 mb-4 bg-purple-600 rounded-full">
                  <img
                    width="100"
                    height="100"
                    src={feature.icon}
                    alt=""
                    className=""
                  />
                </div>
                <h4 className="mb-2 h4">{feature.title}</h4>
                <p className="text-lg text-center text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}

            {/* <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="text-purple-600 fill-current"
                  width="64"
                  height="64"
                  rx="32"
                />
                <g
                  transform="translate(21 22)"
                  strokeLinecap="square"
                  strokeWidth="2"
                  fill="none"
                  fillRule="evenodd"
                >
                  <path
                    className="text-purple-300 stroke-current"
                    d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"
                  />
                  <circle
                    className="text-purple-300 stroke-current"
                    cx="17"
                    cy="5"
                    r="3"
                  />
                  <path
                    className="text-purple-100 stroke-current"
                    d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"
                  />
                </g>
              </svg>
              <h4 className="mb-2 h4">Instant Features</h4>
              <p className="text-lg text-center text-gray-400">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
