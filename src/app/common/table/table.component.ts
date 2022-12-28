import { Component, EventEmitter, Input, Output ,OnInit} from '@angular/core';
import { ADTSettings } from 'angular-datatables/src/models/settings';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  
  @Input() HeadArray :any[] = [];
  @Input() BodyArray :any[] = [];
  @Input() updateModal:any;
  @Input() deleteModal:any;
  @Output() onUpdate =new EventEmitter<any>();
  @Output() onDelete =new EventEmitter<any>();

  // for datatable
  @Input() dtOptions:any;
  @Input() dtTrigger:any;
  ngOnInit(): void {
  }

  update(item:any){
    this.onUpdate.emit(item);
  }

  delete(item:any){
    this.onDelete.emit(item);
  }

}
