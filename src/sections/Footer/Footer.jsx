import "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className="footer text-center ">

     <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
      </div>
      <p>
        &copy; 2024 Sagar Debnath. <br />
        All rights reserved.
        <a href="https://github.com/Sarrtt303/personal_portfolio" className='text-gray-300 text-sm pl-5'>Source Code</a>
      </p>
      
    </section>
  );
}

export default Footer;