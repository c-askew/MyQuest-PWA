/*CORE FUNCTIONS*/
document.addEventListener("deviceready", function(){
      alert("Device ready Fire");
 },true);

$(document).on('click', '.instructionsScreen', {}, function(e) {
  changeAppPage('instructionsScreen');
  console.log("instructions Screen initialised")
});

$(document).on('click', '.startGame', {}, function(e) {
  changeAppPage('gameScreen');
});

function changeAppPage(gameScreen) {
    //the screen to goto
    var gameScreen;
    console.log("changeAppPage called with " + gameScreen + " as partial view");
    $(".contentRoot").empty();
    switch (gameScreen) {
      case 'homeScreen':
      //newView = gameScreen;
      getPartialView(gameScreen);
      navHashHistory('home');
      break;

      case 'instructionsScreen':
      //newView = gameScreen;
      getPartialView(gameScreen);
      navHashHistory('instructions');
      break;

      case 'gameScreen':
      //newView = gameScreen;
      getPartialView(gameScreen);
      navHashHistory('game');
      break;
    }
}

//Get content
function getPartialView(screen) {
  var contentLoaded ;
  console.log("screen content injection for "+screen);
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
