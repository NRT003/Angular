import { Component } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent 
{
  queryed:boolean=false;
  query() 
  {
    // Add your query logic here
    this.queryed = true;
  }
}
