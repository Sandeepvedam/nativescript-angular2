/**
 * @services - product list service
 * Author : Sandeep Kumar
 */

/**
 * load all required dependencies
 */
import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';                       // Grab everything with import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromEvent';


/**
 * Injectable is decorator - Declares that a class has dependencies that should be injected into the constructor when the dependency injector is creating an instance of this class.
 */
@Injectable()
export class ProductListService  {

        products : Array<Object>;

        constructor(private http: Http) {

        }

        public getProductsList(){
            return this.http.get("~/json/product-list.json").map((res:Response) => {
                this.products = res.json();
                return this.products;
            }).catch(this.handleError);
        }

        private handleError(error: any) {
            console.error(error);
            return Observable.throw(error.json().error || 'Server error');
        }

}
