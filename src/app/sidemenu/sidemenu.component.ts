import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
  tab: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  changeTab(tab: string): void {
    this.tab = tab;
  }
  
}
