"use strict";
var core_1 = require('@angular/core');
var DataItem = (function () {
    function DataItem(id, name) {
        this.id = id;
        this.name = name;
    }
    return DataItem;
}());
var ListTest = (function () {
    function ListTest() {
        this.myItems = [];
        this.counter = 0;
        for (var i = 0; i < 50; i++) {
            this.myItems.push(new DataItem(i, "data item " + i));
            this.counter = i;
        }
    }
    ListTest.prototype.onItemTap = function (args) {
        console.log("------------------------ ItemTapped: " + args.index);
    };
    ListTest = __decorate([
        core_1.Component({
            selector: 'list-test',
            styleUrls: ['components/product/list-test.css'],
            template: "\n    <ListView [items]=\"myItems\" (itemTap)=\"onItemTap($event)\">\n    <template let-item=\"item\" let-i=\"index\" let-odd=\"odd\" let-even=\"even\">\n        <DockLayout [class.odd]=\"odd\" [class.even]=\"even\">\n            <StackLayout orientation=\"horizontal\">\n            <Label [text]='\"index: \" + i'></Label>\n            </StackLayout>\n            <StackLayout orientation=\"horizontal\">\n            <Label [text]='\"[\" + item.id +\"] \" + item.name'></Label>\n            </StackLayout>\n        </DockLayout>\n    </template>\n   </ListView>\n   ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], ListTest);
    return ListTest;
}());
exports.ListTest = ListTest;
//# sourceMappingURL=listTest.js.map