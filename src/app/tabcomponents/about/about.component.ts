import { Component, Input } from '@angular/core';
import {Content, Projects} from '../../interaceCP';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() content!:Content

}
