import {Component,Input, OnInit } from "@angular/core";
import { TabCategoryService } from './../../../services/tabs/tab-category-service';

@Component({
    selector: "tabs-component",
    templateUrl: "components/modules/tabs/tabs.component.html",
    styleUrls: ["components/modules/tabs/tabs.component.css"]
})
export class Tabs {

    tabindex: number;

    constructor(public tabCategory:TabCategoryService) {
         this.tabindex = 1;
    }

    ngOnInit() {

    }

}
