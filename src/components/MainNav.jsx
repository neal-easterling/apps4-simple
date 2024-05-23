
function ListLink({link, text}){

  return (
    <li><a href={link}>{text}</a></li>
  )

}



function MainNav(){
  
  function showMenu(){
    const menu = document.getElementById('main-menu');
    menu.classList.toggle('active');
  }

  return (
    <header className="site-header">
      <nav className="main-nav">
        <div className="logo-container">
          <img src="./appslogo.svg" alt="Apps4Everyone.tech logo - four with circle" width="50" height="50" />
        </div>
        <div className="logo-name">
          <h2>Apps4Everyone</h2>
        </div>
        <div className="menu-button" onClick={showMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </div>
      </nav>
      <ul id="main-menu" className="main-menu">
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