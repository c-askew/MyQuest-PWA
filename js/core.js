/*CORE FUNCTIONS*/
document.addEventListener("deviceready", function(){
      alert("Device ready Fire");
 },true);

//Logo link to homeScreen
 $(document).on('click', '.homePage', {}, function(e) {
   changeAppPage('homeScreen');
 });

 $(document).on('click', '.accountButton', {}, function(e) {
   changeAppPage('loginScreen');
 });

//Link to instructionsScreen
$(document).on('click', '.startGame', {}, function(e) {
  changeAppPage('startScreen');
  console.log("startScreen initialised")
});

$(document).on('click', '.choicePage', {}, function(e) {
  changeAppPage('choiceScreen');
});

function changeAppPage(gameScreen) {
    //the screen to goto
    var gameScreen;
    // console.log("changeAppPage called with " + gameScreen + " as partial view");
    $(".contentRoot").empty();
    switch (gameScreen) {
      case 'homeScreen':
      getPartialView(gameScreen);
      navHashHistory('home');
      break;

      case 'startScreen':
      getPartialView(gameScreen);
      navHashHistory('start');
      break;

      case 'gameScreen':
      getPartialView(gameScreen);
      navHashHistory('game');
      break;

      case 'choiceScreen':
      getPartialView(gameScreen);
      navHashHistory('choice');
      break;

      case 'loginScreen':
      getPartialView(gameScreen);
      navHashHistory('login');
      break;

      case 'accountScreen':
      getPartialView(gameScreen);
      navHashHistory('account');
      break;
    }
}

//Get content
function getPartialView(screen) {
  var contentLoaded ;
  // console.log("screen content injection for "+screen);
  $.get('partialViews/'+screen+'.html', function(data) {
    //inject the content into the DOM
    $(".contentRoot").append(data);
    contentLoaded = true;
  }); //end get
} //close getPartialView function

function navHashHistory(saveHash) {
    //Hash Hijack Method for SPA
    //for each new SPA partial view, add the hash to the URL bar
    var hashValue = location.hash;
    hashValue = hashValue.replace(/^#/, '');
    if (hashValue != saveHash) {
        window.history.pushState("", "", "#" + saveHash);
    } else {
        //Must be first initialise
        window.history.pushState("", "", "#" + saveHash);
    }
} //end navHashHistory
