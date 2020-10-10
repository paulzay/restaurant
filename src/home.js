const home = () => {
  const content = document.createElement('div');
  content.innerHTML = `
        <div class="tabs_content" data-tab="1">
            <div class="welcometext">
              <div class='words'>
              <h1>ZAY'S KITCHEN</h1>
              <p>NEW NORTHWEST AUSTIN LOCATION AT 183 & ANDERSON MILL!</p>
              </div>
              <div class="noods">
                <img src="http://michiramen.com/media/hero-image-2.png"/>
              </div>
            </div>
        </div>
  `;

  return content;
};

export default home;