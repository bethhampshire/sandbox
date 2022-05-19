import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor() { 
    let Tv = document.getElementById("TV");
  }
  


  ngOnInit(): void {
    let Tv = document.getElementById("TV");

    

    Tv?.setAttribute("height", window.innerHeight.toString());
    Tv?.setAttribute("width", window.innerWidth.toString());
  }

  title = 'sandboxUI';
  

}

