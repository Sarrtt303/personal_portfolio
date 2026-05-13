import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus(
          "Failed to send message. Please try again.",
        );
      });
  };

  return (
    <section
      id="contact"
      className="
        relative
        px-4
        py-24
        md:px-8
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[2rem]
          border
          border-[var(--border-color)]
          bg-[var(--background-color)]
          shadow-xl
        "
      >
        <div className="grid lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div
            className="
              flex
              flex-col
              justify-between
              border-b
              border-[var(--border-color)]
              p-8
              md:p-12
              lg:border-b-0
              lg:border-r
            "
          >
            <div>
              <span
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-custom-orange
                "
              >
                Contact
              </span>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-bold
                  leading-tight
                  text-[var(--text-color)]
                  md:text-5xl
                "
              >
                Let’s build
                <br />
                something great.
              </h2>

              <p
                className="
                  mt-6
                  max-w-lg
                  text-base
                  leading-relaxed
                  text-[var(--text-color)]
                  opacity-80
                "
              >
                Available for freelance projects,
                collaborations, and full-stack
                development opportunities.
              </p>
            </div>

            {/* CONTACT INFO */}
            <div className="mt-12 space-y-5">
              <div
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-[var(--border-color)]
                  p-4
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-custom-orange/10
                    text-custom-orange
                  "
                >
                  <FiMail size={20} />
                </div>

                <div>
                  <p className="text-sm opacity-60">
                    Email
                  </p>
                  <p className="font-medium">
                    sagardebnath1001@gmail.com
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-[var(--border-color)]
                  p-4
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-custom-orange/10
                    text-custom-orange
                  "
                >
                  <FiPhone size={20} />
                </div>

                <div>
                  <p className="text-sm opacity-60">
                    Phone
                  </p>
                  <p className="font-medium">
                    +91 9383270893
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-[var(--border-color)]
                  p-4
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-custom-orange/10
                    text-custom-orange
                  "
                >
                  <FiMapPin size={20} />
                </div>

                <div>
                  <p className="text-sm opacity-60">
                    Location
                  </p>
                  <p className="font-medium">
                    Agartala, Tripura, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h3
                className="
                  text-2xl
                  font-bold
                  text-[var(--text-color)]
                "
              >
                Send a message
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  text-[var(--text-color)]
                  opacity-70
                "
              >
                I’ll get back to you as soon as
                possible.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-[var(--text-color)]
                  "
                >
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-[var(--border-color)]
                    bg-transparent
                    px-5
                    outline-none
                    transition
                    focus:border-custom-orange
                  "
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-[var(--text-color)]
                  "
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@email.com"
                  required
                  className="
                    h-14
                    w-full
                    rounded-2xl
                    border
                    border-[var(--border-color)]
                    bg-transparent
                    px-5
                    outline-none
                    transition
                    focus:border-custom-orange
                  "
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-[var(--text-color)]
                  "
                >
                  Message
                </label>

                <textarea
                  name="message"
                  id="message"
                  placeholder="Tell me about your project..."
                  required
                  className="
                    min-h-[180px]
                    w-full
                    rounded-2xl
                    border
                    border-[var(--border-color)]
                    bg-transparent
                    p-5
                    outline-none
                    resize-none
                    transition
                    focus:border-custom-orange
                  "
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-custom-orange
                  px-7
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-lg
                "
              >
                Send Message
                <FiSend size={18} />
              </button>

              {/* STATUS */}
              {status && (
                <p
                  className={`text-sm font-medium ${
                    status.includes("Failed")
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;