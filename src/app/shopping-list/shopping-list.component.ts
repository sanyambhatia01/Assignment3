import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent  {
  listOfItems=[];
   
  @Output() addListEvent = new EventEmitter<any>();
   
  addItem(value:string){
  this.listOfItems.push(value);
  }
  onAddItems(){
    this.addListEvent.emit(this.listOfItems);
  }
  
  }
  
