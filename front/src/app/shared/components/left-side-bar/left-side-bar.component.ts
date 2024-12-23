import { Component } from '@angular/core';

@Component({
  selector: 'app-left-side-bar',
  imports: [],
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.css'
})
export class LeftSideBarComponent {
  onButtonClick(buttonLabel: string): void {
    console.log(`${buttonLabel} clicked`);
    // Add additional logic here if needed
  }
}
