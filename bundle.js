/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/css/reset.css
var css_reset = __webpack_require__(1);

// EXTERNAL MODULE: ./src/css/style.css
var style = __webpack_require__(6);

// CONCATENATED MODULE: ./src/SearchForm.js
function searchForm() {
  var header = document.createElement('header');
  header.className = 'header';
  document.body.insertBefore(header, document.body.firstChild);
  var form = document.createElement('form');
  form.className = 'form';
  header.appendChild(form);
  var input = document.createElement('input');
  input.className = 'input-search';
  input.type = 'text';
  input.placeholder = 'Enter request';
  input.setAttribute('onChange', '');
  form.appendChild(input);
  var btnInputSearch = document.createElement('button');
  btnInputSearch.className = 'btn-input-search';
  btnInputSearch.textContent = 'Search';
  form.appendChild(btnInputSearch);
}

/* harmony default export */ var SearchForm = (searchForm);
// CONCATENATED MODULE: ./src/services.js
function httpGet(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = function () {
      resolve(xhr.response);
    };

    xhr.onerror = function () {
      reject(new Error('badRequest (400) invalidVideoId'));
    };

    xhr.responseType = 'json'; // перед отправкой указываем что бы пришли распарсенные данные.

    xhr.send();
  });
}

var arrVideoId = [];
var arrVideoMini = [];

function createArrVideoId(videoId) {
  for (var i = 0; i < videoId.items.length; i += 1) {
    arrVideoId.push(videoId.items[i].id.videoId);
  }
}

function createArrVideoMini(video) {
  for (var i = 0; i < video.items.length; i += 1) {
    arrVideoMini.push(video.items[i]);
  }
}

function getPrettyDate(timestamp) {
  var date = new Date(timestamp);
  var options = {
    // era: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric' // weekday: 'short',
    // timezone: 'UTC',
    // hour: '2-digit',
    // minute: '2-digit',
    // second: 'numeric'

  };
  return date.toLocaleString('ru', options);
}


// CONCATENATED MODULE: ./src/RenderMarkupVideo.js


function createVideoListMini() {
  var main = document.createElement('main');
  main.className = 'main';
  document.body.insertBefore(main, document.body.children[1]);
  var videoListMini = document.createElement('section');
  videoListMini.className = 'videoListMini';
  main.appendChild(videoListMini);
  var dotsContainer = document.createElement('div');
  dotsContainer.id = 'dots';
  main.appendChild(dotsContainer);
}

function createVideoMiniItem(video, i) {
  function openVideo(id) {
    window.open("https://www.youtube.com/watch?v=".concat(id), '_blank');
  }

  var videoListMini = document.querySelector('.videoListMini');
  var videoListMiniItem = document.createElement('div');
  videoListMiniItem.className = 'videoListMiniItem';
  videoListMini.appendChild(videoListMiniItem);
  var videoMiniItemImg = document.createElement('div');
  videoMiniItemImg.className = 'blockVideoMiniItemImg';
  videoListMiniItem.appendChild(videoMiniItemImg);
  var videoMiniItemInfo = document.createElement('div');
  videoMiniItemInfo.className = 'blockVideoMiniItemInfo';
  videoListMiniItem.appendChild(videoMiniItemInfo);
  var newImg = document.createElement('img');
  newImg.className = 'videoImgMini';
  newImg.src = video.snippet.thumbnails.medium.url;
  videoMiniItemImg.appendChild(newImg);
  var newTitle = document.createElement('h3');
  newTitle.className = 'titleInfo';
  newTitle.textContent = video.snippet.title;
  newTitle.addEventListener('click', function () {
    openVideo(video.id);
  });
  videoMiniItemInfo.appendChild(newTitle);
  var newAuthor = document.createElement('p');
  newAuthor.className = 'authorInfo';
  newAuthor.textContent = "channel Title: ".concat(video.snippet.channelTitle);
  videoMiniItemInfo.appendChild(newAuthor);
  var newViewCount = document.createElement('p');
  newViewCount.className = 'viewCountInfo';
  newViewCount.textContent = "view Count: ".concat(video.statistics.viewCount);
  videoMiniItemInfo.appendChild(newViewCount);
  var newPublishedDate = document.createElement('p');
  newPublishedDate.className = 'publishedDateInfo';
  newPublishedDate.textContent = "published Date: ".concat(getPrettyDate(video.snippet.publishedAt));
  videoMiniItemInfo.appendChild(newPublishedDate);
  var newDescription = document.createElement('p');
  newDescription.className = 'newDescriptionInfo';
  newDescription.textContent = video.snippet.description;
  videoMiniItemInfo.appendChild(newDescription);
}


// CONCATENATED MODULE: ./src/index.js





var APIKey = 'AIzaSyCHVdJWyLULNovRgf6OIZ7gPos5eVUw0eI';
var maxResultsAPIVideo = 15;
var offsetPage = 0;
var currentCountVideoOnPage = 1;
var minLengthForSwipe = 150;
var bufferPagesIndex = 3;
var pageToken = ''; // RENDER MARKUP SEARCH FORM IN HEADER

SearchForm();
var btnInputSearch = document.querySelector('.btn-input-search');

var main = function main() {
  return document.querySelector('.main');
};

var src_videoListMini = function videoListMini() {
  return document.querySelector('.videoListMini');
}; // ОПРЕДЕЛЕНИЕ КОЛИЧЕСТВА ВИДЕО НА СТРАНИЦЕ В ЗАВИСИМОСТИ ОТ ШИРИНЫ БРАУЗЕРА


var determinedCountVideo = function determinedCountVideo() {
  var screenWidth = document.documentElement.clientWidth;
  currentCountVideoOnPage = 4;

  if (screenWidth <= 1400) {
    currentCountVideoOnPage = 3;
  }

  if (screenWidth <= 1000) {
    currentCountVideoOnPage = 2;
  }

  if (screenWidth <= 700) {
    currentCountVideoOnPage = 1;
  }

  return currentCountVideoOnPage;
};

var src_getYoutubeVideoViewCount = function getYoutubeVideoViewCount() {
  var strVideoId = arrVideoId.join(',');

  function renderMarkupVideoIdMini(youtubeVideoMini) {
    for (var i = 0; i < currentCountVideoOnPage; i += 1) {
      createVideoMiniItem(youtubeVideoMini[i], i);
    }
  }

  var urlYoutube = "https://www.googleapis.com/youtube/v3/videos?key=".concat(APIKey, "&id=").concat(strVideoId, "&part=snippet,statistics");
  httpGet(urlYoutube).then(function (data) {
    createArrVideoMini(data);
    renderMarkupVideoIdMini(arrVideoMini);
  });
};

var src_getYoutubeArrVideoId = function getYoutubeArrVideoId(inSearchUrlYoutube) {
  // console.log('pageToken', pageToken);
  var urlYoutube = "https://www.googleapis.com/youtube/v3/search?key=".concat(APIKey, "&type=video&part=snippet&maxResults=").concat(maxResultsAPIVideo, "&pageToken=").concat(pageToken, "&q=").concat(inSearchUrlYoutube);
  httpGet(urlYoutube).then(function (data) {
    createArrVideoId(data);
    pageToken = data.nextPageToken; // console.log('nextPageToken', pageToken);

    src_getYoutubeVideoViewCount();
  });
}; // УДАЛЕНИЕ ВИДЕО СО СТРАНИЦЫ ПОСЛЕ НОВОГО ПОИСКА


var src_refreshContainer = function refreshContainer() {
  if (main()) {
    main().remove();
  }

  determinedCountVideo();
  createVideoListMini();
}; // ЗАПРОС И ОТРИСОВКА ВИДЕО ПОСЛЕ НАЖАТИЯ НА КНОПКУ ПОИСК


btnInputSearch.onclick = function (e) {
  var input = document.querySelector('.input-search').value;
  e.preventDefault();
  offsetPage = 0;
  arrVideoId.length = 0;
  arrVideoMini.length = 0;
  src_refreshContainer();
  src_getYoutubeArrVideoId(input);
}; // ИЗМЕНЕНИЕ КОЛИЧЕСТВА ВИДЕО НА СТРАНИЦЕ В ЗАВИСИМОСТИ ОТ ШИРИНЫ БРАУЗЕРА


var src_changeVideoCount = function changeVideoCount() {
  var tempCur = currentCountVideoOnPage;
  var newCountVideoOnPage = determinedCountVideo();
  var dif = newCountVideoOnPage - tempCur;

  if (dif <= 0) {
    for (var i = 0, len = Math.abs(dif); i < len; i += 1) {
      document.querySelector('.videoListMini').lastChild.remove();
    }
  } else {
    for (var _i = 0; _i < dif; _i += 1) {
      createVideoMiniItem(arrVideoMini[tempCur + offsetPage + _i], tempCur + _i);
    }
  }
};

window.addEventListener('resize', src_changeVideoCount); // создание блоков и заполнение контентом при листании страниц

var src_fillPrevNextPage = function fillPrevNextPage() {
  for (var i = offsetPage; i < offsetPage + currentCountVideoOnPage; i += 1) {
    createVideoMiniItem(arrVideoMini[i], i - offsetPage);
  }
}; // следующая страница из кэша


var src_nextPage = function nextPage() {
  var remaringPages = arrVideoId.length - offsetPage - currentCountVideoOnPage;

  if (remaringPages < currentCountVideoOnPage * bufferPagesIndex) {
    src_getYoutubeArrVideoId();
  }

  src_refreshContainer();
  offsetPage += currentCountVideoOnPage;
  src_fillPrevNextPage();
}; // предыдущая страница из кэша


var prevPage = function prevPage() {
  src_refreshContainer();
  offsetPage -= currentCountVideoOnPage;
  src_fillPrevNextPage();
}; // действие при отпускании тача или мыши


var xDown = null;

var actionEnd = function mouseOrTouchEndAction(e) {
  if (document.getSelection().toString().length > 0) {
    return;
  }

  var xUp = null;

  if (e.type === 'mouseup') {
    xUp = e.clientX;
  } else if (e.type === 'touchend') {
    xUp = e.changedTouches[0].clientX;
  }

  var xDiff = xDown - xUp;

  if (Math.abs(xDiff) > minLengthForSwipe) {
    if (xDiff < 0) {
      if (offsetPage <= 0) {
        return;
      }

      src_videoListMini().classList.add('-swipe-right');
      setTimeout(prevPage, 500);
    } else {
      if (arrVideoMini.length === 0) {
        return;
      }

      src_videoListMini().classList.add('-swipe-left');
      setTimeout(src_nextPage, 500);
    }
  }

  xDown = null;
}; // события по тач свайпу


document.body.addEventListener('touchstart', function (e) {
  xDown = e.touches[0].clientX;
});
document.body.addEventListener('touchend', actionEnd); // события по мышь свайпу

document.body.addEventListener('mousedown', function (e) {
  xDown = e.clientX;
});
document.body.addEventListener('mouseup', actionEnd); // события по нажатию на стрелки

window.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    prevPage();
  }

  if (e.key === 'ArrowRight') {
    src_nextPage();
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);