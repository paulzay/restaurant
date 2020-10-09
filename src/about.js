const about = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = `
        <div class="about" data-tab="3">
          <img class="topping" src="http://michiramen.com/images/toppings-2.jpg"/>
          <div class="words">
              <h2>CERTIFIED TEXAS RAMEN</h2>
              <p>If you’ve never had ramen before, we’re glad your taste buds 
              are here. We’re a traditional ramen house with a Texas flair. 
              Everything that goes in your mouth has been highly approved by 
              our talented team of ramen-lovers. Ramen is the comfort food for
               every season and with a lifetime of combinations of toppings and 
               broth options to put into your bowl 
              of ramen, we’re happy to be there for every savory experience.</p>
          </div>
        </div>
  `;

  return footer;
};

export default about;