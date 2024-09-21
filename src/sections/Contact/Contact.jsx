function Contact() {
  return (
    <section id="contact" className="flex flex-col text-center text-[var(--text-color)] mt-10 mb-10">
      <h1 className="sectionTitle">Contact</h1>
      
      <div className="flex flex-col gap-8 mb-10 md:flex-row md:justify-between md:gap-10">
        <div className="bg-[var(--background-color)] border border-[var(--text-color)] rounded-2xl p-5 shadow-md flex-1">
          <h2 className="mb-4 text-[var(--text-color)]">About Me</h2>
          <p className="text-left text-[var(--text-color)]">
           Over the past two years, I have honed my skills by working on a variety of projects, from building full-stack applications to crafting Python scripts for automation and learning. My journey in web development is driven by curiosity and a commitment to continuous learning. Whether it is designing intuitive user interfaces or building robust backend systems, I enjoy turning ideas into functional and visually appealing solutions. I am eager to bring my technical expertise and creativity to new challenges.
          </p>
        </div>
        
        <div className="bg-[var(--background-color)] border border-[var(--text-color)] rounded-2xl p-5 shadow-md flex-1">
          <h2 className="mb-4 text-[var(--text-color)]">Contact Information</h2>
          <ul className="list-none p-0 text-left">
            <li className="mb-2 text-[var(--text-color)] text-2xl">Email: sagardebnath1001@gmail.com</li>
            <li className="mb-2 text-[var(--text-color)] text-2xl">Phone: 9383270893</li>
            <li className="text-[var(--text-color)] text-2xl">Location: Agartala, Tripura/India</li>
          </ul>
        </div>
      </div>

      <form className="flex flex-col gap-8 md:gap-10">
        <h2 className="mb-5 text-[var(--text-color)]">Get in Touch</h2>
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
        <button
          type="submit"
          className="bg-[var(--btn-color)] text-[var(--btn-text-color)] rounded-2xl w-32 h-12 text-lg font-bold shadow-md transition-transform duration-200 transform hover:scale-105 active:translate-y-0.5 mx-auto"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
