import { Component } from '@angular/core';
import { DarkModeService } from './dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-converter';

mode_bit:any;

  constructor(public _darkmode: DarkModeService) { }

  ngOnInit(): void {
    // localStorage.setItem('mode-bit', JSON.stringify(this.mode_bit));


this.mode_bit=localStorage.getItem('mode-bit')
console.log("value", this.mode_bit)
console.log("type:",typeof(this.mode_bit));

this.mode_bit= this.mode_bit === 'true' ? true:false;
console.log("value2", this.mode_bit)
console.log("type:",typeof(this.mode_bit));
this._darkmode.change_mode(this.mode_bit);


  }


}
