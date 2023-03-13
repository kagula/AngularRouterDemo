import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(private router: Router) { }

  gotoNextPage() {
    this.router.navigate(['/workspace']);

    //Further reading ref to https://angular.io/guide/router#specifying-a-relative-route
  }
}
