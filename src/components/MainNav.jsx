import { useState } from "react";

function ListLink({link, text}){

  return (
    <li><a href={link}>{text}</a></li>
  )

}


function MainNav(){
  
  const [isActive, setIsActive] = useState(false);
  function showMenu(){
    isActive ? setIsActive(false) : setIsActive(true);
  
  }

  return (
    <header className="site-header">
      <nav className="main-nav">
        <div className="logo-container">
          <img 
            src="./img/appslogo.svg" 
            alt="Apps4Everyone.tech logo - four with circle" 
            width="50" 
            height="50" 
          />
        </div>
        <div className="logo-name">
          <h2>Apps4Everyone</h2>
        </div>
        <div 
          className={`menu-button ${isActive ? 'active' : ''}`} 
          onClick={showMenu}
        >
          <img 
            src="./img/menu.svg" 
            alt="menu button" 
          />
        </div>
      </nav>
      <ul 
        id="main-menu" 
        className={`main-menu ${isActive ? 'active' : ''}`}
      >
          <ListLink link="#home" text="Home" />
          <ListLink link="#mission" text="Our Mission" />
          <ListLink link="#apps" text="Our Apps" />
          <ListLink link="#request" text="Make a Request" />
          <ListLink link="#donate" text="Donate" />
          <ListLink link="#join" text="Join Our Team" />
        </ul>
      </header>
  )
}

export default MainNav;