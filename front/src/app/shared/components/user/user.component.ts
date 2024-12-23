import {Component} from '@angular/core';
import {LeftSideBarComponent} from '../left-side-bar/left-side-bar.component';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-user',
  imports: [
    LeftSideBarComponent, FooterComponent, HeaderComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
