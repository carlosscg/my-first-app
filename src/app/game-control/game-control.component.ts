import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFiredX = new EventEmitter<number>();

  lastNumber = 0;
  
  interval;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.interval = setInterval(() => {
      this.intervalFiredX.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onStopGame(){
    clearInterval(this.interval)
  }

}
