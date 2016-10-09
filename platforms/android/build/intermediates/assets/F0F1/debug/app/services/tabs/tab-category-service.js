/**
 * @services - tab categories service
 * Author : Sandeep Kumar
 */
"use strict";
/**
 * load all required dependencies
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable'); // Grab everything with import 'rxjs/Rx';
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/fromEvent');
/**
 * Injectable is decorator - Declares that a class has dependencies that should be injected into the constructor when the dependency injector is creating an instance of this class.
 */
var TabCategoryService = (function () {
    function TabCategoryService(http) {
        this.http = http;
    }
    TabCategoryService.prototype.getCategories = function () {
        var _this = this;
        return this.http.get('~/json/tab-categories.json').map(function (res) {
            _this.categories = res.json();
            return _this.categories;
        }).catch(this.handleError);
    };
    TabCategoryService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    TabCategoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TabCategoryService);
    return TabCategoryService;
}());
exports.TabCategoryService = TabCategoryService;
//# sourceMappingURL=tab-category-service.js.map