$(document).ready(function () {

  $(".phone-group").hide();

  $("#select-email").on("click", function (e) {
    e.preventDefault();
    $(".email-group").show();
    $(".phone-group").hide();
  });

  $("#select-phone").on("click", function (e) {
    e.preventDefault();
    $(".phone-group").show();
    $(".email-group").hide();
  });

  // Added jquery methods to make the effect of the page loading
  $(".loading").fadeOut(2000);
  setTimeout(() => {
    $(".search-again").fadeIn();
  }, 2000);

  $("#btn-search-email").on("click", function (e) {
    e.preventDefault();
    localStorage.clear(); //Clears storage for next request
    email = $('input[type="text"]').val().toLowerCase();

    var x;
    emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.match(emailRegEx)) {
      x = true;
    } else {
      x = false;
    }

    if (x === true) {
      document.querySelector('input[type="text"]').parentNode.classList.remove("error");
      const proxyurl = "";
      const url =
        'https://ltv-data-api.herokuapp.com/api/v1/records.json?email=' + email;
      fetch(proxyurl + url)
        .then((response) => response.text())
        .then(function (contents) {
          localStorage.setItem("userObject", contents);
          window.location.href = "result.html";
        })
        .catch((e) => console.log(e));
    } else if (x !== true) {
      document.querySelector('input[type="text"]').parentNode.classList.add("error");
    }
  });

  $('input[type="text"]').keypress(function (event) {
    email = $('input[type="text"]').val().toLowerCase();
    regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email.match(regEx)) {
      x = true;
      document.querySelector('input[type="text"]').parentNode.classList.remove("error");
    } else {
      x = false;
    }
    keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      /**
       * Makes a request to ltv API to search an specific email address.
       * If there's a response, it gets stored in the local storage and redirects to results page
       */
      event.preventDefault();
      localStorage.clear(); //Clears storage for next request

      var x, y;


      if (x === true) {
        const proxyurl = "";
        const url =
          'https://ltv-data-api.herokuapp.com/api/v1/records.json?email=' + email;
        fetch(proxyurl + url)
          .then((response) => response.text())
          .then(function (contents) {
            localStorage.setItem("userObject", contents);
            window.location.href = "result.html";
          })
          .catch((e) => console.log(e));
      } else if (x !== true) {
        document.querySelector('input[type="text"]').parentNode.classList.add("error");
      }
    }
  });

  $("#btn-search-phone").on("click", function (e) {
    e.preventDefault();
    localStorage.clear();
    phone = $('input[name="phone"]').val();

    var phoneValidation;
    phoneRegEx = /\d{10}/;

    if (phone.match(phoneRegEx)) {
      phoneValidation = true;
    } else {
      phoneValidation = false;
    }

    if (phoneValidation === true) {
      document.querySelector('input[type="text"]').parentNode.classList.remove("error");
      const proxyurl = "";
      const url =
        'https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=' + phone;
      fetch(proxyurl + url)
        .then((response) => response.text())
        .then(function (contents) {
          localStorage.setItem("userObject", contents);
          window.location.href = "result.html";
        })
        .catch((e) => console.log(e));
    } else if (phoneValidation !== true) {
      document.querySelector('input[name="phone"]').parentNode.classList.add("error");
    }
  })

  $('input[name="phone"]').keypress(function (event) {
    phone = $('input[name="phone"]').val()
    phoneRegEx = /\d{10}/;

    if (phone.match(phoneRegEx)) {
      phoneValidation = true;
      document.querySelector('input[name="phone"]').parentNode.classList.remove("error");
    } else {
      phoneValidation = false;
    }

    keycode = (event.keyCode ? event.keyCode : event.which);

    if (keycode == '13') {
      event.preventDefault();
      localStorage.clear(); //Clears storage for next request

      var phoneValidation;
      if (phoneValidation === true) {
        const proxyurl = "";
        const url =
          'https://ltv-data-api.herokuapp.com/api/v1/records.json?phone=' + phone;
        fetch(proxyurl + url)
          .then((response) => response.text())
          .then(function (contents) {
            localStorage.setItem("userObject", contents);
            window.location.href = "result.html";
          })
          .catch((e) => console.log(e));
      } else if (phoneValidation !== true) {
        document.querySelector('input[name="phone"]').parentNode.classList.add("error");
      }
    }
  });

});