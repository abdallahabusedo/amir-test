export default function Newsletter() {
  const handleSendingEmail = (e: any) => {
    e.preventDefault(); // Prevent the form from submitting normally

    // Gather form data
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Construct the mailto URL
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone Number: ${phone}%0D%0AMessage: ${message}`
    );

    const mailtoUrl = `mailto:techno.hive@gmail.com?subject=${subject}&body=${body}`;

    // Open the default email client
    window.location.href = mailtoUrl;
  };
  return (
    <section
      id="contact-us"
      className="py-12 text-gray-200 bg-gray-900 contact-us-section"
    >
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="pb-12 text-center md:pb-20">
          <h2 className="mb-4 h2">Get in Touch</h2>
          <p className="text-xl text-gray-400">
            We'd love to hear from you. Whether you have a question about our
            services, pricing, or anything else, our team is ready to answer all
            your questions.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 ">
          <form
            onSubmit={handleSendingEmail}
            className="w-full mx-auto lg:w-1/3"
          >
            <div className="flex flex-col mb-4">
              <label className="mb-1 text-sm font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 mb-2 text-white placeholder-purple-400 bg-purple-700 border border-purple-500 rounded-sm appearance-none focus:border-purple-300"
                placeholder="Your name"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-1 text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 mb-2 text-white placeholder-purple-400 bg-purple-700 border border-purple-500 rounded-sm appearance-none focus:border-purple-300"
                placeholder="Your best email…"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-1 text-sm font-medium" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 mb-2 text-white placeholder-purple-400 bg-purple-700 border border-purple-500 rounded-sm appearance-none focus:border-purple-300"
                placeholder="Your phone number"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-1 text-sm font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                // rows="4"
                className="w-full px-4 py-3 mb-2 text-white placeholder-purple-400 bg-purple-700 border border-purple-500 rounded-sm appearance-none focus:border-purple-300"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <div className="flex flex-col justify-center max-w-xs mx-auto sm:flex-row ">
              <button
                type="submit"
                className="w-full px-4 py-3 mb-2 text-purple-600 bg-purple-100 shadow btn hover:bg-white sm:mb-0 sm:mr-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
