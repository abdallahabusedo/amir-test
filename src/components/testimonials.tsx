import Image from "next/image";

import TestimonialImage01 from "@/public/images/testimonial-01.jpg";
import TestimonialImage02 from "@/public/images/testimonial-02.jpg";
import TestimonialImage03 from "@/public/images/testimonial-03.jpg";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO",
      company: "Tech Innovators",
      feedback:
        "Technohive transformed our digital presence with their exceptional web development and design services. Our traffic and engagement have skyrocketed!",
      photo: TestimonialImage01, // Placeholder image URL
    },
    {
      name: "Jane Smith",
      title: "Marketing Director",
      company: "Creative Solutions",
      feedback:
        "The team at Technohive is incredibly talented and professional. They delivered our mobile app on time and exceeded our expectations.",
      photo: TestimonialImage02, // Placeholder image URL
    },
    {
      name: "Emily Johnson",
      title: "Product Manager",
      company: "NextGen Tech",
      feedback:
        "Our collaboration with Technohive was seamless and productive. Their UI/UX design expertise truly stands out.",
      photo: TestimonialImage03, // Placeholder image URL
    },
  ];
  return (
    <section id="testimonials">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 border-t border-gray-800 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="mb-4 h2">Don't take our word for it</h2>
            <p className="text-xl text-gray-400">
              Discover the experiences and success stories of our satisfied
              clients.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid items-start max-w-sm gap-8 mx-auto lg:grid-cols-3 lg:gap-6 lg:max-w-none">
            {testimonials.map((testimonial, index) => (
              <div
                className="flex flex-col h-full p-6 bg-gray-800"
                data-aos="fade-up"
                key={index}
                data-aos-delay={index * 200}
              >
                <div>
                  <div className="relative inline-flex flex-col mb-4">
                    <Image
                      className="rounded-full"
                      src={testimonial.photo}
                      width={48}
                      height={48}
                      alt={`Testimonial ${index + 1}`}
                    />
                    <svg
                      className="absolute top-0 right-0 w-6 h-5 -mr-3 text-purple-600 fill-current"
                      viewBox="0 0 24 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                  </div>
                </div>
                <blockquote className="text-lg text-gray-400 grow">
                  — {testimonial.feedback}
                </blockquote>
                <div className="pt-5 mt-6 font-medium text-gray-700 border-t border-gray-700">
                  <cite className="not-italic text-gray-200">
                    {testimonial.name}
                  </cite>{" "}
                  -{" "}
                  <a
                    className="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
                    href="#0"
                  >
                    {testimonial.company}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
