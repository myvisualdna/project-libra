module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "15X6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/NotificationsNone");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2Rhp":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sidebarOption": "sidebarOption_sidebarOption__1mYd3",
	"MuiSvgIcon-root": "sidebarOption_MuiSvgIcon-root__1BSrG",
	"sidebarOption__active": "sidebarOption_sidebarOption__active__2YMrF"
};


/***/ }),

/***/ "5dk1":
/***/ (function(module, exports) {

module.exports = require("react-twitter-embed");

/***/ }),

/***/ "EAEr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Share");

/***/ }),

/***/ "F92n":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"post": "post_post__3Ledx",
	"post__body": "post_post__body__2TJcL",
	"post__footer": "post_post__footer__R8U_E",
	"post__headerDescription": "post_post__headerDescription__2Zb_m",
	"post__headerText": "post_post__headerText__5bDpM",
	"post__badge": "post_post__badge__P_ORf",
	"post__headerSpecial": "post_post__headerSpecial__3Bqvp",
	"post__avatar": "post_post__avatar__jzMpS"
};


/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "M2SB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VerifiedUser");

/***/ }),

/***/ "NFUl":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"app": "styleIndex_app__1WGFv"
};


/***/ }),

/***/ "RMKB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ListAlt");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/navigation.js
var __jsx = external_react_default.a.createElement;


function Navigation() {
  return __jsx("div", null);
}

/* harmony default export */ var navigation = (Navigation);
// CONCATENATED MODULE: ./components/container.js
var container_jsx = external_react_default.a.createElement;


 //Creamos el container que vamos a usar en CADA PAGINA. Sera como un template
//Todas las pages son este container con un contenido personalizado

const Container = props => {
  return container_jsx("div", null, container_jsx(head_default.a, null), container_jsx(navigation, null), container_jsx("div", {
    className: "container p-4"
  }, props.children));
};

/* harmony default export */ var container = (Container);
// EXTERNAL MODULE: ./styles/sidebar.module.scss
var sidebar_module = __webpack_require__("nerw");
var sidebar_module_default = /*#__PURE__*/__webpack_require__.n(sidebar_module);

// EXTERNAL MODULE: external "@material-ui/icons/Twitter"
var Twitter_ = __webpack_require__("s4mK");
var Twitter_default = /*#__PURE__*/__webpack_require__.n(Twitter_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./styles/sidebarOption.module.scss
var sidebarOption_module = __webpack_require__("2Rhp");
var sidebarOption_module_default = /*#__PURE__*/__webpack_require__.n(sidebarOption_module);

// CONCATENATED MODULE: ./components/SidebarOption.js

var SidebarOption_jsx = external_react_default.a.createElement;



function SidebarOption({
  active,
  text,
  Icon
}) {
  const buttonStyle = "";

  if (active === true) {
    const buttonStyle = sidebarOption_module_default.a.sidebarOption__active;
  } else {
    const buttonStyle = sidebarOption_module_default.a.sidebarOption;
  }

  return SidebarOption_jsx("div", {
    className: "jsx-926327412" + " " + `sidebarOption ${active && "sidebarOption--active"}`
  }, SidebarOption_jsx(Icon, {
    className: "jsx-926327412"
  }), SidebarOption_jsx("h2", {
    className: "jsx-926327412"
  }, text), SidebarOption_jsx(style_default.a, {
    id: "926327412"
  }, [".sidebarOption.jsx-926327412{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}", ".sidebarOption.jsx-926327412:hover{background-color:#e8f5fe;border-radius:30px;color:var(--twitter-color);-webkit-transition:color 100ms ease-out;transition:color 100ms ease-out;}", ".sidebarOption.jsx-926327412>.MuiSvgIcon-root.jsx-926327412{padding:20px;}", ".sidebarOption.jsx-926327412>h2.jsx-926327412{font-weight:800;font-size:20px;margin-right:20px;}", ".sidebarOption__active.jsx-926327412{color:var(--twitter-color);}"]));
}

/* harmony default export */ var components_SidebarOption = (SidebarOption);
// EXTERNAL MODULE: external "@material-ui/icons/Home"
var Home_ = __webpack_require__("YZXy");
var Home_default = /*#__PURE__*/__webpack_require__.n(Home_);

// EXTERNAL MODULE: external "@material-ui/icons/Search"
var Search_ = __webpack_require__("iSPQ");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_);

// EXTERNAL MODULE: external "@material-ui/icons/NotificationsNone"
var NotificationsNone_ = __webpack_require__("15X6");
var NotificationsNone_default = /*#__PURE__*/__webpack_require__.n(NotificationsNone_);

// EXTERNAL MODULE: external "@material-ui/icons/MailOutline"
var MailOutline_ = __webpack_require__("YeUX");
var MailOutline_default = /*#__PURE__*/__webpack_require__.n(MailOutline_);

// EXTERNAL MODULE: external "@material-ui/icons/BookmarkBorder"
var BookmarkBorder_ = __webpack_require__("yWbY");
var BookmarkBorder_default = /*#__PURE__*/__webpack_require__.n(BookmarkBorder_);

// EXTERNAL MODULE: external "@material-ui/icons/ListAlt"
var ListAlt_ = __webpack_require__("RMKB");
var ListAlt_default = /*#__PURE__*/__webpack_require__.n(ListAlt_);

// EXTERNAL MODULE: external "@material-ui/icons/PermIdentity"
var PermIdentity_ = __webpack_require__("kDBC");
var PermIdentity_default = /*#__PURE__*/__webpack_require__.n(PermIdentity_);

// EXTERNAL MODULE: external "@material-ui/icons/MoreHoriz"
var MoreHoriz_ = __webpack_require__("rYcJ");
var MoreHoriz_default = /*#__PURE__*/__webpack_require__.n(MoreHoriz_);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// CONCATENATED MODULE: ./components/Sidebar.js
var Sidebar_jsx = external_react_default.a.createElement;














function Sidebar() {
  return Sidebar_jsx("div", {
    className: sidebar_module_default.a.sidebar
  }, Sidebar_jsx(Twitter_default.a, {
    className: sidebar_module_default.a.sidebar__twitterIcon
  }), Sidebar_jsx(components_SidebarOption, {
    active: true,
    Icon: Home_default.a,
    text: "Home"
  }), Sidebar_jsx(components_SidebarOption, {
    Icon: Search_default.a,
    text: "Explore"
  }), Sidebar_jsx(components_SidebarOption, {
    Icon: NotificationsNone_default.a,
    text: "Notifications"
  }), Sidebar_jsx(components_SidebarOption, {
    Icon: MailOutline_default.a,
    text: "Messages"
  }), Sidebar_jsx(components_SidebarOption, {
    Icon: BookmarkBorder_default.a,
    text: "Bookmarks"
  }), Sidebar_jsx(components_SidebarOption, {
    Icon: ListAlt_default.a,
    text: "Lists"
  }), Sidebar_jsx(components_SidebarOption, {
    Icon: PermIdentity_default.a,
    text: "Profile"
  }), Sidebar_jsx(components_SidebarOption, {
    Icon: MoreHoriz_default.a,
    text: "More"
  }), Sidebar_jsx(core_["Button"], {
    variant: "outlined",
    className: sidebar_module_default.a.sidebar__tweet,
    fullWidth: true
  }, "Tweet"));
}

/* harmony default export */ var components_Sidebar = (Sidebar);
// EXTERNAL MODULE: ./styles/feed.module.scss
var feed_module = __webpack_require__("cbWR");
var feed_module_default = /*#__PURE__*/__webpack_require__.n(feed_module);

// EXTERNAL MODULE: ./styles/tweetBox.module.scss
var tweetBox_module = __webpack_require__("u4eR");
var tweetBox_module_default = /*#__PURE__*/__webpack_require__.n(tweetBox_module);

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__("pNaP");
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// CONCATENATED MODULE: ./firebase/index.js

const config = {
  apiKey: "AIzaSyCEKyNLpUNChRUpiTJ_wONc2h2d8msgttE",
  authDomain: "project-libra-twitter.firebaseapp.com",
  databaseURL: "https://project-libra-twitter.firebaseio.com",
  projectId: "project-libra-twitter",
  storageBucket: "project-libra-twitter.appspot.com",
  messagingSenderId: "1007178103926",
  appId: "1:1007178103926:web:002f246b6bf9e737ccb357",
  measurementId: "G-4VHQ58P8YB"
};

if (!external_firebase_default.a.apps.length) {
  external_firebase_default.a.initializeApp(config);
}

const db = external_firebase_default.a.firestore();
console.log(db);
/* harmony default export */ var firebase = (db);
// CONCATENATED MODULE: ./components/tweetBox.js
var tweetBox_jsx = external_react_default.a.createElement;





function TweetBox() {
  //1. Definimos el el texto y la imagen del Tweet
  const {
    0: tweetMessage,
    1: setTweetMessage
  } = Object(external_react_["useState"])("");
  const {
    0: tweetImage,
    1: setTweetImage
  } = Object(external_react_["useState"])(""); //3. We define the method to send a tweet to the database

  const sendTweet = e => {
    e.preventDefault();
    firebase.collection("posts").add({
      displayName: "The Mandalorian",
      username: "Mando",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://lumiere-a.akamaihd.net/v1/images/5e97081f4e43710001cd36e6-image_40692e05.jpeg?region=0%2C0%2C1536%2C864"
    }); //We re-set again the states on thosw two components

    setTweetMessage("");
    setTweetImage("");
  };

  return tweetBox_jsx("div", {
    className: tweetBox_module_default.a.tweetBox
  }, tweetBox_jsx("form", null, tweetBox_jsx("div", {
    className: tweetBox_module_default.a.tweetBox__input
  }, tweetBox_jsx(core_["Avatar"], {
    src: "https://picsum.photos/200/300"
  }), tweetBox_jsx("input", {
    //2. We connect the states defined on item 1, here the text message of the tweet. OnChnage will setup the method to modify "TweetMessage" state with whatever we write in the input
    onChange: e => setTweetMessage(e.target.value),
    value: tweetMessage,
    placeholder: "What's happening?",
    type: "text"
  })), tweetBox_jsx("input", {
    //The same that item 2
    value: tweetImage,
    onChange: e => setTweetImage(e.target.value),
    className: tweetBox_module_default.a.tweetBox__imageInput,
    placeholder: "Enter image URL",
    type: "text"
  }), tweetBox_jsx(core_["Button"] //4. We include de method defined in item 3
  , {
    onClick: sendTweet,
    type: "submit",
    className: tweetBox_module_default.a.tweetBox__tweetButton
  }, "Tweet")));
}

/* harmony default export */ var tweetBox = (TweetBox);
// EXTERNAL MODULE: ./styles/post.module.scss
var post_module = __webpack_require__("F92n");
var post_module_default = /*#__PURE__*/__webpack_require__.n(post_module);

// EXTERNAL MODULE: external "@material-ui/icons/VerifiedUser"
var VerifiedUser_ = __webpack_require__("M2SB");
var VerifiedUser_default = /*#__PURE__*/__webpack_require__.n(VerifiedUser_);

// EXTERNAL MODULE: external "@material-ui/icons/Share"
var Share_ = __webpack_require__("EAEr");
var Share_default = /*#__PURE__*/__webpack_require__.n(Share_);

// EXTERNAL MODULE: external "@material-ui/icons/Repeat"
var Repeat_ = __webpack_require__("g6aM");
var Repeat_default = /*#__PURE__*/__webpack_require__.n(Repeat_);

// EXTERNAL MODULE: external "@material-ui/icons/FavoriteBorder"
var FavoriteBorder_ = __webpack_require__("pa2r");
var FavoriteBorder_default = /*#__PURE__*/__webpack_require__.n(FavoriteBorder_);

// EXTERNAL MODULE: external "@material-ui/icons/ChatBubbleOutline"
var ChatBubbleOutline_ = __webpack_require__("zt8C");
var ChatBubbleOutline_default = /*#__PURE__*/__webpack_require__.n(ChatBubbleOutline_);

// CONCATENATED MODULE: ./components/post.js
var post_jsx = external_react_default.a.createElement;








const Post = /*#__PURE__*/Object(external_react_["forwardRef"])(({
  displayName,
  username,
  verified,
  text,
  image,
  avatar
}, ref) => {
  return post_jsx("div", {
    className: post_module_default.a.post,
    ref: ref
  }, post_jsx("div", {
    className: post_module_default.a.post__avatar
  }, post_jsx(core_["Avatar"], {
    src: avatar
  })), post_jsx("div", {
    className: post_module_default.a.post__body
  }, post_jsx("div", {
    className: post_module_default.a.post__header
  }, post_jsx("div", {
    className: post_module_default.a.post__headerText
  }, post_jsx("h3", null, displayName, " ", post_jsx("span", {
    className: post_module_default.a.post__headerSpecial
  }, verified && post_jsx(VerifiedUser_default.a, {
    className: post_module_default.a.post__badge
  }), "@", username))), post_jsx("div", {
    className: post_module_default.a.post__headerDescription
  }, post_jsx("p", null, text))), post_jsx("img", {
    src: image,
    alt: ""
  }), post_jsx("div", {
    className: post_module_default.a.post__footer
  }, post_jsx(ChatBubbleOutline_default.a, {
    fontSize: "small"
  }), post_jsx(Repeat_default.a, {
    fontSize: "small"
  }), post_jsx(FavoriteBorder_default.a, {
    fontSize: "small"
  }), post_jsx(Share_default.a, {
    fontSize: "small />"
  }))));
});
/* harmony default export */ var components_post = (Post);
// EXTERNAL MODULE: external "react-flip-move"
var external_react_flip_move_ = __webpack_require__("aR2t");
var external_react_flip_move_default = /*#__PURE__*/__webpack_require__.n(external_react_flip_move_);

// CONCATENATED MODULE: ./components/feed.js
var feed_jsx = external_react_default.a.createElement;







function Feed() {
  //1. Definimos posts y como modificarlo
  const {
    0: posts,
    1: setPosts
  } = Object(external_react_["useState"])([]); //2. En firebase, hacemos fetch de la collection "posts" y los docs que contiene dentro

  Object(external_react_["useEffect"])(() => {
    firebase.collection("posts").onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => doc.data())));
  }, []);
  return feed_jsx("div", {
    className: feed_module_default.a.feed
  }, feed_jsx("div", {
    className: feed_module_default.a.feed__header
  }, feed_jsx("h2", null, "Home")), feed_jsx(tweetBox, null), feed_jsx(external_react_flip_move_default.a, null, posts.map(post => feed_jsx(components_post, {
    key: post.text,
    displayName: post.displayName,
    username: post.username,
    verified: post.verified,
    text: post.text,
    avatar: post.avatar,
    image: post.image
  }))));
}

/* harmony default export */ var feed = (Feed);
// EXTERNAL MODULE: ./styles/styleIndex.module.scss
var styleIndex_module = __webpack_require__("NFUl");
var styleIndex_module_default = /*#__PURE__*/__webpack_require__.n(styleIndex_module);

// EXTERNAL MODULE: ./styles/widgets.module.scss
var widgets_module = __webpack_require__("d3lJ");
var widgets_module_default = /*#__PURE__*/__webpack_require__.n(widgets_module);

// EXTERNAL MODULE: external "react-twitter-embed"
var external_react_twitter_embed_ = __webpack_require__("5dk1");

// CONCATENATED MODULE: ./components/widgets.js
var widgets_jsx = external_react_default.a.createElement;





function Widgets() {
  return widgets_jsx("div", {
    className: widgets_module_default.a.widgets
  }, widgets_jsx("div", {
    className: widgets_module_default.a.widgets__input
  }, widgets_jsx(Search_default.a, {
    className: widgets_module_default.a.widgets__searchIcon
  }), widgets_jsx("input", {
    placeholder: "Search Twitter",
    type: "text"
  }), "\""), widgets_jsx("div", {
    className: widgets_module_default.a.widgets__widgetContainer
  }, widgets_jsx("h2", null, "What's happening?"), widgets_jsx(external_react_twitter_embed_["TwitterTweetEmbed"], {
    tweetId: "30985317521904"
  }), widgets_jsx(external_react_twitter_embed_["TwitterTimelineEmbed"], {
    sourceType: "profile",
    screeName: "myTwitter",
    options: {
      height: 400
    }
  }), widgets_jsx(external_react_twitter_embed_["TwitterShareButton"], {
    url: "https://twitch.com",
    options: {
      text: "#reactIsAwesome",
      via: "Andres"
    }
  })));
}

/* harmony default export */ var widgets = (Widgets);
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;








const Index = () => {
  return pages_jsx("div", null, pages_jsx(head_default.a, null, pages_jsx("title", null, "Next Project - Home")), pages_jsx(container, null, pages_jsx("div", {
    className: styleIndex_module_default.a.app
  }, pages_jsx(components_Sidebar, null), pages_jsx(feed, null), pages_jsx(widgets, null))));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "YZXy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "YeUX":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MailOutline");

/***/ }),

/***/ "aR2t":
/***/ (function(module, exports) {

module.exports = require("react-flip-move");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cbWR":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"feed": "feed_feed__2OVRf",
	"feed__header": "feed_feed__header__3zzxV"
};


/***/ }),

/***/ "d3lJ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"widgets": "widgets_widgets__18jO8",
	"widgets__input": "widgets_widgets__input__1TCQh",
	"widgets__searchIcon": "widgets_widgets__searchIcon__3IPNK",
	"widgets__widgetContainer": "widgets_widgets__widgetContainer__aGEsM"
};


/***/ }),

/***/ "g6aM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Repeat");

/***/ }),

/***/ "iSPQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "kDBC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PermIdentity");

/***/ }),

/***/ "nerw":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sidebar": "sidebar_sidebar__2Ak-Q",
	"sidebar__twitterIcon": "sidebar_sidebar__twitterIcon__3rc0I",
	"sidebar__tweet": "sidebar_sidebar__tweet__Xr3eT"
};


/***/ }),

/***/ "pNaP":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "pa2r":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FavoriteBorder");

/***/ }),

/***/ "rYcJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreHoriz");

/***/ }),

/***/ "s4mK":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Twitter");

/***/ }),

/***/ "u4eR":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tweetBox": "tweetBox_tweetBox__2jExi",
	"tweetBox__input": "tweetBox_tweetBox__input__6LRLl",
	"tweetBox__imageInput": "tweetBox_tweetBox__imageInput__3jxGZ",
	"tweetBox__tweetButton": "tweetBox_tweetBox__tweetButton__X-ROW"
};


/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yWbY":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/BookmarkBorder");

/***/ }),

/***/ "zt8C":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChatBubbleOutline");

/***/ })

/******/ });