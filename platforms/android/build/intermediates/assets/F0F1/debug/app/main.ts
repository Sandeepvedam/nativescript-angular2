// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import {NativeScriptHttpModule} from "nativescript-angular/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import {ProductList} from "./components/modules/product-list/productList.component";
import {Tabs} from "./components/modules/tabs/tabs.component";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { TabCategoryService } from './services/tabs/tab-category-service';
import { ProductListService } from './services/product-list/product-list-services';
import {registerElement} from "nativescript-angular/element-registry";
registerElement("FAB", () => require("nativescript-floatingactionbutton").Fab);

@NgModule({
    declarations: [AppComponent,ProductList,Tabs],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,NativeScriptHttpModule],
    providers: [TabCategoryService,ProductListService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);