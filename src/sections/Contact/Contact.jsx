
import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

function Contact() {
  const formRef = useRef();
 const [status, setStatus] = useState('');


  const sendEmail = (e) => {
  e.preventDefault(); // Prevents page reload

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,   // Replace with your actual template ID
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY     // Replace with your actual public key
    )
    .then(() => {
      setStatus('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus('Failed to send message. Please try again.');
    });
};
  return (
    <section id="contact" className="flex flex-col items-center text-center text-[var(--text-color)] py-10 px-4 md:px-8 lg:px-16 ">
    <div className="w-1/3 h-1/3 ml-3 md:w-full md:max-w-7xl md:bg-[var(--background-color)] md:border border-[var(--text-color)] rounded-3xl md:p-8  ">
      <h1 className="sectionTitle mb-10">Contact</h1>
     
      {/* Use flex-col for small screens, flex-row for larger screens */}
      <div className="flex flex-col gap-8 mb-10 md:w-full md:flex-row md:justify-between">
        {/* About Me Section */}
        <div className="bg-[var(--background-color)] border border-[var(--text-color)] rounded-2xl p-4 sm:p-5 shadow-md md:w-[48%] sm:w-[24%] mx-auto">
          <h2 className="mb-4 text-[var(--text-color)] text-lg sm:text-xl">About Me</h2>
          <p className="text-left text-[var(--text-color)] leading-relaxed">
          Over the past two years, I’ve worked on a range of projects—from full-stack web applications to Python automation scripts. I’m passionate about creating intuitive, scalable, and user-focused digital solutions. Whether it’s designing clean interfaces or building efficient backend systems, I thrive on solving real-world problems with technology. I’m always eager to explore new tools and technologies and contribute to impactful projects.</p>
        </div>

        {/* Contact Information Section */}
        <div className="bg-[var(--background-color)] border border-[var(--text-color)] rounded-2xl p-4  shadow-md md:w-[48%]  mx-auto">
          <h2 className="mb-4 text-[var(--text-color)] text-lg sm:text-xl">Contact Information</h2>
          <ul className="list-none p-0 text-left leading-relaxed">
            <li className="mb-2 text-[var(--text-color)] text-lg sm:text-xl"><FiMail className="inline mr-2" />Mail: sagardebnath1001@gmail.com</li>
            <li className="mb-2 text-[var(--text-color)] text-lg sm:text-xl"><FiPhone className="inline mr-2" />Phone: 9383270893</li>
            <li className="text-[var(--text-color)] text-lg sm:text-xl"><FiMapPin className="inline mr-2" />Location: Agartala, Tripura/India</li>
          </ul>
        </div>
      </div>

      {/* Contact Form */}
      <form  ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-8 md:gap-10  focus:ring-2 focus:ring-[var(--btn-color)] outline-none">
        <h2 className="mb-5 text-[var(--text-color)]">Get in Touch</h2>

        {/* Name Input */}
        <div className="flex flex-col items-center">
          <label htmlFor="name" hidden>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="h-12 px-4 w-64 md:w-[600px] lg:w-[800px] rounded-2xl border border-gray-400 bg-[var(--background-color)] text-[var(--form-text-color)] placeholder-[var(--form-text-color)]"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col items-center">
          <label htmlFor="email" hidden>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="h-12 px-4 w-64 md:w-[600px] lg:w-[800px] rounded-2xl border border-gray-400 bg-[var(--background-color)] text-[var(--form-text-color)] placeholder-[var(--form-text-color)]"
          />
        </div>

        {/* Message Input */}
        <div className="flex flex-col items-center">
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            className="h-64 p-4 w-64 md:w-[600px] lg:w-[800px] rounded-2xl border border-gray-400 bg-[var(--background-color)] text-[var(--form-text-color)] placeholder-[var(--form-text-color)] resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[var(--btn-color)] text-[var(--btn-text-color)] rounded-2xl w-32 h-12 text-lg font-bold shadow-md transition-transform duration-200 transform hover:scale-105 active:translate-y-0.5 mx-auto"
        >
          Submit
        </button>
        {status && (
          <p className={`text-center mt-2 ${status.includes('fail') ? 'text-red-500' : 'text-green-500'}`}>
            {status}
          </p>
        )}
      </form>
      </div>
    </section>
  );
}

export default Contact;
