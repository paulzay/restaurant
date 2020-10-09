const home = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `
        <div class="tabs_content" data-tab="1">
            <h2>home</h2>
        </div>
  `;

  return footer;
};

export default home;