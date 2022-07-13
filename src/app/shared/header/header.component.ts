import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

mode:boolean=true; //true-lightmode
icon_light:string= "../../../assets/images/moon.png";
icon_dark:string= "../../../assets/images/moon (1).png";
icon_source:string="./../../assets/images/moon (1).png";

  constructor(public _darkmode:DarkModeService) { }

  ngOnInit(): void {

    // let temp=localStorage.getItem('mode-bit')
    // localStorage.setItem('mode-bit', JSON.stringify(temp));
  }

change_mode(){

this.mode=!this.mode;
// console.log(this.mode);
localStorage.setItem('mode-bit', JSON.stringify(this.mode));
this._darkmode.change_mode(this.mode);

if(this.mode===true)
this.icon_source=this.icon_dark;
else if(this.mode===false)
this.icon_source=this.icon_light;
}


}
