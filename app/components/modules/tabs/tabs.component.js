"use strict";
var core_1 = require("@angular/core");
var tab_category_service_1 = require('./../../../services/tabs/tab-category-service');
var Tabs = (function () {
    function Tabs(tabCategory) {
        this.tabCategory = tabCategory;
        this.tabindex = 1;
    }
    Tabs.prototype.ngOnInit = function () {
    };
    Tabs = __decorate([
        core_1.Component({
            selector: "tabs-component",
            templateUrl: "components/modules/tabs/tabs.component.html",
            styleUrls: ["components/modules/tabs/tabs.component.css"]
        }), 
        __metadata('design:paramtypes', [tab_category_service_1.TabCategoryService])
    ], Tabs);
    return Tabs;
}());
exports.Tabs = Tabs;
//# sourceMappingURL=tabs.component.js.map