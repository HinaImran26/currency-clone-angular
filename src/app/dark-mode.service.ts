import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  
  mode:boolean=true;
  ele:any;

  constructor() { }


  change_mode(mode:boolean){
    this.mode=mode;
// console.log("value via service:",this.mode)

if(this.mode===false){
this.ele = document.querySelector(':root');
console.log("ele:",this.ele)
this.ele.style.setProperty('--white-color', '#001634');
this.ele.style.setProperty('--dark-blue-color', 'white');
 
}

else if(this.mode===true) {
  this.ele.style.setProperty('--white-color', 'white');
  this.ele.style.setProperty('--dark-blue-color', '#001634');
}

}





}





