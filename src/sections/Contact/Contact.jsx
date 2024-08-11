import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      
      <div className={styles.contactContent}>
        <div className={styles.aboutSection}>
          <h2>About Me</h2>
          <p>
            Hello, my name is Sagar Debnath. I am currently pursuing B.Tech. I believe in learning and working, to create value for others and contributing to society 
          </p>
        </div>
        
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          <ul>
            <li>Email: sagardebnath1001@gmail.com</li>
            <li>Phone: 9383270893</li>
            <li>Location: Agartala, Tripura/India</li>
          </ul>
        </div>
      </div>

      <form className={styles.contactForm}>
        <h2>Get in Touch</h2>
        <div className={styles.formGroup}>
          <label htmlFor="name" hidden>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" hidden>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className={`${styles.btn} ${styles.hover}`} type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;