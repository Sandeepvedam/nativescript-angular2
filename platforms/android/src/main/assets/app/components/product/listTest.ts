import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

class DataItem {
    constructor(public id: number, public name: string) { }
}

@Component({
    selector: 'list-test',
    styleUrls: ['components/product/list-test.css'],
    template: `
    <ListView [items]="myItems" (itemTap)="onItemTap($event)">
    <template let-item="item" let-i="index" let-odd="odd" let-even="even">
        <DockLayout [class.odd]="odd" [class.even]="even">
            <StackLayout orientation="horizontal">
            <Label [text]='"index: " + i'></Label>
            </StackLayout>
            <StackLayout orientation="horizontal">
            <Label [text]='"[" + item.id +"] " + item.name'></Label>
            </StackLayout>
        </DockLayout>
    </template>
   </ListView>
   `,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListTest {
    public myItems: Array<DataItem>;
    private counter: number;

    constructor() {
        this.myItems = [];
        this.counter = 0;
        for (var i = 0; i < 50; i++) {
            this.myItems.push(new DataItem(i, "data item " + i));
            this.counter = i;
        }
    }

    public onItemTap(args) {
        console.log("------------------------ ItemTapped: " + args.index);
    }
}