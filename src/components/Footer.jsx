import Socials from "./Socials";

function Footer(){

  return (
    <footer id="main-footer" className="main-footer">
      <div className="donation-container">
        <a href="https://patreon.com/Apps4Everyone" target="_blank" rel="noreferrer">
          <button className="btn text-btn">Donate</button>
        </a>
        <p>Apps4Everyone operates on the generosity of donors and the support of our community. Together, we can expand our reach and empower more individuals to thrive in an ever-evolving world.</p>
          
      </div>
      <Socials />
    </footer>
  );

}

export default Footer;