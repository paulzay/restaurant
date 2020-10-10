import header from './header';
import home from './home';
import footer from './footer';

function loadPage() {
  const content = document.getElementById('content');

  content.appendChild(header());

  const main = document.createElement('main');
  main.appendChild(home());
  content.appendChild(main);

  content.appendChild(footer());

  return content;
}

export default loadPage;