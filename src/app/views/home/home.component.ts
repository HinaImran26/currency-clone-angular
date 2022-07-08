import { Component, OnInit } from '@angular/core';
// import { timeStamp } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

img_src="../../../assets/images/day.png";

  constructor() { }

  ngOnInit(): void {
  }

  changeimg(num:any){

this.ani();

if (num==1)
this.img_src="../../../assets/images/day.png"; 
else if (num==2)
this.img_src="../../../assets/images/week.png";
else if (num==3)
this.img_src="../../../assets/images/month.png";
else if (num==4)
this.img_src="../../../assets/images/year.png";

 }

  ani() {
    // document.querySelector("#stats").className = 'anim';
    document.getElementById("stats")?.classList.toggle("anim");
}

}
