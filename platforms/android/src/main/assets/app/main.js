"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var http_1 = require("nativescript-angular/http");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var productList_component_1 = require("./components/modules/product-list/productList.component");
var tabs_component_1 = require("./components/modules/tabs/tabs.component");
var common_1 = require('@angular/common');
var tab_category_service_1 = require('./services/tabs/tab-category-service');
var product_list_services_1 = require('./services/product-list/product-list-services');
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("FAB", function () { return require("nativescript-floatingactionbutton").Fab; });
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    AppComponentModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, productList_component_1.ProductList, tabs_component_1.Tabs],
            bootstrap: [app_component_1.AppComponent],
            imports: [platform_1.NativeScriptModule, http_1.NativeScriptHttpModule],
            providers: [tab_category_service_1.TabCategoryService, product_list_services_1.ProductListService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponentModule);
    return AppComponentModule;
}());
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=main.js.map