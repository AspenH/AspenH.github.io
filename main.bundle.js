webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_app_component_app_component__ = __webpack_require__("../../../../../src/app/components/app.component/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_my_passion_my_passion_component__ = __webpack_require__("../../../../../src/app/components/my-passion/my-passion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_spotify_ideas_spotify_ideas_component__ = __webpack_require__("../../../../../src/app/components/spotify-ideas/spotify-ideas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_about_me_about_me_component__ = __webpack_require__("../../../../../src/app/components/about-me/about-me.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'aboutme', pathMatch: 'full' },
    { path: 'aboutme', component: __WEBPACK_IMPORTED_MODULE_5__components_my_passion_my_passion_component__["a" /* MyPassionComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_6__components_spotify_ideas_spotify_ideas_component__["a" /* SpotifyIdeasComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_7__components_about_me_about_me_component__["a" /* AboutMeComponent */] },
    { path: '**', redirectTo: 'aboutme', pathMatch: 'full' } // was redirect to mypassion
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_app_component_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_my_passion_my_passion_component__["a" /* MyPassionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_spotify_ideas_spotify_ideas_component__["a" /* SpotifyIdeasComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_about_me_about_me_component__["a" /* AboutMeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__components_app_component_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about-me/about-me.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, ".content {\r\n  width: 100%;\r\n  min-height: -webkit-fill-available;\r\n  min-height: -moz-available;\r\n  min-height: stretch;\r\n  background-color: #ED7340;\r\n}\r\n\r\n#hr {\r\n  background-color: #ffffff;\r\n  border: 1px solid #ffffff;\r\n  height: 1px;\r\n  width: 80%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n#infoArea {\r\n  margin-top: 25px;\r\n  width: 75%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n#infoList {\r\n  color: #ffffff;\r\n  font-family: 'Roboto', sans-serif;\r\n  list-style: none;\r\n  text-align: center;\r\n}\r\n\r\n#infoList li {\r\n  padding-bottom: 20px;\r\n  /*font-size: 18pt;*/\r\n  font-size: 4vmin;\r\n}\r\n\r\n#infoList a {\r\n  text-decoration: underline;\r\n  color: #ffffff;\r\n}\r\n\r\n#infoList a:visited {\r\n  color: inherit;\r\n}\r\n\r\n#nameText {\r\n  color: #ffffff;\r\n  font-family: 'Roboto', sans-serif;\r\n  /*font-size: 42pt;*/\r\n  font-size: 10vmin;\r\n  text-align: center;\r\n  padding-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#photo {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  /*width: 500px;\r\n  height: 500px;*/\r\n  /*border-radius: 50%;*/\r\n}\r\n\r\n#photoArea {\r\n  padding-top: 25px;\r\n}\r\n\r\n\r\n/* MEDIA QUERIES */\r\n\r\n/*Tablets 768*/\r\n@media (max-width: 933px){\r\n  #photo {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-width: 400px;;\r\n  }\r\n\r\n}\r\n\r\n/*mobiles*/\r\n@media screen and (max-width: 460px){\r\n  #photo {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-width: 300px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about-me/about-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=content>\n  <div id=\"nameText\">\n    Photo Gallery\n  </div>\n\n  <div id=\"hr\">\n  </div>\n\n  <div id=\"infoArea\">\n    <ul id=\"infoList\">\n      <li><img id=\"photo\" src=\"https://imgur.com/KzyHd1F.png\"/></li>\n      <li><img id=\"photo\" src=\"https://imgur.com/FVW3Mae.png\"/></li>\n      <li><img id=\"photo\" src=\"https://imgur.com/kjymQ67.png\"/></li>\n      <li><img id=\"photo\" src=\"https://imgur.com/67irdxi.png\"/></li>\n      <li><img id=\"photo\" src=\"https://imgur.com/nisY9DM.png\"/></li>\n    </ul>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/about-me/about-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'about-me',
            template: __webpack_require__("../../../../../src/app/components/about-me/about-me.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about-me/about-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app.component/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app.component/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header></header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/app.component/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/components/app.component/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/app.component/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, "#greeting {\r\n  display: inline-block;\r\n  width: 60%;\r\n  height: 100%;\r\n  margin-right: -4px;\r\n}\r\n\r\nh1 {\r\n  color: #ffffff;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 32pt;\r\n  /*background-color: red;*/\r\n  text-align: center;\r\n  margin-top: 25px;\r\n}\r\n\r\n.header {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n  min-height: 100px;\r\n  background-color: #ED7340;\r\n  /*border-bottom-width: 1px;\r\n  border-bottom-color: #1ED760;\r\n  border-bottom-style: solid;*/\r\n}\r\n\r\n#navigation {\r\n  display: inline-block;\r\n  /*background-color: blue;*/\r\n  height: 100%;\r\n  width: 40%;\r\n  margin-right: -4px;\r\n}\r\n\r\n#navlist {\r\n  text-align: center;\r\n  /*background-color: orange;*/\r\n  margin-top: 45px;\r\n  /*margin-top: 2.5em;*/\r\n}\r\n\r\n#navlist li {\r\n  color: #ecebe8;\r\n  font-family: 'Roboto', sans-serif;\r\n  display: inline-block;\r\n  list-style-type: none;\r\n  text-decoration: none;\r\n  font-size: 15pt;\r\n  padding-right: 20px;\r\n}\r\n\r\n#navlist li:hover {\r\n  /*color: gray;  might want to edit this to something else for third highlight FIX THIS SOON */\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n/* MEDIA QUERIES */\r\n\r\n/*Tablets 768*/\r\n@media (max-width: 933px){\r\n  .header {\r\n    display: table;\r\n    width: 100%;\r\n    min-height: 100px;\r\n    background-color: #ED7340;\r\n    /*border-bottom-width: 1px;\r\n    border-bottom-color: #1ED760;\r\n    border-bottom-style: solid;*/\r\n  }\r\n\r\n  #greeting {\r\n    display: table-row;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  h1 {\r\n    display: block;\r\n    color: #ffffff;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 26pt;\r\n    /*background-color: red;*/\r\n    text-align: center;\r\n    margin-top: 18px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n  #navigation {\r\n    display: table-row;\r\n    height: 100%;\r\n  }\r\n\r\n\r\n    #navlist {\r\n      text-align: center;\r\n      /*background-color: orange;*/\r\n      display: block;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      margin-top: 45px;\r\n      /*margin-top: 2.5em;*/\r\n    }\r\n\r\n}\r\n\r\n/*mobiles*/\r\n@media screen and (max-width: 460px){\r\n  .header {\r\n    display: table;\r\n    width: 100%;\r\n    min-height: 100px;\r\n    background-color: #ED7340;\r\n    /*border-bottom-width: 1px;\r\n    border-bottom-color: #1ED760;\r\n    border-bottom-style: solid;*/\r\n  }\r\n\r\n  #greeting {\r\n    display: table-row;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  h1 {\r\n    color: #ffffff;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 32pt;\r\n    /*background-color: red;*/\r\n    text-align: center;\r\n    margin-top: 18px;\r\n  }\r\n\r\n  #navigation {\r\n    display: table-row;\r\n    height: 100%;\r\n  }\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div id=\"greeting\">\n    <h1>Haylie Ridenhour</h1>\n  </div>\n\n  <div id=\"navigation\">\n    <ul id=\"navlist\">\n      <li routerLink=\"/aboutme\" onclick=\"toggleClass(this)\">About Me</li>\n      <li routerLink=\"/services\" onclick=\"toggleClass(this)\">Services</li>\n      <li routerLink=\"/gallery\" onclick=\"toggleClass(this)\">Gallery</li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/my-passion/my-passion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, ".content {\r\n  width: 100%;\r\n  min-height: -webkit-fill-available;\r\n  min-height: -moz-available;\r\n  min-height: stretch;\r\n  background-color: #ED7340;\r\n}\r\n\r\n#hr {\r\n  background-color: #ffffff;\r\n  border: 1px solid #ffffff;\r\n  height: 1px;\r\n  width: 80%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n#hashtagArea {\r\n  color: #ffffff;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 24pt;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n#logo {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-bottom: 8px;\r\n  padding-top: 8px;\r\n  width: 400px;\r\n  height: 300px;\r\n  \r\n}\r\n\r\n#passionTextArea {\r\n  color: #ffffff;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 14pt;\r\n  width: 75%;\r\n  height: auto;\r\n  /*background-color: blue;*/\r\n  text-align: left;\r\n  margin-top: 25px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n#passionTextArea h1 {\r\n  text-align: center;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 24pt;\r\n}\r\n\r\n#spotifyLogoArea {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/my-passion/my-passion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=content>\n  <div id=\"spotifyLogoArea\">\n    <img src=\"https://imgur.com/k8tAwSS.png\" id=\"logo\"/>\n  </div>\n\n  <div id=\"hr\">\n  </div>\n\n  <div id=\"passionTextArea\">\n    <p>\n      I’ve always loved makeup. As a little girl, I’d sit and watch, fascinated, as my mom applied bright red polish on her nails. Then, I’d beg her to do mine as well. She’d take my hands, and, gently, paint my nails a soft pink shade (red was too much for a child, she said).\n      <br><br>\n      Back then, makeup seemed magical. The way it can transform a face and enhance your best features had something otherworldly about it. I couldn’t wait to grow up and be able to wear it. When I finally did, I felt so grown-up.\n      <br><br>\n      Just like clothes, makeup allows me to visually express my personality and moods. When I’m feeling romantic, I’ll swipe on pink eyeshadow and gloss. Sexy? Soft smokey eye and red lips.\n      <br><br>\n      With so many colours, textures, finishes, and techniques to try, it allows me to get as creative as I’d like, and to fully express my inner world.\n      <br><br>\n      I love applying makeup. Those minutes in the morning when I sit down to put my face on are so relaxing. It’s a little way to pamper myself at the beginning of every day.\n      <br><br>\n      Makeup has the power to transform a face, and let the whole world know who you are. How amazing is that?\n      <br><br>\n    </p>\n  </div>\n\n  <div id=\"hashtagArea\">\n    <h1>Contact: Haylie@gmail.com</h1>\n    <br><br>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/my-passion/my-passion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPassionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyPassionComponent = (function () {
    function MyPassionComponent() {
    }
    MyPassionComponent.prototype.ngOnInit = function () {
    };
    MyPassionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-passion',
            template: __webpack_require__("../../../../../src/app/components/my-passion/my-passion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/my-passion/my-passion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyPassionComponent);
    return MyPassionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/spotify-ideas/spotify-ideas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, ".content {\r\n  width: 100%;\r\n  min-height: -webkit-fill-available;\r\n  min-height: -moz-available;\r\n  min-height: stretch;\r\n  background-color: #ED7340;\r\n}\r\n\r\n#hr {\r\n  background-color: #ffffff;\r\n  border: 1px solid #ffffff;\r\n  height: 1px;\r\n  width: 80%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n#ideaContentArea {\r\n  width: 80%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n.ideaArea {\r\n  width: 100%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-top: 20px;\r\n}\r\n\r\n.ideaList {\r\n  font-family: 'Roboto', sans-serif;\r\n  color: #ffffff;\r\n  list-style-type: disk;\r\n  list-style-position: inside;\r\n  text-align: center;\r\n}\r\n\r\n.ideaList li {\r\n  padding-bottom: 10px;\r\n  font-size: 4vmin;\r\n}\r\n\r\n.ideaTitle {\r\n  text-align: center;\r\n  font-family: 'Roboto', sans-serif;\r\n  color: #ffffff;\r\n  font-style: italic;\r\n  font-size: 6vmin;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n#ideaHeadingArea {\r\n  color: #ffffff;\r\n  font-family: 'Roboto', sans-serif;\r\n  text-align: center;\r\n  padding-top: 25px;\r\n  font-size: 4vmin;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n#lightbulbArea {\r\n  width: 100%;\r\n}\r\n\r\n#lightbulb {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-top: 25px;\r\n  /*width: 300px;\r\n  height: 300px;*/\r\n  width: 20vmax;\r\n  height: 20vmax;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/spotify-ideas/spotify-ideas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=content>\n  <div id=\"lightbulbArea\">\n    <img src=\"https://imgur.com/jdSkJvt.png\" id=\"lightbulb\"/>\n  </div>\n\n  <div id=\"ideaHeadingArea\">\n    A collection of my services offered\n  </div>\n\n  <div id=\"hr\">\n  </div>\n\n  <div id=\"ideaContentArea\">\n    <div class=\"ideaArea\">\n      <p class=\"ideaTitle\">- Faces -</p>\n      <ul class=\"ideaList\">\n        <li>Eyebrow Treatment &nbsp;&nbsp;&nbsp; $15</li>\n        <li>Lip Treatment &nbsp;&nbsp;&nbsp; $15</li>\n        <li>Highlights &nbsp;&nbsp;&nbsp; $15</li>\n        <li>Full Facial &nbsp;&nbsp;&nbsp; $40</li>\n      </ul>\n    </div>\n\n    <div class=\"ideaArea\">\n      <p class=\"ideaTitle\">- Hair -</p>\n      <ul class=\"ideaList\">\n        <li>Braids &nbsp;&nbsp;&nbsp; $10</li>\n        <li>Curls &nbsp;&nbsp;&nbsp; $10</li>\n        <li>Custom &nbsp;&nbsp;&nbsp; $20</li>\n      </ul>\n    </div>\n\n    <div class=\"ideaArea\">\n      <p class=\"ideaTitle\">- Outfits -</p>\n      <ul class=\"ideaList\">\n        <li>Closet Selection &nbsp;&nbsp;&nbsp; $15</li>\n        <li>Full Shopping Day with Haylie &nbsp;&nbsp;&nbsp; $30</li>\n      </ul>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/spotify-ideas/spotify-ideas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotifyIdeasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpotifyIdeasComponent = (function () {
    function SpotifyIdeasComponent() {
    }
    SpotifyIdeasComponent.prototype.ngOnInit = function () {
    };
    SpotifyIdeasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'spotify-ideas',
            template: __webpack_require__("../../../../../src/app/components/spotify-ideas/spotify-ideas.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/spotify-ideas/spotify-ideas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpotifyIdeasComponent);
    return SpotifyIdeasComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map