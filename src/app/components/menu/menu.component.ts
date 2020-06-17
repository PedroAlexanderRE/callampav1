import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var contador=1;

    $('.menu_bar').click(function(){
      // $('nav').toggle(); 
   
      if(contador == 1){
        $('nav').animate({
          left: '0'
        });
        contador = 0;
      } else {
        contador = 1;
        $('nav').animate({
          left: '-100%'
        });
      }
   
    });
  }

}
