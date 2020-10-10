const menu = () => {
  const content = document.createElement('footer');
  content.innerHTML = `
        <div class="menu" data-tab="2">
            <div class='sides'>
              <h2>Sides</h2>
              <dl>
                <dt class="toppings-item-name">Fish grits</dt>
                <dt class="toppings-item-price">2.99</dt>
              </dl>
              <dl>
                <dt class="toppings-item-name">Fish grits</dt>
                <dt class="toppings-item-price">2.99</dt>
              </dl>
              <dl>
                <dt class="toppings-item-name">Fish grits</dt>
                <dt class="toppings-item-price">2.99</dt>

              </dl>
              <dl>
                <dt class="toppings-item-name">Fish grits</dt>
                <dt class="toppings-item-price">2.99</dt>

              </dl>
              <dl>
                <dt class="toppings-item-name">Fish grits</dt>
                <dt class="toppings-item-price">2.99</dt>
               
              </dl>
              <dl>
                <dt class="toppings-item-name">Fish grits</dt>
                <dt class="toppings-item-price">2.99</dt>
           
              </dl>
            </div>
        </div>
  `;

  return content;
};

export default menu;