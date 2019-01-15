import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'is my-first-app';
  /*
  showDetails = false;
  showClickNumber = true;
  click_number = 0;
*/
log = [];
showSecret = false;

  constructor() {

  }

  /*
  logClick(){
    console.log('Click')
    this.click_number++;
    this.showClickNumber = true;
    this.showDetails = !this.showDetails;
  }

  getColor(){
    return this.click_number > 4 ? 'blue' : 'white';
  }
  */
  onToogleDetails(){
   this.showSecret = !this.showSecret;
   this.log.push(new Date())
 }

}
