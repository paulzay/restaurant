function loadPage() {
  let content = document.getElementById('content');

  content.appendChild(header());

  const main = document.createElement("main");
  main.appendChild(home());
  content.appendChild(main);

  content.appendChild(footer());

  return content;
}

export default loadPage;