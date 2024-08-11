import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section>
      <form name="contact-form">
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3 mt-2">
            <label
              htmlFor="first-name"
              className="block text-base font-semibold leading-6 text-base-content"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-accent-content bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-3 mt-2">
            <label
              htmlFor="last-name"
              className="block text-base font-semibold leading-6 text-base-content"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                placeholder="Last name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-accent-content bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-2 mt-2">
          <label
            htmlFor="email"
            className="block text-base font-semibold leading-6 text-base-content"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="contact@mail.com"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-accent-content bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
              required
            />
          </div>
        </div>
        <div className="sm:col-span-2 mt-2">
          <label
            htmlFor="subject"
            className="block text-base font-semibold leading-6 text-base-content"
          >
            Subject
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="subject"
              id="subject"
              autoComplete="subject"
              placeholder="Write your subject"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-accent-content bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
              required
            />
          </div>
        </div>
        <div className="sm:col-span-2 mt-2">
          <label
            htmlFor="message"
            className="block text-base font-semibold leading-6 text-base-content"
          >
            Message
          </label>
          <div className="mt-1">
            <textarea
              name="message"
              id="message"
              rows={4}
              placeholder="Write your message"
              className="resize-none block w-full rounded-md border-0 px-3.5 py-2 text-base text-accent-content bg-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="sm:col-span-2 flex 0 justify-center mt-5">
          <button
            type="submit"
            value="submit"
            id="submit"
            className="mt-2 btn h-[1rem] w-[10rem] btn-warning text-warning-content hover:text-primary-content hover:bg-primary border-0 ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-300"
          >
            <span className="text-base">Send Message</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
