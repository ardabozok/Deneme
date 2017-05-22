import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
 /* template: `
    <app-server></app-server>
    <app-server></app-server>`,*/
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

   allowNewServer = false;
   
   username : string;
   
   serverCreationStatus = 'No server created!';
   
  constructor() {
      
      setTimeout(() => {this.allowNewServer = true;}, 2000 );
  }
  
  onCreateServer(){
      this.serverCreationStatus = 'Server succesfully created!';
  }
  
  
  showMessage = false;
  showMessageClick(){
      this.showMessage = !this.showMessage;
  }
  
  ngOnInit() {
      
     
  }

}
