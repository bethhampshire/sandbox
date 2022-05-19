import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.scss']
})
export class ButtonContainerComponent implements OnInit {
  disabled = true;
  constructor(
    
  ) { 
    
  }

  ngOnInit(): void {
    this.disabled = false;
  }
  
  disableButton(): void{
    this.disabled = true;
  }
}
