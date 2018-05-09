//Service Worker Network or cache version
var CACHE = 'network-or-cache';


self.addEventListener('install', function(evt) {
	console.log('The service worker is being installed.');

	evt.waitUntil(precache());
});



self.addEventListener('fetch', function(evt) {
	console.log('The service worker is serving the asset.');
//can add a var here so that if the AJAX cannot get a response, it produces a standard response
var offline = true;

evt.respondWith(fromNetwork(evt.request, 400).catch(function () {

	return fromCache(evt.request);
}));
});


function precache() {
	return caches.open(CACHE).then(function (cache) {
		return cache.addAll([
    //A list of files that you want to cache on first run of the app
    //Change paths to accordingly
		'/HAD_18/MyQuest/',

		'/HAD_18/MyQuest/index.html',
		'/HAD_18/MyQuest/manifest.json',

		'/HAD_18/MyQuest/assets/facebookBtn.png',
		'/HAD_18/MyQuest/assets/githubBtn.png',
		'/HAD_18/MyQuest/assets/googleBtn.png',
		'/HAD_18/MyQuest/assets/library.jpg',
		'/HAD_18/MyQuest/assets/olympia.jpg',
		'/HAD_18/MyQuest/assets/student-services.jpg',
		'/HAD_18/MyQuest/assets/myquest-192.png',
		'/HAD_18/MyQuest/assets/myquest-256.png',
		'/HAD_18/MyQuest/assets/favicon.ico',

		'/HAD_18/MyQuest/svg/header.svg',

		'/HAD_18/MyQuest/fonts/roboto/Roboto-Regular.woff',
		'/HAD_18/MyQuest/fonts/facile_sans-webfont.otf',
		'/HAD_18/MyQuest/fonts/facile_sans-webfont.ttf',

		'/HAD_18/MyQuest/css/materialize.css',
		'/HAD_18/MyQuest/css/materialize.min.css',
		'/HAD_18/MyQuest/css/style.css',

		'/HAD_18/MyQuest/partialViews/accountScreen.html',
		'/HAD_18/MyQuest/partialViews/choiceScreen.html',
		'/HAD_18/MyQuest/partialViews/homeScreen.html',
		'/HAD_18/MyQuest/partialViews/instructionsScreen.html',
		'/HAD_18/MyQuest/partialViews/libraryScreen.html',
		'/HAD_18/MyQuest/partialViews/loginScreen.html',
		'/HAD_18/MyQuest/partialViews/olympiaScreen.html',
		'/HAD_18/MyQuest/partialViews/servicesScreen.html',
		'/HAD_18/MyQuest/partialViews/scoreScreen.html',

		'/HAD_18/MyQuest/js/core.js',
		'/HAD_18/MyQuest/js/init.js',
		'/HAD_18/MyQuest/js/jquery-2.2.4.min.js',
		'/HAD_18/MyQuest/js/materialize.js',
		'/HAD_18/MyQuest/js/materialize.min.js'

    ]);
	});
}


function fromNetwork(request, timeout) {
	return new Promise(function (fulfill, reject) {


		var timeoutId = setTimeout(reject, timeout);


		fetch(request).then(function (response) {
			clearTimeout(timeoutId);
			fulfill(response);


		}, reject);
	});
}


function fromCache(request) {
	return caches.open(CACHE).then(function (cache) {
		return cache.match(request).then(function (matching) {
			return matching || Promise.reject('no-match');
		});
	});
}
