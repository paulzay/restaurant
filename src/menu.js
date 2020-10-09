const menu = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `
        <div class="tabs_content" data-tab="2">
            <h2>menu</h2>
        </div>
  `;

  return footer;
};

export default menu;