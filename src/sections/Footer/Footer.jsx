import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Sagar Debnath. <br />
        All rights reserved.
        <a href="https://github.com/Sarrtt303/personal_portfolio" className='text-gray-300 text-sm pl-5'>Source Code</a>
      </p>
      
    </section>
  );
}

export default Footer;