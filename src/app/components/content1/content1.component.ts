import { Component } from '@angular/core';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css']
})
export class Content1Component {
  text: string = "";

  onClick() {
    console.log('on click.');
  }

  onClick2(strText:string) {
    console.log('on click >> ' + strText);
  }
}
