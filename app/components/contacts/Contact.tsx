import React from "react";
import { MdSimCardDownload } from "react-icons/md";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen h-fit bg-base-100 pl-14">
      <div className="w-full h-full p-10">
        <h1 className="text-3xl font-bold hover:text-accent py-5">
          Contact Me
        </h1>
        <div className="flex justify-center gap-20 max-md:gap-5 max-md:flex-wrap-reverse items-center">
          <ContactForm />
          <img
            alt="contact"
            src="/images/contact-me.png"
            className="size-[25%] max-md:size-[50%] mt-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
