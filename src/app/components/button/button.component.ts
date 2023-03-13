import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = "";//store the exterior data .

  @Output() btnClick = new EventEmitter();
  @Output() btnClickWithParameter = new EventEmitter<string>();

  //Example of emit the event with a parameter.
  myText: string = "Hello, Parent!";

  onClick() {
    this.btnClick.emit();
  }

  onDblClick(text: string) {
    //Example of Emit with the Parameter
    this.btnClickWithParameter.emit(text);
  }

}
