const about = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `
        <div class="tabs_content" data-tab="4">
            <h2>contact Us</h2>
        </div>
  `;

  return footer;
};

export default about;