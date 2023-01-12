import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private router: Router) {
  }

  // for redirect to the home page
  redirectToHomeMenu() {
    this.router.navigate(['/homePage']);
  }
}
