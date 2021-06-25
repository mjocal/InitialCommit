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

  // Search email onClick
  $("#btn-search-email").on("click", function (e) {
    e.preventDefault();
    localStorage.clear(); //Clears storage for next request

    var emailValidation;
    email = $('input[name="email"]').val().toLowerCase();
    emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.match(emailRegEx)) {
      emailValidation = true;
    } else {
      emailValidation = false;
    }

    if (emailValidation === true) {
      document.querySelector('input[name="email"]').parentNode.classList.remove("error");
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
    } else if (emailValidation !== true) {
      document.querySelector('input[name="email"]').parentNode.classList.add("error");
    }
  });

  // Search email on keypress
  $('input[name="email"]').keypress(function (event) {
    var emailValidation;

    email = $('input[name="email"]').val().toLowerCase();
    emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.match(emailRegEx)) {
      emailValidation = true;
      document.querySelector('input[name="email"]').parentNode.classList.remove("error");
    } else {
      emailValidation = false;
    }
    keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
      /**
       * Makes a request to ltv API to search an specific email address.
       * If there's a response, it gets stored in the local storage and redirects to results page
       */
      event.preventDefault();
      localStorage.clear(); //Clears storage for next request

      if (emailValidation === true) {
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
      } else if (emailValidation !== true) {
        document.querySelector('input[name="email"]').parentNode.classList.add("error");
      }
    }
  });

  // Search phone onClick
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

  // Search phone on keypress
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