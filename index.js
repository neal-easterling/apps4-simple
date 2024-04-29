window.onload = ()=>{

  const menuBtn = document.getElementById('main-menu-btn');
  const menu = document.getElementById('main-menu');

  menuBtn.addEventListener('click', ()=>{
    console.log('btn clicked');
    menu.classList.toggle('active');
  });

}