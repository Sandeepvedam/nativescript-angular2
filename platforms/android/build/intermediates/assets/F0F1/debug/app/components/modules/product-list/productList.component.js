"use strict";
var core_1 = require("@angular/core");
var animation_1 = require("ui/animation");
var product_list_services_1 = require('./../../../services/product-list/product-list-services');
var ProductList = (function () {
    function ProductList(productListService) {
        this.productListService = productListService;
        this.isFabOpen = false;
        this.isMenuFabButton = true;
    }
    ProductList.prototype.ngOnInit = function () {
        var _this = this;
        this.productListService.getProductsList().subscribe(function (data) {
            _this.products = data;
            for (var i = 0; i < 5; i++) {
                _this.products.push({
                    productName: 'Test product ' + (i + 1),
                    productImage: 'http://lorempixel.com/600/600/food/',
                    productPrice: '$ 10.00',
                    productTags: ['chicken', 'vegetable', 'fresh'],
                    productShortDescription: 'short product description',
                    iconImage: '~/images/plusIconGreyColor.png'
                });
            }
        });
    };
    ProductList.prototype.toggleNav = function (id) {
        var _this = this;
        if (this.isFabOpen === true) {
            var animations = [
                { target: this.fab.nativeElement, rotate: 0, duration: 400, delay: 0 },
                { target: this.wishlistFabButton.nativeElement, translate: { x: 0, y: 0 }, opacity: 0, duration: 400, delay: 0 },
                { target: this.reviewFabButton.nativeElement, translate: { x: 0, y: 0 }, opacity: 0, duration: 400, delay: 0 },
                { target: this.checkoutFabButton.nativeElement, translate: { x: 0, y: 0 }, opacity: 0, duration: 400, delay: 0 }
            ];
            var a = new animation_1.Animation(animations);
            a.play()
                .then(function () {
                if (id !== "Menu") {
                }
                _this.isFabOpen = false;
            })
                .catch(function (e) {
                console.log(e.message);
            });
        }
        else {
            var animations = [
                { target: this.fab.nativeElement, rotate: 45, duration: 400, delay: 0 },
                { target: this.wishlistFabButton.nativeElement, translate: { x: 0, y: -60 }, opacity: 1, duration: 400, delay: 0 },
                { target: this.reviewFabButton.nativeElement, translate: { x: 0, y: -120 }, opacity: 1, duration: 440, delay: 0 },
                { target: this.checkoutFabButton.nativeElement, translate: { x: 0, y: -180 }, opacity: 1, duration: 440, delay: 0 }
            ];
            var a_1 = new animation_1.Animation(animations);
            a_1.play()
                .then(function () {
                _this.isFabOpen = true;
            })
                .catch(function (e) {
                console.log(e.message);
            });
        }
        if (id == 'Menu') {
            this.isMenuFabButton = false;
        }
        else if (id == 'Close') {
            this.isMenuFabButton = true;
        }
        else {
            this.isMenuFabButton = true;
        }
    };
    __decorate([
        core_1.ViewChild("wishlistFabButton"), 
        __metadata('design:type', core_1.ElementRef)
    ], ProductList.prototype, "wishlistFabButton", void 0);
    __decorate([
        core_1.ViewChild("reviewFabButton"), 
        __metadata('design:type', core_1.ElementRef)
    ], ProductList.prototype, "reviewFabButton", void 0);
    __decorate([
        core_1.ViewChild("checkoutFabButton"), 
        __metadata('design:type', core_1.ElementRef)
    ], ProductList.prototype, "checkoutFabButton", void 0);
    __decorate([
        core_1.ViewChild("fab"), 
        __metadata('design:type', core_1.ElementRef)
    ], ProductList.prototype, "fab", void 0);
    ProductList = __decorate([
        core_1.Component({
            selector: "product-list",
            templateUrl: "components/modules/product-list/product-list.html",
            styleUrls: ["components/modules/product-list/product-list.css"]
        }), 
        __metadata('design:paramtypes', [product_list_services_1.ProductListService])
    ], ProductList);
    return ProductList;
}());
exports.ProductList = ProductList;
//# sourceMappingURL=productList.component.js.map