import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component {
  isShow: boolean = false;
  Id: any;

  constructor(private route: ActivatedRoute) { }

  //Example of route with a parameter.
  ngOnInit() {
    // Get Id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.Id = Number(routeParams.get('Id'));

    console.log(">>" + this.Id);
  }

  onCheckboxChange(e: any) {
    //assert(e.target.checked == isShow)
    console.log(e.target.checked);
    console.log(this.isShow);
  }
}
