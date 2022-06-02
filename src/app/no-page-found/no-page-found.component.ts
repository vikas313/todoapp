import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-page-found',
  template: `
    <p>
      no page found
    </p>
  `,
  styles: [
    `
    p{
      color:black;
      margin-top:5rem;
      text-align:center
    }
    `
  ]
})
export class NoPageFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
