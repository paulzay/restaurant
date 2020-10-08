const header = () => {
  const header = document.createElement("header");
  const nav = document.createElement('div');
  nav.classList.add('tabs__sidebar')
  nav.innerHTML = `
    <button class="tabs__btn" data-for-tab="1">Menu</button>
    <button class="tabs__btn" data-for-tab="2">About Us</button>
    <button class="tabs__btn" data-for-tab="3">Contact</button>
  `

  header.appendChild(nav);

  return header;
}

export default header;

// const headerSection = () => {
//   const header = document.createElement('header');
//   header.id = 'header';

//   const ul = document.createElement('ul');
//   const li = document.createElement('li');
//   const logo = document.createElement('h1');
//   const homeBtn = document.createElement('button');
//   const menuBtn = document.createElement('button');
//   const locationBtn = document.createElement('button');
//   const aboutBtn = document.createElement('button');

//   homeBtn.classList.add('tabs__btn');
//   homeBtn.innerHTML = 'Home';
//   menuBtn.classList.add('tabs__btn');
//   menuBtn.innerHTML = 'Menu';
//   locationBtn.classList.add('tabs__btn');
//   locationBtn.innerHTML = 'Locations';
//   aboutBtn.classList.add('tabs__btn');
//   aboutBtn.innerHTML = 'About'
//   logo.innerHTML = 'Zays Kitchen';

//   // li.appendChild(logo);
//   li.appendChild(homeBtn);
//   li.appendChild(menuBtn);
//   li.appendChild(locationBtn);
//   li.appendChild(aboutBtn);
//   ul.appendChild(li);
//   header.appendChild(ul)

//   return header;
// }
