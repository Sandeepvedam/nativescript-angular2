import {Component,Input, OnInit, ViewChild, ElementRef} from "@angular/core";
import {View} from 'ui/core/view';
import { Page } from "ui/page";
import { Animation } from "ui/animation";
import {AnimationCurve} from "ui/enums";
import {Product} from "../../../models/Product";
import { ProductListService } from './../../../services/product-list/product-list-services';

@Component({
    selector: "product-list",
    templateUrl: "components/modules/product-list/product-list.html",
    styleUrls: ["components/modules/product-list/product-list.css"]
})
export class ProductList {

    public products: Array<Product>;
    public isFabOpen: boolean;
    public isMenuFabButton: boolean;

    @ViewChild("wishlistFabButton") wishlistFabButton: ElementRef;
    @ViewChild("reviewFabButton") reviewFabButton: ElementRef;
    @ViewChild("checkoutFabButton") checkoutFabButton: ElementRef;
    @ViewChild("fab") fab: ElementRef;


    constructor(public productListService : ProductListService) {
        this.isFabOpen = false;
        this.isMenuFabButton = true;
    }

    ngOnInit() {
        this.productListService.getProductsList().subscribe(data => {
            this.products = data;
            for (var i = 0; i < 5; i++) {
                this.products.push({
                    productName: 'Test product ' + (i+1),
                    productImage: 'http://lorempixel.com/600/600/food/',
                    productPrice: '$ 10.00',
                    productTags: ['chicken', 'vegetable', 'fresh'],
                    productShortDescription: 'short product description',
                    iconImage:'~/images/plusIconGreyColor.png'
                });
            }
        });
    }

    toggleNav(id){


        if (this.isFabOpen === true) {
            let animations = [
                { target: this.fab.nativeElement, rotate: 0, duration: 400, delay: 0 },
                { target: this.wishlistFabButton.nativeElement, translate: { x: 0, y: 0 }, opacity: 0, duration: 400, delay: 0 },
                { target: this.reviewFabButton.nativeElement, translate: { x: 0, y: 0 }, opacity: 0, duration: 400, delay: 0 },
                { target: this.checkoutFabButton.nativeElement, translate: { x: 0, y: 0 }, opacity: 0, duration: 400, delay: 0 }
            ];

            var a = new Animation(animations);

            a.play()
                .then(() => {
                    if(id !== "Menu"){
                        //this._router.navigate([id])
                    }
                    this.isFabOpen = false;
                })
                .catch(function (e) {
                    console.log(e.message);
                });
        }
        else {
            let animations = [
                { target: this.fab.nativeElement, rotate: 45, duration: 400, delay: 0 },
                { target: this.wishlistFabButton.nativeElement, translate: { x: 0, y: -60 }, opacity: 1, duration: 400, delay: 0 },
                { target: this.reviewFabButton.nativeElement, translate: { x: 0, y: -120 }, opacity: 1, duration: 440, delay: 0 },
                { target: this.checkoutFabButton.nativeElement, translate: { x: 0, y: -180 }, opacity: 1, duration: 440, delay: 0  }
            ];

            let a = new Animation(animations);

            a.play()
                .then(() => {
                    this.isFabOpen = true;
                })
                .catch(function (e) {
                    console.log(e.message);
                });
        }

        if(id == 'Menu'){
            this.isMenuFabButton = false;
        }else if(id == 'Close'){
            this.isMenuFabButton = true;
        }else{
            this.isMenuFabButton = true;
        }

    }

   /* toggleNav(fabItem){
        console.log('It is '+fabItem);
    }*/

}
