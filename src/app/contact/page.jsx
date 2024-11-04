import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-12 px-4 md:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
          <p className="text-center text-gray-600 mb-8">
            Feel free to reach out if you have any questions or would like to
            collaborate!
          </p>

          <form className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700 mb-1"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700 mb-1"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-700 mb-1"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
