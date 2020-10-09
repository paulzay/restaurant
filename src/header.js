const header = () => {
  const header = document.createElement('header');

  const ul = document.createElement('ul');
  ul.classList.add('tabs__sidebar');
  ul.innerHTML = `
  <li class="tabs__btn" data-for-tab="1">Home</li>
  <li class="tabs__btn" data-for-tab="2">Menu</li>
  <li class="tabs__btn" data-for-tab="3">About</li>
  <li class="tabs__btn" data-for-tab="4"="contact">Contact</li>
  `;
  header.appendChild(ul);

  return header;
};

export default header;
