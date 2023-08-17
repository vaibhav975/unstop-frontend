import { Component, OnInit, ViewChild } from '@angular/core';
import { NewformComponent } from '../newform/newform.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatAccordion } from '@angular/material/expansion';
import { BehaviorSubject, Observable } from 'rxjs';
import { HamburgerService } from '../hamburger.service';



@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {
  isOpen: boolean = true;
  

  constructor(public dialog: MatBottomSheet, private hamburgerService: HamburgerService ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NewformComponent);
  }

  ngOnInit(): void {
  }

  toggleExpansionPanel(): void {
    this.isOpen = !this.isOpen;
    console.log("toggleExpansionPanel");
  }

  openExpansionPanel(): void {
    this.isOpen = true;
  }

  closeExpansionPanel(): void{
    this.isOpen = false;
  }

  toggleHamburger(): void {
    this.hamburgerService.toggle();
  }


 

}
