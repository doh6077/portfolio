import { Component, Input } from '@angular/core';
import {Content, Projects} from '../interaceCP';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sname = "Dohee Kim";
  srole = "software developer";
  @Input() content!:Content

}
