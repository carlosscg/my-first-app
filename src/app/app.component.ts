import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'is my-first-app';

  username = ''
  enableUsernameBtn = false;
  
  onExistsUser(event: any){
    var text = (<HTMLInputElement>event.target).value;
    this.enableUsernameBtn = text != '';
  }

  onUserNameExists(event: any){
    this.username =''
    this.enableUsernameBtn = false;
  }
}
