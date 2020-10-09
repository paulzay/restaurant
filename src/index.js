import "./style.css";
import loadPage from './init';
import home from './home';
import menu from './menu';
import about from './about';
import contact from './contact';


document.body.appendChild(loadPage());

const showTab = (switchTab) => {
  const main = document.querySelector('main');
  main.innerHTML = '';
  main.appendChild(switchTab());
};

const tabtns = document.querySelectorAll('.tabs__btn');
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */

for (let i = 0; i < tabtns.length; i++) {
  tabtns[i].addEventListener('click', (event) => {
    const tab = event.target.getAttribute('data-for-tab');
    switch (tab) {
      case '1':
        showTab(home);
        break;
      case '2':
        showTab(menu);
        break;
      case '3':
        showTab(about);
        break;
      case '4':
        showTab(contact);
        break;
      default:
        showTab(home);
        break;
    }
  });
}
