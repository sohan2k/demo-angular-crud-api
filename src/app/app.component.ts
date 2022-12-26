import { Component,OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Prac-frame';
  ngOnInit() {
    //Toggle Click Function
    $("#menu-toggle").click(function(e: { preventDefault: () => void; }) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    });
  }
}
