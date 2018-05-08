/*INIT*/
firebase.auth().getRedirectResult().then(result => {
var user = result.user;
if (result.credential) {
  // This gives you an Access Token.
  var token = result.credential.accessToken;
}
// The signed-in user info.
if (result.user) {
  console.log("Beep")
  changeAppPage('accountScreen');
}
else {
  changeAppPage('homeScreen');
}
});

$(function(){
  $('.button-collapse').sideNav();
}) // end of jQuery name space
