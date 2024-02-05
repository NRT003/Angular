import { Component } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css'
})
export class ConnectComponent 
{
  connected: boolean = false;
  selectedOption: string = "";
  selectOption: string = "";
  options: any;

  connect() {
    // Add your connection logic here
    this.connected = true;
  }

}



