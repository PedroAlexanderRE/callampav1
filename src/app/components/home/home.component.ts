import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.slider').bxSlider({
      auto: true,
      stopAutoOnClick: true,
      pager: false,
      speed:500,
      pause: 2000,
      infiniteLoop: true,
      controls:false,
      autoHeigth:false,
      slideWidth:1400
    });
  }

}
