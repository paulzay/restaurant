const about = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `
        <div class="tabs_content" data-tab="3">
            <h2>About Us</h2>
        </div>
  `;

  return footer;
};

export default about;