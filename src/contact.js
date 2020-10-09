const about = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `
        <div class="contact" data-tab="4">
            <h2>Hello</h2>
            <p>What can we help you with?</p>
            <p>Call us on 555-000-333</p>
        </div>
  `;

  return footer;
};

export default about;