function main() {

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 200) {
      console.log("Maior que 200");
      $('#nav_bar').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < 200) {
      $('#nav_bar').removeClass('navbar-fixed-top');
    }
  });
}
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
$(document).ready(main());
