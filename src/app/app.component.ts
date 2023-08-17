// import { Component } from '@angular/core';
// import { HamburgerService } from './hamburger.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title:string = 'unstop-frontend';
//   isSidePanelOpen: boolean = false ;

//   sideMenuMode:string = 'side';
//   innerWidth: any;

//   constructor( private hamburgerService: HamburgerService) {
//     this.hamburgerService.isOpen$.subscribe((isOpen: boolean) => {
//       console.log("isOpen " + isOpen)
//       this.isSidePanelOpen = isOpen;
//     });
//     this.innerWidth = (window.screen.width) + "px";
//     console.log("innerWidth " + this.innerWidth)
//     if(this.innerWidth < "800px")
//     this.toggleSideMode();
//   }

//   toggleSideMode():void {
//     if(this.innerWidth < "800px"){
//       this.sideMenuMode = "over";}
//       else {
//         this.sideMenuMode = "side";
//       }
//       console.log("toggle");
    
//     }

// }


import { Component, OnInit, HostListener } from '@angular/core';
import { HamburgerService } from './hamburger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'unstop-frontend';
  isSidePanelOpen: boolean = false;
  sideMenuMode: any = 'side';
  innerWidth: number;

  constructor(private hamburgerService: HamburgerService) {
    this.hamburgerService.isOpen$.subscribe((isOpen: boolean) => {
      console.log("isOpen " + isOpen);
      this.isSidePanelOpen = isOpen;
    });

    this.innerWidth = window.innerWidth;
    console.log("innerWidth " + this.innerWidth);
    this.toggleSideMode(); // Initial call based on the current width
  }

  ngOnInit() {
    this.updateSideMode(); // Call on component initialization
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateSideMode(); // Call whenever the window is resized
  }

  toggleSideMode(): void {
    if (this.innerWidth < 800) {
      this.sideMenuMode = "over";
      this.isSidePanelOpen=false;
    }
    else {
      this.sideMenuMode = "side";
      this.isSidePanelOpen = true;
    }
    
    // console.log("toggle");
    console.log("toggle - innerWidth: " + this.innerWidth + ", sideMenuMode: " + this.sideMenuMode);

    

  }

  updateSideMode(): void {
    this.innerWidth = window.innerWidth;
    console.log("innerWidth " + this.innerWidth);
    this.toggleSideMode(); // Update the side menu mode based on the new width
  }
}