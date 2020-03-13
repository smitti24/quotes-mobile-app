webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavouritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotes__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quote_quote__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavouritesPage = /** @class */ (function () {
    function FavouritesPage(navCtrl, navParams, favouriteService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favouriteService = favouriteService;
        this.modalCtrl = modalCtrl;
    }
    FavouritesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavouritesPage');
    };
    FavouritesPage.prototype.ionViewWillEnter = function () {
        this.favouriteQuotes = this.favouriteService.getFavouriteQuotes();
        console.log(this.favouriteQuotes);
    };
    FavouritesPage.prototype.presentModal = function (selectedQuote) {
        var _this = this;
        console.log('Selected quote:', selectedQuote);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__quote_quote__["a" /* QuotePage */], selectedQuote);
        modal.present();
        modal.onDidDismiss(function (remove) {
            if (remove) {
                _this.onUnFavourite(selectedQuote);
            }
        });
    };
    FavouritesPage.prototype.onUnFavourite = function (selectedQuote) {
        this.favouriteService.removeQuoteFromFavourites(selectedQuote);
        var position = this.favouriteQuotes.findIndex(function (quoteElement) {
            return quoteElement.id == selectedQuote.id;
        });
        this.favouriteQuotes.splice(position, 1);
    };
    FavouritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favourites',template:/*ion-inline-start:"A:\Development\Ionic 2 Application\quotes-app\src\pages\favourites\favourites.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Favourite Quotes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<!-- <ion-card *ngFor="let quote of favouriteQuotes; let i = index">\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="https://image.flaticon.com/icons/svg/148/148841.svg">  \n        </ion-avatar>\n        <h2>{{quote.person}}</h2>\n    </ion-item>\n\n    <ion-card-content>\n        <ion-row>\n          <ion-col col-12>\n              <p>{{quote.text}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 align-right>\n              <button ion-button (click)="presentModal(quote)" clear>Unfavourite</button>\n          </ion-col>\n        </ion-row>\n        \n      </ion-card-content>\n\n</ion-card> -->\n\n<ion-list>\n    <ion-item-sliding *ngFor="let quote of favouriteQuotes; let i = index">\n        <ion-item >\n            <ion-avatar item-start>\n                <img src="https://image.flaticon.com/icons/svg/148/148841.svg">  \n            </ion-avatar>\n            <h2>{{quote.person}}</h2>\n            <ion-row>\n                <ion-col col-12>\n                    <p>{{quote.text}}</p>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col col-12 align-right>\n                    <button ion-button (click)="presentModal(quote)" clear>Unfavourite</button>\n                </ion-col>\n              </ion-row>\n        </ion-item>\n        <ion-item-options side="right">\n            <button ion-button color="danger" (click)="onUnFavourite(quote)">\n              <ion-icon name="trash"></ion-icon>\n              Unfavourite\n            </button>\n          </ion-item-options>\n    </ion-item-sliding>\n  \n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"A:\Development\Ionic 2 Application\quotes-app\src\pages\favourites\favourites.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _d || Object])
    ], FavouritesPage);
    return FavouritesPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=favourites.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Quote } from '../../data/quote.interface';
/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuotePage = /** @class */ (function () {
    function QuotePage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    QuotePage.prototype.ionViewDidLoad = function () {
        this.person = this.navParams.get('person');
        this.text = this.navParams.get('text');
        // console.log('ionViewDidLoad QuotePage: ' + this.selectedQuote);
    };
    QuotePage.prototype.onClose = function (remove) {
        if (remove === void 0) { remove = false; }
        this.viewCtrl.dismiss(remove);
    };
    QuotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quote',template:/*ion-inline-start:"A:\Development\Ionic 2 Application\quotes-app\src\pages\quote\quote.html"*/'<!--\n  Generated template for the QuotePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="https://image.flaticon.com/icons/svg/122/122478.svg">\n    </ion-avatar>\n    <ion-title>{{ person }}</ion-title>\n  </ion-item>\n\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>{{ text }}</p>\n  <ion-row>\n    <ion-col col-6 text-left>\n        <button ion-button clear align-right (click)="onClose()">Close</button>\n    </ion-col>\n    <ion-col text-right>\n      <button ion-button color="danger" clear align-right (click)="onClose(true)">Unfavourite</button>\n    </ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"A:\Development\Ionic 2 Application\quotes-app\src\pages\quote\quote.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], QuotePage);
    return QuotePage;
}());

//# sourceMappingURL=quote.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_quotes__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotes_quotes__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * Generated class for the LibraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LibraryPage = /** @class */ (function () {
    function LibraryPage() {
        this.quotesPage = __WEBPACK_IMPORTED_MODULE_2__quotes_quotes__["a" /* QuotesPage */];
    }
    LibraryPage.prototype.ngOnInit = function () {
        this.quoteCollection = __WEBPACK_IMPORTED_MODULE_1__data_quotes__["a" /* default */];
    };
    LibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-library',template:/*ion-inline-start:"A:\Development\Ionic 2 Application\quotes-app\src\pages\library\library.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Quotes library</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h3 text-center>Selecte your favorite quote</h3>\n  <ion-list>\n    <button ion-item *ngFor="let quoteGroup of quoteCollection" [navPush]="quotesPage" [navParams]="quoteGroup">\n      <ion-icon [name]="quoteGroup.icon" item-left></ion-icon>\n      <h2>{{quoteGroup.category | uppercase}}</h2>\n      <p>{{quoteGroup.quotes.length}} Quotes</p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"A:\Development\Ionic 2 Application\quotes-app\src\pages\library\library.html"*/,
        })
    ], LibraryPage);
    return LibraryPage;
}());

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_quotes__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotesPage = /** @class */ (function () {
    function QuotesPage(navParams, alertCtrl, quotesService) {
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.quotesService = quotesService;
    }
    // ionViewDidLoad(){
    //   this.quoteGroup = this.navParams.data;
    // }
    QuotesPage.prototype.ngOnInit = function () {
        this.quoteGroup = this.navParams.data;
    };
    QuotesPage.prototype.onAddToFavourite = function (selectedQuote) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Add Quote',
            message: 'Are you sure you want to add the quote?',
            buttons: [
                {
                    text: 'NOPE',
                    handler: function () {
                        _this.quotesService.removeQuoteFromFavourites(selectedQuote);
                    },
                    role: 'cancel'
                },
                {
                    text: 'Yebo Yes',
                    handler: function () {
                        _this.quotesService.addQuoteToFavourites(selectedQuote);
                    }
                }
            ]
        });
        alert.present();
    };
    QuotesPage.prototype.onAddRemoveFromFavourites = function (selectedQuote) {
        this.quotesService.removeQuoteFromFavourites(selectedQuote);
    };
    QuotesPage.prototype.isFavourite = function (selectedQuote) {
        this.quotesService.isQuoteFavourite(selectedQuote);
    };
    QuotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quotes',template:/*ion-inline-start:"A:\Development\Ionic 2 Application\quotes-app\src\pages\quotes\quotes.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <ion-icon [name]="quoteGroup.icon" item-left></ion-icon> {{quoteGroup.category | uppercase}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let quote of quoteGroup.quotes; let i = index">\n    <ion-item>\n        <ion-avatar item-start>\n            <img src="https://image.flaticon.com/icons/svg/122/122478.svg">  \n        </ion-avatar>\n        <h2>{{quote.person}}</h2>\n    </ion-item>\n\n    <ion-card-content>\n        <ion-row>\n          <ion-col col-12>\n              #{{ i + 1 }}<p>{{quote.text}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n          </ion-col>\n          <ion-col text-right>\n            <button *ngIf="!quotesService.isQuoteFavourite(quote);else alreadyAFavorite" ion-button clear small (click)="onAddToFavourite(quote)">Favorite</button>\n            <ng-template #alreadyAFavorite>\n            <button ion-button clear color="danger" small (click)="onAddRemoveFromFavourites(quote)">Unfavorite</button>\n            </ng-template>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"A:\Development\Ionic 2 Application\quotes-app\src\pages\quotes\quotes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__services_quotes__["a" /* QuotesService */]])
    ], QuotesPage);
    return QuotesPage;
}());

//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/favourites/favourites.module": [
		275,
		4
	],
	"../pages/library/library.module": [
		276,
		3
	],
	"../pages/quote/quote.module": [
		277,
		2
	],
	"../pages/quotes/quotes.module": [
		278,
		1
	],
	"../pages/settings/settings.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favourites_favourites__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__library_library__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favouritesPage = __WEBPACK_IMPORTED_MODULE_2__favourites_favourites__["a" /* FavouritesPage */];
        this.libraryPage = __WEBPACK_IMPORTED_MODULE_3__library_library__["a" /* LibraryPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',
            template: "\n    <ion-tabs selectedIndex=\"1\">\n      <ion-tab [root]=\"favouritesPage\" tabTitle=\"Favourites\" tabIcon=\"star\"></ion-tab>\n      <ion-tab [root]=\"libraryPage\" tabTitle=\"Library\" tabIcon=\"book\"></ion-tab>\n    </ion-tabs>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"A:\Development\Ionic 2 Application\quotes-app\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"A:\Development\Ionic 2 Application\quotes-app\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_library_library__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_quotes_quotes__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_favourites_favourites__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_quote_quote__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_quotes__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_quotes_quotes__["a" /* QuotesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_quote_quote__["a" /* QuotePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/favourites/favourites.module#FavouritesPageModule', name: 'FavouritesPage', segment: 'favourites', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/library/library.module#LibraryPageModule', name: 'LibraryPage', segment: 'library', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quote/quote.module#QuotePageModule', name: 'QuotePage', segment: 'quote', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quotes/quotes.module#QuotesPageModule', name: 'QuotesPage', segment: 'quotes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_quotes_quotes__["a" /* QuotesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_favourites_favourites__["a" /* FavouritesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_quote_quote__["a" /* QuotePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__services_quotes__["a" /* QuotesService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        category: 'inspirational',
        quotes: [
            {
                id: '1',
                person: 'Theodore Roosevelt',
                text: 'Believe you can and you\'re halfway there'
            },
            {
                id: '2',
                person: 'Norman Vincent Peale',
                text: 'Change your thoughts and you change your world.'
            },
            {
                id: '3',
                person: 'Robert H. Schuller',
                text: 'What great thing would you attempt if you knew you could not fail?'
            }
        ],
        icon: 'brush'
    },
    {
        category: 'ability',
        quotes: [
            {
                id: '4',
                person: 'John Wooden',
                text: 'Ability may get you to the top, but it takes character to keep you there.'
            },
            {
                id: '5',
                person: 'Robert Frost',
                text: 'Education is the ability to listen to almost anything without losing your temper.'
            }
        ],
        icon: 'bicycle'
    },
    {
        category: 'enthusiasm',
        quotes: [
            {
                id: '6',
                person: 'Benjamin Disraeli',
                text: 'Every product of genius must be the product of enthusiasm.'
            },
            {
                id: '7',
                person: 'Norman Vincent Peale',
                text: 'Enthusiasm releases the drive to carry you over obstacles and adds significance to all you do.'
            }
        ],
        icon: 'battery-charging'
    },
    {
        category: 'motivational',
        quotes: [
            {
                id: '8',
                person: 'Jim Rohn',
                text: 'Either you run the day or the day runs you.'
            },
            {
                id: '9',
                person: 'Donna Brazile',
                text: 'I was motivated to be different in part because I was different.'
            }
        ],
        icon: 'body'
    }
]);
//# sourceMappingURL=quotes.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"A:\Development\Ionic 2 Application\quotes-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"A:\Development\Ionic 2 Application\quotes-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesService; });
var QuotesService = /** @class */ (function () {
    function QuotesService() {
        this.favouriteQuotes = [];
    }
    QuotesService.prototype.addQuoteToFavourites = function (quote) {
        this.favouriteQuotes.push(quote);
        console.log(this.favouriteQuotes);
    };
    QuotesService.prototype.removeQuoteFromFavourites = function (quote) {
        //To get the position of the quote in the array we want to remove.
        //findIndex expects to get an function as an argument. 
        var position = this.favouriteQuotes.findIndex(function (quoteElement) {
            return quoteElement.id == quote.id;
        });
        this.favouriteQuotes.splice(position, 1);
        console.log(this.favouriteQuotes);
    };
    //Gives us back the array. Slice => Creates a copy of the array.
    //Copied in order to not directly edit the favouriteQuotes array.
    QuotesService.prototype.getFavouriteQuotes = function () {
        return this.favouriteQuotes.slice();
    };
    QuotesService.prototype.isQuoteFavourite = function (quote) {
        return this.favouriteQuotes.find(function (quoteElement) {
            return quoteElement.id == quote.id;
        });
    };
    return QuotesService;
}());

//# sourceMappingURL=quotes.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map