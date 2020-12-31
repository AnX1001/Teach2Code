
  
  // First produkt
    function initPayPalButton() {
      paypal.Buttons({
        style: {
          locale: 'no_NO',
          shape: 'pill',
          color: 'black',
          layout: 'horizontal',
          label: 'buynow',
          height: 45

        
          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{"amount":{"currency_code":"NOK","value":1}}]
          });
        },

        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-container');
    }
    initPayPalButton();


    // second product

    function initPayPalButtonTwo() {
      paypal.Buttons({
        style: {
          locale: 'no_NO',
          shape: 'pill',
          color: 'black',
          layout: 'horizontal',
          label: 'buynow',
          height: 45


          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{"amount":{"currency_code":"NOK","value":1.5}}]
          });
        },

        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name + '!');
          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-containerTwo');
    }
    initPayPalButtonTwo();
