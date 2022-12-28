import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() HeadArray :any[] = [];
  @Input() BodyArray :any[] = [];
  @Input() updateModal:any;
  @Input() deleteModal:any;
  @Output() onUpdate =new EventEmitter<any>();
  @Output() onDelete =new EventEmitter<any>();
  update(item:any){
    this.onUpdate.emit(item);
  }

  delete(item:any){
    this.onDelete.emit(item);
  }

}
