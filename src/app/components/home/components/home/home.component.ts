import { Component, OnInit } from '@angular/core';
declare var customJs: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    // for call custom js file
    new customJs();
  }
}
